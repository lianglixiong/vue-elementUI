<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 通知</el-breadcrumb-item>
                <el-breadcrumb-item>加载提示</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>加载数据时显示动效~~</h2><hr>
            	<div class="item">
            		<el-button type="primary" @click="openByOrder" v-loading.fullscreen.lock="show">指令方式</el-button>
            		<el-button type="primary" @click="openByService">服务方式</el-button>
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
			openByOrder () {
				this.show = !this.show;
				setTimeout(() => {
		          this.show = !this.show;
		        }, 2000);
			},
			openByService () {
				const loading = this.$loading({
					lock:true,
					text:"正在拼命加载中~",
					background:'rgba(0,0,0,.1)',
					spinner: 'el-icon-loading'
				});
				setTimeout(() => {
		          loading.close();
		        }, 2000);
			}
		}
	}
</script>

<style type="text/css" scoped>
	.item{
		margin-top: 20px;
	}
</style>