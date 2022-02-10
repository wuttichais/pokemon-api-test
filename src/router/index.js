import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pokemon from '../views/Pokemon.vue'
import Function1 from '../views/Function1.vue'
import Function2 from '../views/Function2.vue'
import Function3 from '../views/Function3.vue'


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/pokemon',
		name: 'Pokemon',
		component: Pokemon,
	},
	{
		path: '/function1',
		name: 'Function1',
		component: Function1,
	},
	{
		path: '/function2',
		name: 'Function2',
		component: Function2,
	},
	{
		path: '/function3',
		name: 'Function3',
		component: Function3,
	},
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router
