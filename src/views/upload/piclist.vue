<template>
	<div class="wrap">
		<div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>上传组件-图片列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="info-input-area">
           	<h2>接下来，很高兴与你一起分享elementUI的上传组件功能~~</h2><hr>
           	<h3 class="content-title">图片列表缩略图</h3>
           	<el-upload
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :file-list="fileList" list-type="picture">
			  <el-button size="small" type="primary">点击上传</el-button>
			  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb </div>
			</el-upload>
			<div class="btn-area">
				<el-button @click.native="goPrev">返回</el-button>
				<el-button type="primary" @click="goNext">进入拖拽上传篇</el-button>				
			</div>
        </div>
    </div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				fileList:[]
			}
		},
		methods:{
			goNext () {
				this.$router.push('./dragUpload')
			},
		    goPrev () {
		    	this.$router.back();
		    }
		}
	}
</script>

<style type="text/css" scoped>
	.info-input-area{
		padding:20px;
	}
	h2{
		line-height: 40px;
		color:#333;
		font-size: 16px;
		color:#ff3333;
		font-weight: bolder;
	}
	.content-title{
		line-height: 100px;
		color:#333;
		padding-left: 20px;
		text-align: center;
	}
	.upload-area {
		padding:30px;
		border:2px solid #ccc;
	}
	.font-warn{
		color:#ff3333;
		line-height: 30px;
	}
	.btn-area{
		padding:30px;
		text-align: center;
	}
	
	
</style>