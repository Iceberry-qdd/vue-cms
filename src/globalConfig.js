import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import "../public/css/global.css";
import axios from 'axios'
import './filters'

Vue.prototype.$http = axios.create({
    baseURL: 'http://www.liulongbin.top:3005'
})

Vue.use(Vant);