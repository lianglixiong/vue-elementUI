<template>
	<div class="pwd-wrap">
		<el-form :label-position="position" :model="form" status-icon :rules="rules" ref="form" label-width="200px">
		  <el-form-item label="请输入原密码：" prop="oldPass">
		    <el-input type="password" v-model="form.oldPass" auto-complete="off"></el-input>
		  </el-form-item>
		   <el-form-item label="请输入新密码：" prop="pass">
		    <el-input type="password" v-model="form.pass" :disabled="disabled" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item label="确认新密码：" prop="checkPass">
		    <el-input type="password" v-model="form.checkPass" :disabled="disabled" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('form')">提交</el-button>
		    <el-button @click="resetForm('form')">重置</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default {
		data () {
			var self = this;
			return {
				form:{
					oldPass:"",
					pass:"",
					checkPass:""
				},
				rules:{
					oldPass:[
						{required:true,message:"请输入原密码",trigger:"blur"},
						{validator:self.checkOldPwd,message:"原密码输入有误",trigger:"blur"}
					],
					pass:[
						{required:true,message:"请填写密码",trigger:"blur"},
						{validator:self.validatePass,trigger:"blur"}
					],
					checkPass:[
						{required:true,message:"请填写密码",trigger:"blur"},
						{validator:self.checkPass,trigger:"blur"}
					]
				},
				position:"top",
				disabled:true,
				counter:0
			}
		},
		watch:{
			counter (val) {
				if(val>5){
					this.$message.error("对不起，您输入错误次数已达到上限！");
				}
			}
		},
		methods:{
			checkOldPwd (rule,value,cb) {
				const pwd = localStorage.getItem("user-pwd");
				if(pwd != this.form.oldPass){
					this.counter ++;
					this.disabled = true;
					cb(new Error("原密码输入有误！请重新输入"));
				}else{
					this.disabled = false;
					cb();
				}
			},
			validatePass (rule,value,cb) {
				let self = this;
				if(self.form.checkPass){
					self.$refs.form.validateField("checkPass");
				}else{
					cb();
				}
			},
			checkPass (rule,value,cb) {
				let self = this;
				if(self.form.pass != value){
					cb(new Error("两次输入密码不一致!"));
				}else{
					cb();
				}
			},
			submitForm (name) {
				let self = this;
				self.$refs[name].validate(
					(valid) => {
						if(valid){
							self.$message("验证通过！");
							self.$router.back();
						}else{
							self.$message.error("操作失败");
							return false;
						}
					}
				)
			},
			resetForm (name) {
				this.$refs[name].resetFields();
			}
		}
	}
</script>
<style scoped>
	
</style>