<template>
	<div class="wrap">
        <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-upload2"></i> 其它</el-breadcrumb-item>
                <el-breadcrumb-item>拖拽组件</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
       	<div class="drag-area">
       		<div class="drag-title">拖动试试看</div>
       		<div class="drag-view">
       			<div class="drag-list" v-for="item in list" draggable="true"
       			@dragstart="dragstart"
       			@dragend="dragend"
       			@dragenter="dragenter"
       			@dragleave="dragleave"
       			@dragover="dragover">{{ item.value }}</div>
       		</div>
       	</div>
    </div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				handleEle:null,
				topStart:0,
				topEnd:0,
				list:[]
			}
		},
		methods:{
			dragstart (e) {
				const self = this;
				self.topStart = e.pageY;
				self.handleEle = e.currentTarget;
				self.handleEle.classList.add('bg-ddd');
			},
			dragend () {
				this.handleEle.classList.remove('bg-ddd');
			},
			dragenter (e) {
				const self = this;
				self.topEnd = e.pageY;
				if(self.topStart < self.topEnd){
					self.handleEle.parentNode.insertBefore(e.currentTarget,self.handleEle);
				}else if(self.topStart > self.topEnd){
					self.handleEle.parentNode.insertBefore(self.handleEle,e.currentTarget);
				}else{
					e.preventDefault();
				}
			},
			dragleave () {
				const self = this;
				self.topEnd = 0;
			},
			dragover (e) {
				e.preventDefault();
			}
		},
		beforeMount(){
			const self = this;
            if(process.env.NODE_ENV === 'development'){
                self.url = 'static/data/drag.json';
            };
            self.$axios.get(self.url).then( (res) => {
               	self.list = res.data.slice(0);
            });
        }
	}
</script>

<style scoped>
	.drag-area{
		padding:20px;
	}
	.drag-title{
        font-weight: 400;
        line-height: 35px;
        font-size: 22px;
        font-weight: bolder;
        color: #1f2f3d;
    }
	.drag-list{
        border: 2px solid #ddd;
        padding:10px;
        margin-bottom: 20px;
        -webkit-transition: border .3s;
        transition: border .3s;
        -webkit-box-shadow: 5px 5px 20px rgba(0,0,0,.7);
    	box-shadow: 5px 5px 20px rgba(0,0,0,.7);
    }
    .bg-ddd {
    	background-color: #ddd;
    }
    .drag-list:hover{
        border: 2px solid #20a0ff;
    }
    
</style>