<template>
	<div class="table">
        <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>
                <el-breadcrumb-item>Vue表格组件</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            vue-datasource：一个用于动态创建表格的vue.js服务端组件。
            访问地址：<a href="https://github.com/coderdiaz/vue-datasource" target="_blank">vue-datasource</a>
        </div>
        <server-datasource
        	language="en"
        	:table-data="result"
        	:columns="columns"
        	:pagination="pagination"
        	:actions="actions"
        	v-on:change="changePage"
            v-on:searching="onSearch">
        </server-datasource>
    </div>
</template>

<script type="text/javascript">
	import ServerDatasource  from 'vue-datasource';
	export default {
		data () {
			let self = this;
			return {
				url:"./static/data/dataSource.json",
				columns:[
					{
                        name: 'Id',
                        key: 'id',
                    },
                    {
                        name: 'Name',
                        key: 'name',
                    },
                    {
                        name: 'email',
                        key: 'email',
                    },
                    {
                        name: 'ip',
                        key: 'ip',
                    }
				],
				actions:[
					{
                        text: 'Click',
                        class: 'btn-primary',
                        event(e, row) {
                        	self.$message("做点什么呢？？")
                        }
                    }
				],
				source:[],
				pagination:{

				},
				query:""
			}
		},
		components:{
			ServerDatasource
		},
		computed:{
			result () {
				let self = this;
				return self.source.filter((item)=>{
					return item.name.indexOf(self.query) > -1;
				})
			}
		},
		methods:{
			changePage (values) {
				this.pagination.per_page = values.perpage;
                this.source = this.source;
			},
			onSearch (query) {
				this.query = query;
			}
		},
		beforeMount(){
			let self = this;
            if(process.env.NODE_ENV === 'development'){
                self.url = 'static/data/dataSource.json';
            };
            self.$axios.get(self.url).then( (res) => {
               	self.source = res.data.data.slice(0);
               	self.pagination = res.data.page;
            });
        }
	}
</script>

<style scoped>
	@import '~/static/css/dataSource.css';
</style>