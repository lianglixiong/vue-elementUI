<template>
	<div class="wrap">
		<v-head>
			<span slot="username">{{ nickname }}</span>
			<span slot="_username">{{ nickname }}</span>
		</v-head>
		<side-bar></side-bar>
		<div class="page">
			<transition name="fade" mode="out-in"><router-view></router-view></transition>
		</div>
	</div>
</template>

<script type="text/javascript">
	import vHead from './Head';
	import SideBar from './SideBar';

	export default {
		data () {
			return {
				name:"未登录"
			}
		},
		computed:{
			nickname (){
				const _username = localStorage.getItem("user-name");
				return _username || this.name;
			}
		},
		components:{
			vHead,SideBar
		}
	}
</script>

