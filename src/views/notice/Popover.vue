<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 通知</el-breadcrumb-item>
                <el-breadcrumb-item>弹出框</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>加载数据时显示动效~~</h2><hr>
            	<div class="item">
            		<el-popover ref="popoverOne" :placement="placement" :title="title" :width="width" :trigger="eType" :offset="offset"
  						:content="content">
					</el-popover>
					<el-button v-popover:popoverOne>hover 激活</el-button><br>

					<el-popover :placement="placement" :title="title" :width="width" trigger="click" :offset="offset"
  						:content="content">
  						<el-button slot="reference" class="item" v-if="slot">通过分发触发组件</el-button>
					</el-popover>

					<el-popover ref="popoverThree" :placement="placement" width="300" :trigger="eType">
						<el-table :data="gridData">
						    <el-table-column width="150" prop="date" label="日期"></el-table-column>
						    <el-table-column width="100" prop="name" label="姓名"></el-table-column>
						    <el-table-column width="300" prop="address" label="地址"></el-table-column>
						</el-table>
					</el-popover>
					<br><el-button class="item" v-popover:popoverThree>嵌套表格</el-button><br>

					<el-popover :placement="placement" width="200" :trigger="eType" v-model="visible" :open-delay="2000">
						<p>这是一段内容这是一段内容确定删除吗？</p>
						<div style="text-align: right; margin: 0">
						    <el-button size="mini" type="text" @click="visible = false">取消</el-button>
						    <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
						</div>
  						<el-button slot="reference" class="item" v-if="slot">通过分发触发组件</el-button>
					</el-popover>
            	</div>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				placement:"top-start",
				title:"",
				width:200,
				eType:"hover",//click，hover，focus
				offset:0,
				slot:true,
				content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。",
				gridData: [{
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }],
		        visible:false
			}
		},
		methods:{
			
		}
	}
</script>

<style type="text/css" scoped>
	.item{
		margin-top: 20px;
	}
</style>