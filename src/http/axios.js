import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

axios.defaults.baseURL = 'http://localhost:8040/'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json'

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 600, showSpinner: false })

axios.interceptors.request.use(function (config) {
    // 启动进度条
    NProgress.start()
    console.log(config)
    return config
})

axios.interceptors.response.use(res => {
    // 关闭进度条
    NProgress.done()
    console.log(res)
    return res.data
})

export default axios