import router from "../router"

/**
 * 存储是用户身份对应的权限名称
 */
const routeRoot = {
    coustomer: [
        {
            name: 'Product',
        },
        {
            name: 'ProductList',
        },
        {
            name: 'ProductAdd',
        },
        {
            name: 'ProductEdit',
        },
    ],
    admin: [
        {
            name: 'Product',
        },
        {
            name: 'ProductList',
        },
        {
            name: 'ProductAdd',
        },
        {
            name: 'Category',
        },
        {
            name: 'ProductEdit',
        },
    ],
}

export default function getMenuRoute(role, routes) {
    console.log(role, routes)
    // 根据用户身份将有权限的路由名字全部保存
    const userRoutes = routeRoot[role].map(item => item.name);
    // console.log(userRoutes)
    // ["Product", "ProductList", "ProductAdd", "ProductEdit"]
    const resuleRoutes = routes.filter(route => {
        const obj = route;
        //数组的indexOf方法，一级路由匹配然后进去里面判断
        if (userRoutes.indexOf(route.name) !== -1) {
            // 解构出子路由数组
            const {children} = obj;
            obj.children = children.filter(routeChild=>(userRoutes.indexOf(routeChild.name) !== -1));
            return true
        }
        return false
    })
    return resuleRoutes;
}