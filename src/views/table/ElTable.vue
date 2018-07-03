<template>
	<div class="table">
		<div class="bread-crumb">
			<el-breadcrumb separator=">>">
				<el-breadcrumb-item><span class="el-icon-menu"></span> 表格</el-breadcrumb-item>
				<el-breadcrumb-item>ElementUI风格表格组件</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="handle-area">
			<el-button type="primary" icon="delete" class="ma-r-10" @click="delAll">批量删除</el-button>
			<el-select v-model="proData" placeholder="请选择省份" class="handle-select ma-r-10">
				<el-option key="" value="全部"></el-option>
				<el-option key="1" value="广东省"></el-option>
				<el-option key="2" value="河北省"></el-option>
			</el-select>
			<el-input v-model="keyword" placeholder="请输入关键字" class="handle-input ma-r-10"></el-input>
			<el-button type="primary" icon="search" @click="search">查询</el-button>
		</div>
		<el-table style="width:100%" border :data="_table" ref="multipleTable" @selection-change="handleSelectionChange">
			<el-table-column width="50" type="selection"></el-table-column>
			<el-table-column width="150" prop="date" sortable label="日期"></el-table-column>
			<el-table-column width="100" prop="name" label="姓名"></el-table-column>
			<el-table-column label="地址" prop="address" :formatter="formatter"></el-table-column>
			<el-table-column width="200" label="操作">
				<template scope="scope">
					<el-button size="small" type="primary" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
					<el-button size="small" type="danger" @click="handleDel(scope.$index,scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="pagination center">
			<el-pagination
				@current-change="handleCurrentChange"
				@size-change="handleSizeChange"
				:current-page="pageNow"
				:total="totalNum" 
				:page-size="pagesize"
				:page-sizes="[10, 20, 50, 100]"
				layout="total, sizes, prev, pager, next, jumper">
			</el-pagination>
		</div>
	</div>
</template>


<script type="text/javascript">
	export default {
		data () {
			return {
				proData:"",
				keyword:"",
				pageNow:1,
				pagesize:10,
				pageNum:0,
				totalNum:0,
				tableData:[],
				del_item:[],
				table_url:'./static/data/table.json'
			}
		},
		created () {
			this.getData();
		},
		computed:{
			_table () {
				const self = this;
				return self.tableData.filter((item) => {
					return item.address.indexOf(self.proData||"") >-1 && (item.name.indexOf(self.keyword) >-1 || item.address.indexOf(self.keyword) >-1);
				});
			}
		},
		methods:{
			getData () {
				let self = this;
				if(process.env.NODE_ENV === "development"){
					self.table_url = "static/data/table.json"
				}
				self.$axios.get(self.table_url,{
					params:{
						pageIndex:self.pageNow,
						pageSize:self.pagesize,
						proName:self.proData,
						keyword:self.keyword
					}
				}).then((res) => {
					self.tableData = res.data.list.slice(0);
					self.pageNum = res.data.page.pageNum;
					self.pageNow = res.data.page.pageIndex;
					self.totalNum = res.data.page.totalCount;
				});
			},
			handleCurrentChange (val) {
				this.pageNow = val;
				this.getData();
			},
			handleSizeChange (val) {
				this.pagesize = val;
				this.getData();
			},
			formatter (row,col) {
				return row.address.replace(/ /g," >> ")
			},
			handleEdit (index,row) {
				this.$message("编辑"+(index*1+1)+"第行！");
			},
			handleDel (index,row) {
				let self = this;
				if(self.tableData.length == 1){
					self.$message.error("至少保留一条");
					return;
				}
				self.tableData.splice(index,1);
			},
			delAll () {
				let self = this;
				self.tableData.forEach((item,key) => {
					self.del_item.forEach((subItem,subKey) => {
						if(item.name == subItem.name){
							self.tableData.splice(key,1);
						}
					});
				})
			},
			handleSelectionChange (val){
				this.del_item = val.slice(0)
			},
			search () {
				this.getData();
			}
		}
	}
</script>

<style scoped>
	.handle-area{
		margin-bottom:20px;
	}
	.handle-select {
		width:150px;
	}
	.handle-input {
		width:200px;
		display:inline-block;
	}
</style>