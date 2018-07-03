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
            	<step :steps="steps" :active="6" :simple="true"></step>
            </div>
            <div class="data-show">
            	<div class="data-box">
            		<div class="title">可展开表格</div>
            		<el-table style="width:100%;" :data="list">
            			<el-table-column type="expand">
            				<template slot-scope="scope">
            					<el-form label-position="left" inline class="demo-table-expand">
									<el-form-item label="商品名称：" >{{scope.row.name}}</el-form-item>
									<el-form-item label="所属店铺：" >{{scope.row.shop }}</el-form-item>
									<el-form-item label="商品 ID：" >{{scope.row.id}}</el-form-item>
									<el-form-item label="店铺 ID：" >{{scope.row.shopId }}</el-form-item>
									<el-form-item label="商品分类：" >{{scope.row.category }}</el-form-item>
									<el-form-item label="店铺地址：" >{{scope.row.address }}</el-form-item>
									<el-form-item label="商品描述：" >{{scope.row.desc }}</el-form-item>
            					</el-form>
            				</template>
            			</el-table-column>
            			<el-table-column label="商品 ID"  prop="id"></el-table-column>
					    <el-table-column label="商品名称" prop="name"> </el-table-column>
					    <el-table-column label="描述" prop="desc"> </el-table-column>
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
	                self.url = 'static/data/goods.json';
	            };
	            self.$axios.get(self.url).then( (res) => {
	               	self.list = res.data.slice(0);
	            });
			},
			prev () {
				this.$router.back();
			},
			next () {
				this.$router.push('./addUpTable');
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
	.demo-table-expand {
	    font-size: 0;
	}
	.demo-table-expand label {
	    width: 90px;
	    color: #99a9bf;
	}
	.demo-table-expand .el-form-item {
	    margin-right: 0;
	    margin-bottom: 0;
	    width: 50%;
	}
</style>
