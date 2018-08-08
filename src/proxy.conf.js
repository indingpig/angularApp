// 多入口代理，可以参考官方文档： https://github.com/angular/angular-cli/wiki/stories-proxy
// const PROXY_CONFIG = [
//     {
//         context: [
//             "/my",
//             "/many",
//             "/endpoints",
//             "/i",
//             "/need",
//             "/to",
//             "/proxy"
//         ],
//         target: "http://localhost:3000",
//         secure: false
//     }
// ]

const PROXY_CONFIG = [
    {
        context: "/api",
        target: "http://localhost:3000",
        secure: false,
        changeOrigin: true
    }
]

module.exports = PROXY_CONFIG;