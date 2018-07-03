<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 通知</el-breadcrumb-item>
                <el-breadcrumb-item>短消息</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>常用于主动操作后的反馈提示~~</h2><hr>
            	<div class="data-box">
            		<el-button :plain="true" @click="infoMsg">消息</el-button>
					<el-button :plain="true" @click="successMsg">成功</el-button>
					<el-button :plain="true" @click="warningMsg">警告</el-button>
					<el-button :plain="true" @click="errorMsg">错误</el-button>
					<el-button :plain="true" @click="noClose">不关闭</el-button>
					<el-button :plain="true" @click="htmlMsg">使用HTML片段</el-button>
            	</div>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		methods:{
			infoMsg () {
				this.$message("我3秒后自动关闭，不可手动来关闭呦~");
			},
			successMsg () {
				this.$message({
					message:"我2秒后自动关闭，不可手动关闭",
					type:"success",
					duration:2000
				});
			},
			warningMsg () {
				this.$message({
					message:"我3秒后自动关闭，期间也可以手动关闭哦~",
					type:"warning",
					showClose:true
				});
			},
			errorMsg () {
				this.$message({
					message:"居中显示为什么不生效呢~",
					type:"error",
					center:true
				});
			},
			noClose () {
				this.$message({
					message:"你只要不点击关闭，我就永远关闭不了",
					showClose:true
				});
			},
			htmlMsg () {
				this.$message({
					messgae:'<strong>这是 <i>HTML</i> 片段</strong>',
					dangerouslyUseHTMLString:true
				});
			}
		}
	}
</script>

<style type="text/css" scoped>
	.data-box{
		margin-top: 20px;
	}
</style>