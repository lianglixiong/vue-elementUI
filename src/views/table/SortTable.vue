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
            	<step :steps="steps" :active="5" :simple="true"></step>
            </div>
            <div class="data-show">
            	<div class="data-box">
            		<div class="title">表格排序</div>
            		</div>
            		<el-table style="width:100%;" :data="list"  :stripe="config.stripe" :border="config.border"
            			:default-sort="{prop: 'date', order: 'descending'}" @sort-change="handleSort">
            			<el-table-column type="index" :index="indexMethod" width="100" label="序号"></el-table-column>
            			<el-table-column label="日期" prop="date" width="200" sortable></el-table-column>
            			<el-table-column label="姓名" prop="name" width="150" sortable></el-table-column>
            			<el-table-column label="省份" prop="province" width="250"></el-table-column>	
    					<el-table-column label="市/区" prop="city" width="250"></el-table-column>	
        				<el-table-column label="详细信息" prop="address" :formatter="formatter"></el-table-column>
            			<el-table-column
					      fixed="right"
					      label="操作"
					      width="150">
					      <template slot-scope="scope">
					        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					        <el-button type="text" size="small">编辑</el-button>
					      </template>
					    </el-table-column>	
            		</el-table>
            	</div>
            	<div class="data-box">
            		<div class="title">复选表格</div>
            		<el-table style="width:100%;" :data="list"  :stripe="config.stripe" :border="config.border">
            			<el-table-column type="index" :index="indexMethod" width="100" label="序号"></el-table-column>
            			<el-table-column label="日期" prop="date" width="200" sortable></el-table-column>
            			<el-table-column label="姓名" prop="name" width="150"></el-table-column>
            			<el-table-column label="省份" prop="province" width="250" 
            			:filters="filter" :filter-method="filterTag">
            				<template slot-scope="scope">
						        <el-tag
						          :type="scope.row.province === '河南' ? 'primary' : 'text'"
						          close-transition>{{scope.row.province}}</el-tag>
						    </template>
            			</el-table-column>	
    					<el-table-column label="市/区" prop="city" width="250"></el-table-column>	
        				<el-table-column label="详细信息" prop="address" :formatter="formatter"></el-table-column>
            			<el-table-column
					      fixed="right"
					      label="操作"
					      width="150">
					      <template slot-scope="scope">
					        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					        <el-button type="text" size="small">编辑</el-button>
					      </template>
					    </el-table-column>	
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
				filter:[
					{text:"北京",value:"北京"},
					{text:"广东",value:"广东"}
				],
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
	                self.url = 'static/data/address.json';
	            };
	            self.$axios.get(self.url).then( (res) => {
	               	self.list = res.data.slice(0);
	            });
			},
			handleClick(row) {
		       console.log(row);
		    },
		    formatter (row,col){
		    	return row.province + ">" +row.city+">" +row.address;
		    },
		    handleSort (param){
		    	this.$message("排序字段:"+param.prop+";排序:"+param.order);
		    },
		    filterTag (val,row){
		    	return row.province == val;
		    },
		    indexMethod (index) {
		    	return index<10 ? "0"+index:index;
		    },
			prev () {
				this.$router.back();
			},
			next () {
				this.$router.push('./expandTable');
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
	
</style>
