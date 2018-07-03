<template>
	<div class="form-area">
		<div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>评价效果展示</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="info-input-area">
            <h2>感觉效果还不错，给个评价吧~~</h2><hr>
            <div>
				<step :steps="steps" :active="active"></step>            		
        	</div>
            <el-form :model="form" :rules="rules" ref="form" label-width="150px">
            	<el-form-item class="item" label="卖家服务态度："props="storeCore">
            		<el-rate v-model="form.storeCore" show-text></el-rate>
        		</el-form-item>
        		<el-form-item class="item" label="物流发货速度："props="deliverCore">
            		<el-rate v-model="form.deliverCore" show-text :low-threshold="2" :high-threshold="4" :texts="['很慢','慢','正常','快','很快']" :colors="['#99A9BF', '#8dbb05', '#FF9900']"></el-rate>
        		</el-form-item>
        		<el-form-item class="item" label="物流送货速度：" props="deliveryCore">
            		<el-rate v-model="form.deliveryCore" show-text></el-rate>
        		</el-form-item>
        		<el-form-item class="item" label="店铺综合得分：">
            		<el-rate v-model.number="finalCore" disabled show-score score-template="{value}"></el-rate>
        		</el-form-item>
	        </el-form>
        </div>
	</div>
</template>

<script type="text/javascript">
	import Step from "components/Step";
	export default {
		data () {
			return {
				form:{
					storeCore:0,
					deliverCore:0,
					deliveryCore:0
				},
				rules:{
					storeCore:[],
					deliverCore:[],
					deliveryCore:[]
				},
				active:2,
				steps:[
					{title:"基本表单",desc:"介绍表单的基本控件"},
					{title:"扩展表单",desc:"介绍一些稍微高级的表单运用，如时间，颜色 ……"},
					{title:"评价效果",desc:"如评价效果展示"}
				]
			}
		},
		components:{
			Step
		},
		computed:{
			finalCore:{
				get: function () {
			    	if(this.form.storeCore >0 && this.form.deliveryCore > 0 && this.form.deliverCore > 0){
			    		this.active = 3;
						return ((this.form.storeCore +this.form.deliverCore + this.form.deliveryCore)/3).toFixed(2);
					}
			    },
				set: function () {
    			}
			}
		}
	}
</script>

<style type="text/css" scoped>
	.info-input-area{
		padding:20px;
	}
	h2{
		line-height: 40px;
		color:#333;
		font-size: 16px;
		color:#ff3333;
		font-weight: bolder;
	}
	.item {
		margin-top: 20px;
	}
	.el-rate {
	    padding-top: 8px;
	}
</style>