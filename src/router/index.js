import Vue from 'vue'
import VueRouter from 'vue-router'
import WorkSpace from '@/views/WorkSpace.vue'
import Board from '@/views/board'
import Header from '@/components/Header'
import imageTest from '@/components/imageTest'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'WorkSpace',
		component: WorkSpace,
	},
	{
		path:'/board',
		name: 'Board',
		component: Board

	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
