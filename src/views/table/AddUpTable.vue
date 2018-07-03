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
            	<step :steps="steps" :active="7" :simple="true"></step>
            </div>
            <div class="data-show">
            	<div class="title">表尾合计行</div>
            	<div class="data-box">
            		<el-table :data="list" border height="200" :summary-method="getSummaries" show-summary
    					style="width: 100%; margin-top: 20px">
    					<el-table-column prop="id"  label="ID"  width="180"> </el-table-column>
    					<el-table-column prop="name" label="姓名">  </el-table-column>
					    <el-table-column prop="amount1" label="数值 1（元）"></el-table-column>
					    <el-table-column  prop="amount2" label="数值 2（元）"></el-table-column>
					    <el-table-column  prop="amount3" label="数值 3（元）"></el-table-column>
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
				list:[{
		          id: '12987122',
		          name: '王小虎',
		          amount1: '234',
		          amount2: '3.2',
		          amount3: 10
		        }, {
		          id: '12987123',
		          name: '王小虎',
		          amount1: '165',
		          amount2: '4.43',
		          amount3: 12
		        }, {
		          id: '12987124',
		          name: '王小虎',
		          amount1: '324',
		          amount2: '1.9',
		          amount3: 9
		        }, {
		          id: '12987125',
		          name: '王小虎',
		          amount1: '621',
		          amount2: '2.2',
		          amount3: 17
		        }, {
		          id: '12987126',
		          name: '王小虎',
		          amount1: '539',
		          amount2: '4.1',
		          amount3: 15
		        }],
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
		components:{
			Step
		},
		methods:{
			getSummaries(param) {
		        const { columns, data } = param;
		        const sums = [];
		        columns.forEach((column, index) => {
		          if (index === 0) {
		            sums[index] = '总价';
		            return;
		          }
		          const values = data.map(item => Number(item[column.property]));
		          if (!values.every(value => isNaN(value))) {
		            sums[index] = values.reduce((prev, curr) => {
		              const value = Number(curr);
		              if (!isNaN(value)) {
		                return prev + curr;
		              } else {
		                return prev;
		              }
		            }, 0);
		            sums[index] += ' 元';
		          } else {
		            sums[index] = 'N/A';
		          }
		        });
		        return sums;
		    },
			prev () {
				this.$router.back();
			},
			next () {
				this.$router.push('./mergeTable');
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
