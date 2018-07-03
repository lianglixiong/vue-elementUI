<template>
	<div class="page-area">
		<div class="bread-crumb">
			<el-breadcrumb separator=">>">
				<el-breadcrumb-item><span class="el-icon-menu"></span> 工具类</el-breadcrumb-item>
				<el-breadcrumb-item>进度条</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="page-body">
            <h2>进度条常用于展示操作进度，告知用户当前状态和预期~~</h2><hr>
            <div class="data-show">
            	<h3>线性进度条</h3>
            	<h4>百分比外显</h4>
            	<div class="data-box">
            		<el-progress :percentage="0"></el-progress>
					<el-progress :percentage="70"></el-progress>
					<el-progress :percentage="100" status="success"></el-progress>
					<el-progress :percentage="50" status="exception"></el-progress>
            	</div>
            	<h4>百分比内显</h4>
            	<div class="data-box">
            		<el-progress :text-inside="true" :stroke-width="20" class="item" :percentage="0"></el-progress>
					<el-progress :text-inside="true" :stroke-width="20" class="item" :percentage="70"></el-progress>
					<el-progress :text-inside="true" :stroke-width="20" class="item" :percentage="100" status="success"></el-progress>
					<el-progress :text-inside="true" :stroke-width="20" class="item" :percentage="50" status="exception"></el-progress>
            	</div>
            	<h3>环形进度条</h3>
            	<div class="data-box">
            		<el-progress type="circle" width="150" class="item" :percentage="0"></el-progress>
					<el-progress type="circle" width="150" :stroke-width="10" class="item" :percentage="70"></el-progress>
					<el-progress type="circle" width="150" class="item" :percentage="100" status="success"></el-progress>
					<el-progress type="circle" width="150" class="item" :stroke-width="20" :percentage="50" status="exception"></el-progress>
            	</div>
            </div>
        </div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				
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