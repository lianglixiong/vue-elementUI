<template>
	<div class="wrap">
		<div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>上传组件</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="info-input-area">
           	<h2>接下来，很高兴与你一起分享elementUI的上传组件功能~~</h2><hr>
           	<h3 class="content-title">点击立即上传</h3>
           	<div class="upload-area">
           		<el-upload
           			action="https://jsonplaceholder.typicode.com/posts/"
           			:limit="limit" :file-list="fileList" multiple :on-change="handleChange" :before-upload="handleBefore"
           			:on-exceed="handleExceed" :on-preview="handlePreview" :before-remove="beforeRemove" :on-remove="handleRemove"
           			:on-success="handleSuccess"
           			>
           			<el-button type="primary" size="small">点击上传</el-button>
           			<div slot="tip"><span class="font-warn">* 只能上传jpg/png文件，且不超过500kb</span></div>
				</el-upload>
           	</div>
           	<h3 class="content-title">手动触发上传</h3>
           	<div class="upload-area">
           		<el-upload
           			action="https://jsonplaceholder.typicode.com/posts/"
           			:limit="limit" :file-list="fileList" multiple :auto-upload="false" ref="upload" :data="{'size':'1024'}" :with-credentials="true"
           			accept="jpg"
           			:on-exceed="handleExceed" :on-preview="handlePreview" :before-remove="beforeRemove" :on-remove="handleRemove"
           			>
           			<el-button type="primary" size="small" slot="trigger">选取文件</el-button>
           			<el-button type="success" size="small" @click.native="submitUpload">上传到服务器</el-button>
           			<div slot="tip"><span class="font-warn">* 只能上传jpg/png文件，且不超过500kb</span></div>
				</el-upload>
           	</div>
           	<div class="btn-area">
           		<el-button @click.native="goPrev">返回</el-button>
           		<el-button type="primary" @click.native="goNext">进入图片墙篇</el-button>
           	</div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				fileList:[],
				limit:5
			}
		},
		methods:{
			handleExceed (files, fileList)　{
				this.$message.warning('当前限制选择 '+this.limit+' 个文件，本次选择了 '+files.length+' 个文件，共选择了 '+(files.length + fileList.length)+' 个文件');
			},
			handleBefore (file) {
				return !this.fileList.some(item => {
					return item.name == file.name;
				});
			},
			handlePreview (file) {
				console.log(file);
			},
			beforeRemove (file) {
				return this.$confirm("您确定要移除"+file.name+"吗？");
			},
			handleRemove (file,fileList) {
				console.log(file,fileList);
			},
			handleChange(file, fileList) {
				
		    },
		    handleSuccess (file) {

		    },
		    submitUpload() {
		    	alert(11)
		       this.$refs.upload.submit();
		    },
		    submitUpload () {

		    },
		    goNext () {
		    	this.$router.push('./picwall');
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