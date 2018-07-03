<template>
	<div class="page-area">
		<div class="bread-crumb">
			<el-breadcrumb separator=">>">
				<el-breadcrumb-item><span class="el-icon-menu"></span> 工具类</el-breadcrumb-item>
				<el-breadcrumb-item>分页组件</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="page-body">
            <h2>当数据量过多时，使用分页分解数据，通常结合表格组件来使用~~</h2><hr>
            <div class="data-show">
            	<el-table :data="source" border stripe style="width:100%;">
            		<el-table-column type="index" label="id" width="100"></el-table-column>
            		<el-table-column label="姓名" prop="name" width="200"></el-table-column>
            		<el-table-column label="邮箱" prop="email"></el-table-column>
            		<el-table-column label="登录IP" prop="ip" width="150"></el-table-column>
            	</el-table>
            </div>
            <div class="page-box">
            	<!-- sync是实现父子组件的数据双向绑定 -->
            	<el-pagination :current-page.sync="page.current_page" :page-sizes="[10,20,50,100]" :page-size="page.per_page" :total="page.total"
            		:small="config.small" :background="config.bgColor" :prev-text="config.prevText" :next-text="config.nextText"
            		@size-change="handleSizeChange" @current-change="handleCurrentChange" layout="total,prev,pager,next,jumper,sizes">
            	</el-pagination>
            </div>
        </div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				source:[],
				page:{
					current_page:1,
					per_page:10
				},
				config:{
					small:false,
					bgColor:true,
					prevText:"上一页",
					nextText:"下一页"
				}
			}
		},
		created () {
			let self = this;
			if(process.env.NODE_ENV === 'development'){
                self.url = 'static/data/dataSource.json';
            };
            self.$axios.get(self.url).then( (res) => {
               	self.source = res.data.data.slice(0);
               	self.page = Object.assign({},res.data.page);
            });
		},
		methods:{
			handleSizeChange (val) {
				this.page.per_page = val;
			},
			handleCurrentChange (val) {
				this.page.current_page = val;
			}
		}
	}
</script>
<style>
	.page-box{
		padding-top: 20px;
		text-align: center;
	}
	.el-pagination__total{
		float:left;
		color:#ff3333;
	}
	.el-pagination__sizes{
		float:right;
	}
</style>