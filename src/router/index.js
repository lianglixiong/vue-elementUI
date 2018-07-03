import Vue from 'vue';
import Router from 'vue-router';

/* 以下为页面组件 */
import Login from '../views/page/Login';	//登录页
import Page from '../components/page/Page';	//主页面模板
import Readme from '../views/page/Readme';	//了解系统
import ResetPwd from '../views/page/ResetPwd';//重置密码
import PersonalCenter from '../views/page/PersonalCenter';	//个人中心

//业务组件
	//表格组件
	import Empty from '../views/page/empty.vue';
	import Table from '../views/table/Table.vue';
	import FixedTable from "../views/table/FixedTable.vue";
	import Multistage from "../views/table/Multistage.vue";
	import CheckTable from "../views/table/CheckTable.vue";
	import SortTable from "../views/table/SortTable.vue";
	import ExpandTable from "../views/table/ExpandTable.vue";
	import AddUpTable from "../views/table/AddUpTable.vue";
	import MergeTable from "../views/table/mergeTable.vue";

	import ElTable from '../views/table/ElTable'; //eleUI表格组件
	import DataSource from "../views/table/DataSource";	//组定义表格组件

	//图表组件
	import Schart from "../views/charts/Schart.vue";

	//表单组件
	import Baseform from "../views/form/baseform.vue";
	import ExtendForm from "../views/form/extendform.vue";
	import RegisterDone from "../views/form/registerDone.vue";
	import FormTest from "../views/form/formTest.vue";

	//上传组件
	import BaseUpload from "../views/upload/BaseUpload.vue";//点击上传
	import Picwall from "../views/upload/picwall.vue";
	import Piclist from "../views/upload/piclist.vue";
	import DragUpload from "../views/upload/dragUpload.vue";
	import ClipUpload from "../views/upload/clipUpload.vue";

	//消息通知组件
	import Alert from "../views/notice/Alert.vue";
	import Message from "../views/notice/Message.vue";
	import Notification from "../views/notice/Notification.vue";
	import Loading from "../views/notice/Loading.vue";
	import Dialog from "../views/notice/Dialog.vue";
	import Tip from "../views/notice/Tip.vue";
	import Popover from "../views/notice/Popover.vue";

	//工具类
	import Tag from "../views/tools/Tag.vue";
	import Badge from "../views/tools/Badge.vue";
	import Pagination from "../views/tools/Pagination.vue";
	import Progress from "../views/tools/Progress.vue";
	import Step from "../views/tools/Step.vue";

	//其它组件
	import Drag from '../views/else/drag.vue';
	import Tree from "../views/else/Tree.vue";


Vue.use(Router);

export default new Router({
	routes:[
		{
			path: '/',
			redirect:'/login' //重定向
		},
		{
			path:'/login',//登陆
			//component: resolve => require(['../components/page/Login.vue'],resolve)
			component: Login
		},
		{
			path:'/page',//页面主体
			component:Page,
			redirect:'/page/readme',
			children:[
				{
					path:'readme',
					component:Readme
				},
				{
					path:'resetPwd',
					component:ResetPwd
				},
				{
					path:'personalCenter',
					component:PersonalCenter
				},
				{
					path:'table',//表格组件
					component:Empty,
					children:[
						{
							path:'ele',
							component:Table
						},
						{
							path:'fixedTable',
							component:FixedTable
						},
						{
							path:'multistage',
							component:Multistage
						},
						{
							path:'checkTable',
							component:CheckTable
						},
						{
							path:'sortTable',
							component:SortTable
						},
						{
							path:'expandTable',
							component:ExpandTable
						},
						{
							path:'addUpTable',
							component:AddUpTable
						},
						{
							path:'mergeTable',
							component:MergeTable
						},
						{
							path:'elTable',
							component:ElTable
						},
						{
							path:'dataSource',
							component:DataSource
						}
					]
				},
				{
					path:'else',//其它组件
					component:Empty,
					children:[
						{
							path:'drag',
							component:Drag
						},
						{
							path:'tree',
							component:Tree
						}
					]
				},
				{
					path:'chart',//图表组件
					component:Empty,
					children:[
						{
							path:'sChart',
							component:Schart
						}
					]
				},
				{
					path:'form',//表单组件
					component:Empty,
					children:[
						{
							path:'baseform',
							component:Baseform
						},
						{
							path:'extendForm',
							component:ExtendForm
						},
						{
							path:'registerDone',
							component:RegisterDone
						},{
							path:'formTest',
							component:FormTest
						}
					]
				},
				{
					path:'upload',//上传组件
					component:Empty,
					children:[
						{
							path:'baseUpload',
							component:BaseUpload
						},
						{
							path:'picwall',
							component:Picwall
						},
						{
							path:'piclist',
							component:Piclist
						},
						{
							path:'dragUpload',
							component:DragUpload
						},
						{
							path:'clipUpload',
							component:ClipUpload
						}
					]
				},
				{
					path:'tools',//工具组件
					component:Empty,
					children:[
						{
							path:'tag',
							component:Tag
						},
						{
							path:'badge',
							component:Badge
						},
						{
							path:'pagination',
							component:Pagination
						},
						{
							path:'progress',
							component:Progress
						},
						{
							path:'step',
							component:Step
						}
					]
				},
				{
					path:'notice',
					component:Empty,
					children:[
						{
							path:'alert',
							component:Alert
						},
						{
							path:'message',
							component:Message
						},{
							path:"notification",
							component:Notification
						},{
							path:"loading",
							component:Loading
						},{
							path:"dialog",
							component:Dialog
						},{
							path:'tip',
							component:Tip
						},{
							path:'popover',
							component:Popover
						}
					]
				}
			]
		}
	]
})