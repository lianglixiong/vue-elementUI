<template>
	<div class="wraper">
		<div class="login-wrap">
			<div class="login-wrap-title">后台管理系统</div>
			<div class="login-wrap-from">
				<el-form :model="userInfo" :rules="rules" ref="form" label-width="0px" class="userinfo">
					<el-form-item prop="username">
						<el-input v-model="userInfo.username" placeholder="请输入用户名"/>
					</el-form-item>
					<el-form-item prop="userpwd">
						<el-input v-model="userInfo.userpwd" type="password" placeholder="请输入密码" @keyup.enter.native="submit('form')"/>
						<!-- .native的意思就是当你给一个vue组件绑定事件时候，要加上native！如果是普通的html元素！就不需要-->
					</el-form-item>
					<div class="login-btn">
						<el-button type="primary" @click="submit('form')">登 录</el-button>
					</div>
					<p class="login-til">PS：用户名和密码可以随便输入</p>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				userInfo : {
					username:"",
					userpwd:""
				},
				rules : {
					username:[
						{required:true,message:"请输入用户名",trigger:'blur'}
					],
					userpwd:[
						{required:true,message:"请输入密码",trigger:'blur'}
					]
				}
			}
		},
		methods : {
			submit  (formname)  {
				let self = this;
				self.$refs[formname].validate(
					(valid) => {
						if(valid){
							self.testUser();
						}else{
							console.error("登陆失败");
							return false;
						}
					}
				)
			},
			testUser () {
				const self = this;
	            if(process.env.NODE_ENV === 'development'){
	                self.url = 'static/data/account.json';
	            };
	            self.$axios.get(self.url).then( (res) => {
	               	let rel = res.data.some(item => {
	               		return item.name == self.userInfo.username && item.password == self.userInfo.userpwd;
	               	});
	               	if(rel){
	               		localStorage.setItem('user-name',self.userInfo.username);
	               		localStorage.setItem('user-pwd',self.userInfo.userpwd);
						self.$router.push('./page');
	               	}else{
	               		self.$message.warning("账号或者密码有误");
	               	}
	            });
			}
		}
	}
</script>

<style scoped>
	.wraper {
		position:relative;
		width:100%;
		height:100%;
		background-color:#324157;
	}
	.login-wrap {
		position:absolute;
		left:50%;
		top:50%;
		-webkit-transform:translate3d(-50%,-50%,0);
		transform:translate3d(-50%,-50%,0);
	}
	.login-wrap-title {
		font-size:30px;
		color:#fff;
		margin-bottom:20px;
		text-align:center;
	}
	.login-wrap-from {
		width:400px;
		padding:20px;
		background-color:#fff;
		border-radius:5px;
	}
	.login-btn button{
		width:100%;
		margin-bottom:20px;
	}
	.login-til {
		font-size:12px;
		color:#ff3333;
	}
</style>