<template>
	<div class="page-area">
		<div class="bread-crumb">
			<el-breadcrumb separator=">>">
				<el-breadcrumb-item><span class="el-icon-menu"></span> 工具类</el-breadcrumb-item>
				<el-breadcrumb-item>tag标签</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="page-body">
            <h2>在前端开发中会遇到各种各样的标签，用于标识某类或者某几类的业务功能~~</h2><hr>
            <div class="data-show">
            	<el-tag v-for="item in tagList" :key="item.tag" :closable="item.closable" :type="item.type" :disable-transitions="item.transitions" @close="handleClose(item)">{{ item.tag }}</el-tag>
            	<el-input class="input-new-tag" v-show="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
				  @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
				<el-button v-show="!inputVisible" class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </div>
        </div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				tagList:[],
				inputValue:"",
				type:["","success","info","warning","danger"],
				inputVisible:false
			}
		},
		methods:{
			handleInputConfirm () {
				let self = this,
					idx = Math.floor(Math.random()*5);
				if(self.inputValue){
					self.tagList.push({
						tag:self.inputValue,
						closable:true,
						transitions:false,
						type:self.type[idx]
					});
					self.inputValue = "";
					self.inputVisible = !self.inputVisible;
				}		
			},
			handleClose (item) {
				let idx = this.tagList.indexOf(item.tag);
				this.tagList.splice(idx,1);
			},
			showInput () {
				this.inputVisible = !this.inputVisible;
				this.$nextTick(_ => {
		          this.$refs.saveTagInput.$refs.input.focus();
		        });
			}
		}
	}
</script>
<style scoped>
	.el-tag + .el-tag {
	    margin-left: 10px;
	}
    .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
    }
    .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: bottom;
    }
</style>