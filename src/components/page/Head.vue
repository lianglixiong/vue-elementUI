<template>
	<div class="header">
		<div class="logo">后台管理系统</div>
		<div class="welcome">欢迎<span class="username">&nbsp;<slot name="username"></slot>&nbsp;</span>来到后台管理系统</div>
		<div class="user-info">
			<el-dropdown trigger="click" @command="handleCommand">
				<div class="head-icon">
					<img src="../../../static/img/head-icon.jpg"/>
					<span class="username"><slot name="_username"></slot></span>
				</div>
				<el-dropdown-menu>
					<el-dropdown-item command="know">了解该系统</el-dropdown-item>
					<el-dropdown-item command="resetPwd">修改密码</el-dropdown-item>
					<el-dropdown-item command="personalCenter">个人中心</el-dropdown-item>
					<el-dropdown-item command="exit">退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		methods:{
			handleCommand (command) {
				if(command == "know"){
					this.$router.push('/page/readme');
				}else if(command == "resetPwd"){
					this.$router.push('/page/resetPwd');
				}else if(command == "exit"){
					localStorage.removeItem("user-name");
					this.$router.push('/');
				}else if(command == "personalCenter"){
					this.$router.push('/page/personalCenter');
				}
			}
		}
	}
</script>

<style scoped>
	.header {
        position: relative;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color:#fff;
        background-color:#242f42;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .header .welcome {
    	position:absolute;
    	left:50%;
    	top:50%;
    	-webit-transform:translate3d(-50%,-50%,0);
    	transform:translate3d(-50%,-50%,0);
    }
    .username{
    	color:#ff3333;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
        cursor:pointer;
    }
    .user-info img{
        width:40px;
        height:40px;
        border-radius: 50%;
        vertical-align:middle;
        margin-right:15px;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>