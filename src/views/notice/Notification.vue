<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 通知</el-breadcrumb-item>
                <el-breadcrumb-item>全局通知</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>悬浮出现在页面角落，显示全局的通知提醒消息。~~</h2><hr>
            	<div class="item">
            		<el-button  plain @click="successFn">成功</el-button>
            		<el-button  plain @click="infoFn">消息</el-button>
            		<el-button  plain @click="warningFn">警告</el-button>
            		<el-button  plain @click="errorFn">错误</el-button>
            		<el-button  plain @click="clickFn">功能测试</el-button>
            	</div>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		methods:{
			successFn () {
				this.$notify({
					title:"右上角提示",
					message:"这是一条不会自动关闭的文案,我默认出现在右上角",
					duration:0,
					type:"success"
				});
			},
			infoFn () {
				this.$notify({
					title:"标题",
					message:"快看我，我偏离顶部200px",
					offset:200,
					showClose:false
				});
			},
			warningFn () {
				this.$notify({
					title:"右下角提示",
					message:"看我在哪？4.5秒后自动关闭，也可手动关闭哦",
					type:"warning",
					position:"bottom-right"
				});
			},
			errorFn () {
				this.$notify({
					title:"错误",
					dangerouslyUseHTMLString: true,
					message:'<strong>请尽量避免使用html，会造成xls攻击</strong>',
					type:"error"
				});
			},
			clickFn () {
				let self = this;
				this.$notify({
					title:"功能测试",
					message:"点击和关闭我试试看",
					duration:0,
					onClick () {
						self.$message({
							message:"别碰我"
						});
					},
					onClose () {
						self.$message({
							message:"不要关闭我"
						});
					}
				});
			}
		}
	}
</script>

<style type="text/css" scoped>
	.item{
		margin-top: 20px;
	}
</style>