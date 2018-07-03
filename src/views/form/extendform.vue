<template>
	<div class="form-area">
		<div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>扩展表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="info-input-area">
            <h2>在本页面你需要设置一下下面的选项，对您将来的店铺展示很有帮助呦~~</h2><hr>
            <div>
				<step :steps="steps" :active="1"></step>            		
        	</div>
            <el-form :model="form" :rules="rules" ref="form" label-width="150px">
            	<el-form-item class="item" label="店铺发货时间：">
        			<el-time-select placeholder="起始时间" prop="deliverStart" v-model="form.deliverStart" :picker-options="{start: '08:00',step: '00:15',end: '18:00',maxTime:form.deliverEnd}"></el-time-select>
        			<span>&nbsp;至&nbsp;</span>
        			<el-time-select placeholder="结束时间" prop="deliverEnd" readonly v-model="form.deliverEnd" :picker-options="{start: '08:00',step: '00:15',end: '18:00',minTime:form.deliverStart}"></el-time-select>
        		</el-form-item>
        		<el-form-item class="item" label="店铺营业时间：" prop="businessTime">
        			<el-time-picker is-range v-model="form.businessTime" arrow-control range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间"  placeholder="选择时间范围">
					</el-time-picker>
        		</el-form-item>
        		<el-form-item class="item" label="店铺注册日期：" prop="registerTime">
        			<el-date-picker v-model="form.registerTime" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"  default-value="2018-01-01"></el-date-picker>
        		</el-form-item>
        		<el-form-item class="item" label="店铺使用日期：">
        			<el-date-picker v-model="form.useTime" type="daterange"  placeholder="选择日期" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy年MM月dd日" value-format="yyyy-MM-dd" default-value="2018-10-01"></el-date-picker>
        		</el-form-item>
        		<el-form-item class="item" label="店铺主题色：">
        			<el-color-picker v-model="form.color" prop="themeColor" :show-alpha="opacity" color-format="rgb"></el-color-picker>
        			<el-checkbox v-model="opacity" style="margin-left:20px;">设置透明度</el-checkbox>
        		</el-form-item>
        		<el-form-item class="item" label="选择商品分类：">
        			<el-transfer v-model="form.categoryList" :data="categoryList"  filterable :filter-method="filterMethod" filter-placeholder="请输入分类名称"
        				 :titles="['平台分类', '采购分类']"  :button-texts="['移除', '添加']"
        				 :format="{noChecked: '${checked}/${total}',hasChecked: '${checked}/${total}'}"
        				 :left-default-checked="['1002','1010']"
        				 :props="{'key':'categoryId','label':'catoryName'}">
					    <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
					    <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
				  </el-transfer>
        		</el-form-item>
        		<el-form-item class="item" label="">
        			<el-button type="primary" @click="onSubmit('form')" :loading="loading">保存</el-button>
        			<el-button type="primary" @click="gotoNext">下一步</el-button>
                	<el-button plain>取消</el-button>
        		</el-form-item>
        	</el-form>
        </div>
	</div>
</template>

<script type="text/javascript">
	import Step from "components/Step";
	export default {
		data () {
			return {
				form:{
					color:"#3794EB"
				},
				rules:{
					deliverStart:[]
				},
				categoryList:[],
				filterMethod (query, item) {//扩展模糊查询的范围至分类id
		          return item.categoryId.indexOf(query) > -1;
		        },
				opacity:false,
				loading:false,
				pickerOptions:{
					disabledDate (time) {
						return time.getTime() > Date.now();
					},
					shortcuts:[
						{
							text:"今天",
							onClick (picker) {
								picker.$emit('pick',new Date())
							}
						},{
							text:"昨天",
							onClick (picker) {
								picker.$emit('pick',new Date()-24*3600*1000)
							}
						},{
							text:"一周前",
							onClick (picker) {
								picker.$emit('pick',new Date()-24*3600*1000*7)
							}
						},{
							text:"一月前",
							onClick (picker) {
								picker.$emit('pick',new Date()-24*3600*1000*30)
							}
						}
					]
				},
				steps:[
					{title:"基本表单",desc:"介绍表单的基本控件"},
					{title:"扩展表单",desc:"介绍一些稍微高级的表单运用，如时间，颜色 ……"},
					{title:"评价效果",desc:"如评价效果展示"}
				]
			}
		},
		components:{
			Step
		},
		mounted () {
			const self = this;
            if(process.env.NODE_ENV === 'development'){
                self.url = 'static/data/category.json';
            };
            self.$axios.get(self.url).then( (res) => {
               	self.categoryList = res.data.map(item => {
               		item.disabled = item.canUse == 0;
               		delete item.canUse;
               		return item;
               	});
            });
		},
		methods:{
			onSubmit (formname){
				let self = this;
				self.loading = true;
				self.$refs[formname].validate(
					(valid) => {
						if(valid){
							self.$message("保存成功！");
						}else{
							self.loading = false;
							self.$message("有非法选项！");
						}
					}
				)
			},
			gotoNext () {
				this.$router.push('./registerDone');
			}
		}
	}
</script>

<style type="text/css" scoped>
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