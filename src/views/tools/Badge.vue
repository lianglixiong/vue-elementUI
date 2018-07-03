<template>
	<div class="page-area">
		<div class="bread-crumb">
			<el-breadcrumb separator=">>">
				<el-breadcrumb-item><span class="el-icon-menu"></span> 工具类</el-breadcrumb-item>
				<el-breadcrumb-item>tag标签</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="page-body">
            <h2>在前端开发中会遇到各种各样的提示，用于标识某类或者某几类的业务功能~~</h2><hr>
            <div class="data-show">
            	<h3>基础用法</h3>
            	<div class="badge-show">
            		<el-badge class="item" v-for="item in base" :value="item.value">
            			<el-button size="small">{{item.text}}</el-button>
            		</el-badge>
            	</div>
            	<h3>最大值</h3>
            	<div class="badge-show">
            		<el-badge class="item" v-for="item in base" :value="item.value" :max="10">
            			<el-button size="small">{{item.text}}</el-button>
            		</el-badge>
            	</div>
            	<h3>自定义角标</h3>
            	<div class="badge-show">
            		<el-badge class="item" v-for="item in myData" :value="item.value">
            			<el-button size="small">{{item.text}}</el-button>
            		</el-badge>
            	</div>
            	<h3>小红点</h3>
            	<div class="badge-show">
            		<el-badge class="item" v-for="item in myData" :value="item.value" is-dot>
            			<el-button size="small">{{item.text}}</el-button>
            		</el-badge>
            	</div>
            	<h3>综合使用demo</h3>
            	<div class="badge-show">
            		<el-dropdown>
	            		<el-badge is-dot>
	            			<span class="el-dropdown-link">
	            				新消息<i class="el-icon-caret-bottom el-icon--right"></i>
	            			</span>
	            		</el-badge>
	            		<el-dropdown-menu slot="dropdown">
	            			 <el-dropdown-item class="clearfix" v-for="item in base">
						      {{item.text}}<el-badge class="mark" :value="item.value" />
						    </el-dropdown-item>
	            		</el-dropdown-menu>
	            	</el-dropdown>
            	</div>
            </div>
        </div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				base:[
					{text:"评论",value:21},
					{text:"物流",value:24}
				],
				myData:[
					{text:"评论",value:"new"},
					{text:"物流",value:"hot"}
				]
			}
		}
	}
</script>
<style scoped>
	h3{
		color:#ff3333;
		line-height: 40px;
		font-size: 16px;
	}
	.badge-show {
		padding-left: 30px;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.item{
		margin-right: 40px;
	}
</style>