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
            	<step :steps="steps" :active="2" :simple="true"></step>
            </div>
            <div class="data-show">
            	<div class="title">固定表头或者列的表格</div>
            	<div class="tils">
            		<h3>使用固定类表格，下边配置你要知道：</h3>
            		<p>1、只想表头固定，则只需给表格配置height属性即可</p>
            		<p>2、如果想让某列或者某几列固定，则需要在都应列上加上fixed属性，并配置是left还是right</p>
            		<p>3、混合配置：加上1、2两项即可</p>
            		<p>4、流式布局的话，只需要把height用max-height代替即可</p>
            	</div>
            	<div class="data-box">
            		<el-table style="width:100%;" :data="list" :stripe="config.stripe" :border="config.border" :max-height="config.height">
            			<el-table-column label="用户id" prop="id" width="100" fixed></el-table-column>	
            			<el-table-column label="用户姓名" prop="name" width="150"></el-table-column>	
            			<el-table-column label="用户邮箱" prop="email"></el-table-column>	
            			<el-table-column label="登录ip" prop="ip" width="200"></el-table-column>
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
					border:true,
					height:400
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
			handleClick(row) {
		       console.log(row);
		    },
			prev () {
				this.$router.back();
			},
			next () {
				this.$router.push('./multistage');
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
	.tils{
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.tils p{
		color:#ff3333;
		line-height: 30px;
		padding-left: 30px;
	}
</style>
