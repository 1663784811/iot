import {createRouter, createWebHashHistory} from 'vue-router'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            component: () => import('@/views/AppMain.vue'),
        }
    ]
})


router.beforeEach(({meta = {}, name, params}, from, next) => {
    // const {title, notLogin} = meta;
    // if (title) document.title = title;
    // const useUser = loginInfo();
    // useUser.variable.eCode = params.code;
    // let token = useUser.token;
    // if (!token && !notLogin) {
    //     // 未登录
    //     if (params.code) {
    //         next({
    //             name: 'login',
    //             params: {
    //                 code: params.code
    //             }
    //         })
    //     } else {
    //         next({
    //             name: 'welcomePage'
    //         })
    //     }
    // } else {
    //     next()
    // }
    next();
});


export default router
