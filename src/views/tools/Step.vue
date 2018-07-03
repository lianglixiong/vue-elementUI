<template>
	<div class="page-area">
		<div class="bread-crumb">
			<el-breadcrumb separator=">>">
				<el-breadcrumb-item><span class="el-icon-menu"></span> 工具类</el-breadcrumb-item>
				<el-breadcrumb-item>步骤引导</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="page-body">
            <h2>引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步~~</h2><hr>
            <div class="data-show">
            	<el-button class="item" @click="go('../form/baseform')">基本的进度条</el-button><br>
            	<el-button class="item" @click="go('../table/ele')">简约风格进度条</el-button><br>
            	<a href="http://element-cn.eleme.io/#/zh-CN/component/steps">更多步骤条资料参考</a>
            </div>
        </div>
	</div>
</template>
<script>
	export default {
		methods:{
			go (path) {
				console.log(this.$router)
				this.$router.push(path);
			} 
		}
	}
</script>
<style scoped>
	.data-box{
		width:800px;
	}
	h3{
		font-size: 16px;
	}
	h4{
		font-size: 14px;
		padding-left: 30px;
	}
	.data-box{
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.item{
		margin-top: 10px;
	}
</style>