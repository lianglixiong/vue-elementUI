<template>
	<div class="chart-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-star-on"></i> 图表</el-breadcrumb-item>
                <el-breadcrumb-item>vue-schart</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            vue-schart：vue.js封装sChart.js的图表组件。<br>
            访问：<a href="https://github.com/lin-xin/vue-schart/blob/master/src/vue-schart.vue" target="_blank">vue-schart</a><br>
            访问：<a href="http://blog.gdfengshuo.com/example/sChart/" target="_blank">sChart.js</a>
        </div>
        <div class="chart-show">
        	<div class="chart-item" v-for="item in source">
        		<div class="chart-item-title" v-cloak>{{ item.name }}</div>
        		<schart :canvasId="item.canvasId" :type="item.canvasId" :data="item.data" width="600" height="600" :options="item.options"></schart>
        	</div>
        </div>
	</div>
</template>

<script type="text/javascript">
	import Schart from "vue-schart";
	export default {
		data () {
			return {
				source:{}
			}
		},
		components:{
			Schart
		},
		beforeMount () {
			const self = this;
            if(process.env.NODE_ENV === 'development'){
                self.url = 'static/data/chart.json';
            };
            self.$axios.get(self.url).then( (res) => {
               	self.source =res.data.slice(0)
            });
		}
	}
</script>

<style type="text/css" scoped>
	.chart-show{
		margin-top: 20px;
		border:2px solid #324157;
		border-radius: 5px;
	}
	.chart-item{
        width: 600px;
        display: inline-block;
        margin-left: 50px;
    }
    .chart-item-title{
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
        text-align: center;
    }
</style>