<template>
	<div class="step-area">
		<el-steps :active="active" :finish-status="finishStatus" v-if="space>0" :space="space" :align-center="center" :direction="direction" :simple="simple">
		  <el-step v-for="step in steps" :title="step.title" :description="step.desc" :icon="step.icon"></el-step>
		</el-steps>	
		<el-steps :active="active" :finish-status="finishStatus" v-else :align-center="center" :direction="direction" :simple="simple">
		  <el-step v-for="step in steps" :title="step.title" :description="step.desc" :icon="step.icon"></el-step>
		</el-steps>
	</div>
</template>
<script>
	export default {
		props:{
			steps:{
				type:Array,
				default () {
					return [];
				}
			},
			active:{
				type:Number,
				default:0
			},
			finishStatus:{
				type:String,
				default:"success"
			},
			space:{
				type:Number,
				default:0
			},
			center:{
				type:Boolean,
				default:false
			},
			direction:{
				type:String,
				default:"horizontal"
			},
			simple:{
				type:Boolean,
				default:false
			}
		}
	}
</script>
<style>
	.step-area{
		padding:20px 0;
	}

</style>