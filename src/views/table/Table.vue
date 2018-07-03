<template>
	<div class="page-area">
		<div class="bread-crumb">
			<el-breadcrumb separator=">>">
				<el-breadcrumb-item><span class="el-icon-menu"></span> 表格</el-breadcrumb-item>
				<el-breadcrumb-item>ElementUI表格组件综合</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="page-body">
            <h2>本节将要强势介绍elementUI的强大表格组件，具体有多强大，不妨往下看~~</h2><hr>
            <div>
            	<step :steps="steps" :active="1" :simple="true"></step>
            </div>
            <div class="data-show">
            	<div class="title">带边框，斑马线(含自定义颜色)的表格</div>
            	<div class="data-box">
            		<el-table style="width:100%;" :data="list" :stripe="config.stripe" :border="config.border" :row-class-name="tableRowClassName">
            			<el-table-column label="用户id" prop="id" width="100"></el-table-column>	
            			<el-table-column label="用户姓名" prop="name" width="150"></el-table-column>	
            			<el-table-column label="用户邮箱" prop="email"></el-table-column>	
            			<el-table-column label="登录ip" prop="ip" width="200"></el-table-column>	
            		</el-table>
            	</div>
            	<div class="btn-box">
            		<el-button type="text" icon="el-icon-arrow-left" @click="prev">上一页</el-button>
  					<el-button type="text" @click="next">下一页</el-button>
            	</div>
            </div>
        </div>
	</div>
</template>
	
<script>
	import Step from "components/Step";
	export default {
		data () {
			return {
				list:[],
				config:{
					stripe:true,//带斑马线
					border:true
				},
				steps:[
					{title:"带边框斑马线表格"},
					{title:"固定头和列"},
					{title:"多级表头"},
					{title:"单选复选表格"},
					{title:"排序筛选表格"},
					{title:"可展开表格"},
					{title:"表尾合计"},
					{title:"合并行或列"}
				]
			}
		},
		created () {
			this.getData();
		},
		components:{
			Step
		},
		methods:{
			getData () {
				let self = this;
				if(process.env.NODE_ENV === 'development'){
	                self.url = 'static/data/dataSource.json';
	            };
	            self.$axios.get(self.url).then( (res) => {
	               	self.list = res.data.data.slice(0);
	            });
			},
			tableRowClassName (row,idx) {
				let ide = idx%3;
				if(ide == 0){
					return 'warning-row';
				}else if(ide == 1){
					return 'success-row';
				}else {
					return 'info-row';
				}
			},
			prev () {
				this.$router.back();
			},
			next () {
				this.$router.push('./fixedTable');
			}
		}
	}
</script>

<style>
	.page-body{
		padding:20px;
	}
	h2{
		line-height: 40px;
		color:#333;
		font-size: 16px;
		color:#ff3333;
		font-weight: bolder;
	}
	.data-show {
		padding:20px;
	}
	.title {
		line-height: 50px;
		font-size: 16px;
		color:#333;
		font-weight: bold;
		text-align: center;
	}
	.btn-box {
		padding:20px 0;
		text-align: center;
	}

	/* 自定义斑马线 */
	.el-table .warning-row {
	    background-color: oldlace;
	}
  	.el-table .success-row {
    	 background-color: #f0f9eb;
  	}
  	.el-table .info-row {
    	 background-color: #2593f5;
  	}
</style>
