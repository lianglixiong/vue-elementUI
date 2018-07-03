<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 通知</el-breadcrumb-item>
                <el-breadcrumb-item>警告</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>看看你熟悉的警告框，有什么不一样~~</h2><hr>
            	<el-alert :title="title" :type="type" :description="desc" :closable="closable" :center="center" 
            		:close-text="closetext" :show-icon="icon" @close="handleClose" class="item">
            	</el-alert>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				title:"我是标题",
				type:"info",//success/warning/info/error
				closable:true,
				center:false,
				closetext:"关闭",
				icon:true,
				desc:"这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
			}
		},
		methods:{
			handleClose () {
				this.$message("想直接删除我，没门~");
				this.handleClose = false;
			}
		}
	}
</script>

<style type="text/css" scoped>
	.item{
		margin-top: 20px;
	}
</style>