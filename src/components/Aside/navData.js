export default [
    {   
        id: 1,
        navText:'首页',
        img:'../../../static/img/icon/首页.svg',
        path:'/layout/home',
        isShow: false
    },
    {
        id: 2,
        navText:'订单管理',
        img:'../../../static/img/icon/订单管理.svg',
        path:'/layout/homepage',
        isShow: false,
        subNav:[
            {
              subNavText:'货款订单',
              path:'/layout/homepage/homepage1',
            }, {
              subNavText:'转单订单',
              path:'/layout/homepage/homepage2',
            }, {
              subNavText:'保险订单',
              path:'/layout/homepage/homepage3',
              }
        ]
    }, {
        id: 3,
        navText:'财务管理',
        img:'../../../static/img/icon/财务管理.svg',
        path:'/layout/home',
        isShow: false
    }, {
        id: 4,
        navText:'组织架构',
        img:'../../../static/img/icon/组织架构.svg',
        path:'/layout/home',
        isShow: false
    }, {
        id: 5,
        navText:'数据统计',
        img:'../../../static/img/icon/统计分析.svg',
        path:'/layout/home',
        isShow: false
    }, {
        id: 6,
        navText:'商务管理',
        img:'../../../static/img/icon/商务管理.svg',
        path:'/layout/home',
        isShow: false
    },
]