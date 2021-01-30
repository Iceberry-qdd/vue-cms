import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFormat', function (dataStr, formatStr = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(formatStr)
})