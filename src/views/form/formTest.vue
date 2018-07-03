<template>
	<div class="form-area">
		<div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>表单验证</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>在本页面中，我将以创建一个活动的场景来大致描述一下表单验证的使用~~不好意思，让您贱笑了</h2><hr>
            	<el-form :model="form" :rules="rules" ref="form" label-width="100px">
					<el-form-item label="活动名称：" prop="name" class="item">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="活动区域：" prop="region" class="item">
					    <el-select v-model="form.region" placeholder="请选择活动区域" clearable>
						    <el-option-group v-for="item in addressList" :label="item.label">
	        					<el-option v-for="subitem in item.options" :label="subitem.name" :value="subitem.value"></el-option>
	        				</el-option-group>
					    </el-select>
					</el-form-item>
					<el-form-item label="活动时间：" required>
					    <el-col :span="6">
					      <el-form-item prop="start">
					        <el-date-picker type="date" placeholder="选择开始日期" :picker-options="pickerOptions"  v-model="form.start" style="width: 100%;"></el-date-picker>
					      </el-form-item>
					    </el-col>
					    <el-col class="line" :span="2">至</el-col>
					    <el-col :span="6">
					      <el-form-item prop="end">
					        <el-date-picker type="date" placeholder="选择结束日期" :picker-options="pickerOptions" v-model="form.end" style="width: 100%;"></el-date-picker>
					      </el-form-item>
					    </el-col>
					</el-form-item>
					<el-form-item label="即时配送：" prop="delivery">
					    <el-switch v-model="form.delivery"></el-switch>
					</el-form-item>
					<el-form-item label="活动性质：" prop="type">
					    <el-checkbox-group v-model="form.type">
						    <el-checkbox label="1" name="type">美食/餐厅线上活动</el-checkbox>
						    <el-checkbox label="2" name="type">地推活动</el-checkbox>
						    <el-checkbox label="3" name="type">线下主题活动</el-checkbox>
						    <el-checkbox label="4" name="type">单纯品牌曝光</el-checkbox>
					    </el-checkbox-group>
					</el-form-item>
					<el-form-item label="特殊资源：" prop="resource">
					    <el-radio-group v-model="form.resource">
					    	<el-radio label="1">线上品牌商赞助</el-radio>
					    	<el-radio label="2">线下场地免费</el-radio>
					    </el-radio-group>
					</el-form-item>
					<el-form-item label="活动简介：" prop="desc">
					    <el-input type="textarea" v-model="form.desc"></el-input>
					</el-form-item>
					<el-form-item>
					    <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
					    <el-button @click="resetForm('form')">重置</el-button>
					</el-form-item>
            	</el-form>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		data () {
			let self = this;
			return {
				form:{
					name:"",
					region:"",
					start:"",
					end:"",
					delivery:false,
					type:[],
					resource:"1",// 不能写成1
					desc:""
				},
				rules:{
					name:[
						{ required: true, message: '请输入活动名称', trigger: 'blur' },
						{ min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
					],
					region:[
						{ required: true, message: '请选择活动区域',trigger:"change"}
					],
					start:[
						{ type:"date", required: true, message: '请选择活动开始时间',trigger:"blur"}
					],
					end:[
						{ type:"date", required: true, message: '请选择活动结束时间',trigger:"blur"}
					],
					type:[
						{ type:"array", required:true, message:"至少选择一个活动性质", trigger:"change"}
					],
					desc:[
						{required:true, message:"请填写活动描述",trigger:"blur"},
						{max:100,message:"最大字数限制为100字符",trigger:"blur"}
					]
				},
				pickerOptions:{
					disabledDate (time) {
						return time.getTime() < Date.now();
					}
				},
				addressList:[]
			}
		},
		created () {
			let self = this;
            if(process.env.NODE_ENV === 'development'){
                self.url = 'static/data/level.json';
            };
            self.$axios.get(self.url).then( (res) => {
               	self.addressList = res.data.address.slice(0);
            });
		},
		methods:{
			submitForm (name) {
				let self = this;
				self.$refs[name].validate( (valid) => {
					if(valid){
						self.$message("well done！");
					}else{
						self.$message.error("error submit!");
						return false;
					}
				})
			},
			resetForm (name) {
				this.$refs[name].resetFields();
			}
		}
	}
</script>

<style scoped>
	.info-input-area{
		padding:20px;
	}
	h2{
		line-height: 40px;
		color:#333;
		font-size: 16px;
		color:#ff3333;
		font-weight: bolder;
	}
	.item {
		margin-top: 20px;
	}
	.line{
		text-align: center;
	}
</style>