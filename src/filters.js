import Vue from 'vue'
import moment from 'moment'

Vue.filter('dataFormat', function (dataStr, formatStr = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(formatStr)
})