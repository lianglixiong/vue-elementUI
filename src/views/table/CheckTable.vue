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
            	<step :steps="steps" :active="4" :simple="true"></step>
            </div>
            <div class="data-show">
            	<div class="data-box">
            		<div class="title">单选表格</div>
            		<div>
            			<el-button type="primary" @click="cancel" size="small">取消选中</el-button>
	            	</div>
            		</div>
            		<el-table style="width:100%;" :data="list"  :stripe="config.stripe" :border="config.border"
            			highlight-current-row  @current-change="handleCurrentChange" ref="radio">
            			<el-table-column type="index" width="100" label="序号"></el-table-column>
            			<el-table-column label="日期" prop="date" width="200"></el-table-column>
            			<el-table-column label="姓名" prop="name" width="150"></el-table-column>
            			<el-table-column label="省份" prop="province" width="250"></el-table-column>	
    					<el-table-column label="市/区" prop="city" width="250"></el-table-column>	
        				<el-table-column label="详细信息" prop="address"></el-table-column>
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
            		<div>
            			<el-button type="primary" @click="checkAll" size="small">{{multipleSelection.length == list.length ?"取消":"全选"}}</el-button>
	            	</div>
            		</div>
            		<el-table style="width:100%;" :data="list"  :stripe="config.stripe" :border="config.border"
            			@selection-change="handleSelectionChange" ref="checkbox">
            			<el-table-column type="selection" width="100" label="选择"></el-table-column>
            			<el-table-column label="日期" prop="date" width="200"></el-table-column>
            			<el-table-column label="姓名" prop="name" width="150"></el-table-column>
            			<el-table-column label="省份" prop="province" width="250"></el-table-column>	
    					<el-table-column label="市/区" prop="city" width="250"></el-table-column>	
        				<el-table-column label="详细信息" prop="address"></el-table-column>
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
				currentRow:null,//单选
				multipleSelection:[],//复选
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
		    cancel () {
		    	this.$refs.radio.setCurrentRow();
		    },
		    handleCurrentChange (newVal,oldVal) {
		    	this.currentRow = newVal;
		    },
		    checkAll () {
		    	let self = this;
		    	if(self.list.length == self.multipleSelection.length){
		    		self.$refs.checkbox.clearSelection();
		    	}else{
		    		self.list.forEach( row => {
		    			self.$refs.checkbox.toggleRowSelection(row);
		    		})
		    	}
		    },
		    handleSelectionChange (newVal,oldVal) {
		    	this.multipleSelection = newVal;
		    },
			prev () {
				this.$router.back();
			},
			next () {
				this.$router.push('./SortTable');
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
