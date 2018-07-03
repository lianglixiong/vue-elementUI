<template>
	<div class="wrap">
		<div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>上传组件-图片墙</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="info-input-area">
           	<h2>接下来，很高兴与你一起分享elementUI的上传组件功能~~</h2><hr>
           	<h3 class="content-title">用户头像上传</h3>
           	<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-success="handleAvatarSuccess"
			  :before-upload="beforeAvatarUpload">
			  <img v-if="imageUrl" :src="imageUrl" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<hr>
			<h3 class="content-title">图片墙</h3>
           	<el-upload
			   action="https://jsonplaceholder.typicode.com/posts/"
			   list-type="picture-card"
			   :on-preview="handlePictureCardPreview" :before-remove="beforeRemove" :before-upload="beforeAvatarUpload">
			   <i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog :visible="visible">
				<img :src="imgUrl" alt="" width="100%">
			</el-dialog>
           	<div class="btn-area">
           		<el-button @click.native="goPrev">返回</el-button>
           		<el-button type="primary" @click.native="goNext">进入图片列表篇</el-button>
           	</div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				imageUrl:"",
				accept:"jpg,jpeg,png",
				limit:2*1024*1024,
				max:5,
				num:0,
				visible:false,
				imgUrl:""
			}
		},
		methods:{
			handleAvatarSuccess (res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload (file) {
				let self = this,
					type = file.type.split("/")[1],
					size = file.size;
				if(self.accept.indexOf(type) == -1){
					self.$message.error("图片格式限制为："+self.accept);
				}
				if(self.limit < size){
					self.$message.error("文件大小不能超过:"+self.limit/1024 +"kb");
				}
				return self.accept.indexOf(type) > -1 && self.limit >= size;
			},
			handlePictureCardPreview (file) {
				this.imageUrl =file.url;
				this.visible = true;
			},
			beforeRemove (file) {
				return this.$confirm("你确定要删除吗？");
			},
		    goNext () {
		    	this.$router.push('./piclist');
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
	.avatar-uploader{
		padding-bottom: 20px;
	}
	.avatar-uploader-icon {
	  font-size: 28px;
	  color: #8c939d;
	  width: 178px;
	  height: 178px;
	  line-height: 178px;
	  text-align: center;
	   border:1px dashed #ddd;
	}
	.avatar-uploader-icon:hover{
		border-color: #7f5394;
	}
	.avatar {
	  width: 178px;
	  height: 178px;
	  display: block;
	}
	
</style>