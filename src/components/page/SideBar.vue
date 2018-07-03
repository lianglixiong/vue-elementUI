<template>
	<div class="side-bar">
		<el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
			<div v-for="(item,key) in items" :key="key">
				<div v-if="item.children">
					<el-submenu :index="item.index">
                        <div slot="title"><span :class="item.icon"></span>{{ item.title }}</div>
                        <el-menu-item v-for="(subItem,i) in item.children" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
				</div>
				<div v-else>
					<el-menu-item :index="item.index">
						<span :class="item.icon"></span>{{ item.title }}
					</el-menu-item>
				</div>
			</div>
		</el-menu>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				url:'./static/data/sideBar.json', //生产模式的请求地址
				items:[]
			}
		},
		created () {
			this.getData();
		},
		computed:{
			onRoutes () {
				return this.$route.path;
			}
		},
		methods:{
			getData () {
				let self = this;
				if(process.env.NODE_ENV === "development"){
					self.url="/static/data/sideBar.json";
				}
				self.$axios.get(self.url).then((res) => {
					self.items = res.data.slice(0)
				})
			},
		}
	}
</script>

<style scoped>
	.side-bar {
		position:absolute;
		left:0;
		top:70px;
		bottom:0;
		width:250px;
	}
	.side-bar ul{
		height:100%;
	}
</style>