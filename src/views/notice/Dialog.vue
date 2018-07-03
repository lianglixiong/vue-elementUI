<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 通知</el-breadcrumb-item>
                <el-breadcrumb-item>加载提示</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容~~</h2><hr>
            	<div class="item">
            		<el-button plain @click="openAlert">消息提示</el-button>
            		<el-button plain @click="openConfirm">确认消息</el-button>
            		<el-button plain @click="openPromp">提交内容</el-button>
            		<el-button plain @click="openSelf">自定义</el-button>
            	</div>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				show:false
			}
		},
		methods:{
			openAlert () {
				let self = this;
				this.$alert("这是提示内容","我是标题",{
					confirmButtonText:"知道了",
					showClose:false,
					roundButton:true,
					callback: action => {
						self.$message({
							message:"您操作了："+action
						});
					}
				});
			},
			openConfirm () {
				let self = this;
				self.$confirm("你确定要卸载必要商城app吗","提示",{
					confirmButtonText:"残忍卸载",
					cancelButtonText:"再用用看",
					type:"warning",
					center:true
				}).then(() => {
					self.$message({
						type:"success",
						message:"已成功卸载"
					});
				}).catch(()=> {
					self.$message({
						message:"发生了一个错误，导致卸载不完成，请重试",
						type:"error"
					});
				});
			},
			openPromp () {
				let self = this;
				self.$prompt("请输入您的邮箱","提示",{
					confirmButtonText:"我输入好了",
					cancelButtonText:"我不想输了",
					inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
					inputErrorMessage:"邮箱格式不正确",
					inputPlaceholder:"请输入邮箱"
					//beforeClose () {
					//	this.$message({
					//		message:"你已经狠心的放弃了",
					//		type:"warning"
					//	});
					//}
				}).then((val) => {
					self.$message({
						type:"success",
						message:"您输入的邮箱是："+val.value
					});
				}).catch(() => {
					self.$message({
						message:"取消输入",
						type:"warning"
					});
				})
			},
			openSelf () {
				this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
		        	dangerouslyUseHTMLString: true
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