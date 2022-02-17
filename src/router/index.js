import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/components/index')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/components/about')
        },
        {
            path: '/services',
            name: 'services',
            component: () => import('@/components/services')
        },
        {
            path: '/news',
            name: 'news',
            component: () => import('@/components/news')
        },
        {
            path: '/csi',
            name: 'csi',
            component: () => import('@/components/csi')
        },
        {
            path: '/news/:categoryId/:categoryName',
            name: 'newscategory',
            component: () => import('@/components/newscategory')
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: () => import('@/components/gallery')
        },
        {
            path: '/faq',
            name: 'faq',
            component: () => import('@/components/faq')
        },
        {
            path: '/events',
            name: 'events',
            component: () => import('@/components/events')
        },
        {
            path: '/portfolio2',
            name: 'portfolio2',
           component: () => import('@/components/portfolio2')
        },
        {
            path: '/portfolio3',
            name: 'portfolio3',
            component: () => import('@/components/portfolio3')
        },
        {
            path: '/portfolio4',
            name: 'portfolio4',
            component: () => import('@/components/portfolio4')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('@/components/blog')
        },
        {
            path: '/blogdetail/:id/:slug',
            name: 'blogdetail',
            component: () => import('@/components/blogdetail')
        },
        {
            path: '/csidetail/:id/:slug',
            name: 'csidetail',
            component: () => import('@/components/csidetail')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/components/login')
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('@/components/signup')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('@/components/contact')
        },
        {
            path: '/loan',
            name: 'loan',
            component: () => import('@/components/loan')
        },
        {
            path: '/portal',
            beforeEnter(to, from, next) {
                // Put the full page URL including the protocol http(s) below
                window.location.replace("https://portal.staugustineshg.org/")
            }
        },
        {
            path: '/register',
            beforeEnter(to, from, next) {
                window.location.replace("https://portal.staugustineshg.org/register")
            }
        },
        {
            path: '*',
            component: () => import('@/components/error')
        },
        
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
