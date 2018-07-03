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
            	<step :steps="steps" :active="8" :simple="true"></step>
            </div>
            <div class="data-show">
            	<div class="title">合并列</div>
            	<div>通过给table传入span-method方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行row、当前列column、当前行号rowIndex、当前列号columnIndex四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表rowspan，第二个元素代表colspan。 也可以返回一个键名为rowspan和colspan的对象。</div>
            	<div class="data-box">
            		<el-table :data="list" border  :span-method="arraySpanMethod"
    					style="width: 100%; margin-top: 20px">
    					<el-table-column prop="id"  label="ID"  width="180"> </el-table-column>
    					<el-table-column prop="name" label="姓名">  </el-table-column>
					    <el-table-column prop="amount1" label="数值 1（元）"></el-table-column>
					    <el-table-column  prop="amount2" label="数值 2（元）"></el-table-column>
					    <el-table-column  prop="amount3" label="数值 3（元）"></el-table-column>
					  </el-table>
            	</div>
            	<div class="title">合并行</div>
            	<div class="data-box">
            		<el-table :data="list" border  style="width: 100%; margin-top: 20px"  :span-method="objectSpanMethod">
    					<el-table-column prop="id"  label="ID"  width="180"> </el-table-column>
    					<el-table-column prop="name" label="姓名">  </el-table-column>
					    <el-table-column prop="amount1" label="数值 1（元）"></el-table-column>
					    <el-table-column  prop="amount2" label="数值 2（元）"></el-table-column>
					    <el-table-column  prop="amount3" label="数值 3（元）"></el-table-column>
					    <span slot="empty">没有更多数据啦~</span>
					  </el-table>
            	</div>
            	<div class="btn-box">
            		<el-button type="text" icon="el-icon-arrow-left" @click="prev">上一页</el-button>
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
			arraySpanMethod({ row, column, rowIndex, columnIndex }) {
		        if (rowIndex % 2 == 0) {
		          if (columnIndex == 0) {
		            return [1, 2];
		          } else if (columnIndex == 1) {
		            return [0, 0];
		          }
		        }
		    },
		    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
		        if (columnIndex === 0) {
		          if (rowIndex % 2 === 0) {
		            return {
		              rowspan: 2,
		              colspan: 1
		            };
		          } else {
		            return {
		              rowspan: 0,
		              colspan: 0
		            };
		          }
		        }
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
