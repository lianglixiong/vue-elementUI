<template>
	<div class="wrap">
		<div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 上传</el-breadcrumb-item>
                <el-breadcrumb-item>裁剪上传</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="show-area">
        	<h2>裁剪上传</h2><hr>
        	<div>
        		本文借助vue的插件来完成上述裁剪功能：<a target="blank" href="http://vanthink-ued.github.io/vue-core-image-upload/index.html#/cn/home">vue-core-image-upload</a>
        	</div>
        	<div class="box">
        		<h3>裁剪图片</h3>
        		<vue-core-image-upload :class="['btn-primary']" text="上传文件" :extensions="accept" multiple :multiple-size="4" 
			    :crop="true" cropRatio="1:1" :cropBtn="cropBtn" :data="data" :max-file-size="size.maxSize"
			    :inputAccept="inputAccept" :credentials="credentials" url="http://101.198.151.190/api/upload.php" 
			    @imageuploaded="imageuploaded" @imagechanged="imagechanged" @imageuploading="imageuploading"
			    >
			  </vue-core-image-upload>
			  <h3>缩放图片</h3>
        		<vue-core-image-upload :class="['btn-primary']" text="上传文件" :extensions="accept" multiple :multiple-size="4"  :data="data"
        		:max-file-size="size.maxSize" :inputAccept="inputAccept" :credentials="credentials" url="http://101.198.151.190/api/upload.php" 
			    @imageuploaded="imageuploaded" @imagechanged="imagechanged" @imageuploading="imageuploading" resize="local"
			    >
			  </vue-core-image-upload>
			  <h3>压缩图片</h3>
        		<vue-core-image-upload :class="['btn-primary']" text="上传文件" :extensions="accept" multiple :multiple-size="4" compress="50" :data="data" 
        		:max-file-size="size.maxSize" :inputAccept="inputAccept" :credentials="credentials" url="http://101.198.151.190/api/upload.php" 
			    @imageuploaded="imageuploaded" @imagechanged="imagechanged" @imageuploading="imageuploading"
			    >
			  </vue-core-image-upload>
        	</div>
        </div>
    </div>

</template>

<script>
	import VueCoreImageUpload  from "vue-core-image-upload";
	export default {
		data (){
			return {
				accept:"jpg,png,jpeg",//文件格式
				inputAccept:"image/jpg,image/jpeg,image/png",//接受类型，禁用掉不需要的文件
				cropBtn:{//裁剪时按钮
					'ok':"感觉可以了",
					'cancel':"还是算了吧"
				},
				data:{
					src:""
				},//上传附带参数
				credentials:false,//是否带cookie
				size:{
					maxSize:2*1024*1024,
					maxWidth:200,
					maxHeight:200
				}
			}
		},
		components:{
			 'vue-core-image-upload': VueCoreImageUpload
		},
		methods:{
			imageuploaded (res) {
				//上传成功时对图片路径进行处理
			},
			imagechanged (file) {//当input框改变选择图片时候触发，会返回input的获取的图片数据
			},
			imageuploading (file) {
			}
		}
	}

</script>

<style scoped>
	h2{
		color:#ff3333;
		line-height: 100px;
	}
	a{
		text-decoration: none;
		color:#33a9ff;
		font-size: 16px;
		line-height: 50px;
	}
	h3{
		line-height: 100px;
	}
	.btn-primary{
		padding:10px 20px;
		background-color: #33a9ff;
		color:#fff;
		border-radius: 5px;
		display: inline-block;
	}
</style>