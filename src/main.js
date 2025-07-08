import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Optional third-party libraries
import $ from 'jquery'
import _ from 'lodash'
import noUiSlider from 'nouislider'
import 'datatables.net'
import 'dropzone/dist/dropzone-min.js'
import * as VanillaCalendarPro from 'vanilla-calendar-pro'

window._ = _
window.$ = $
window.jQuery = $
window.DataTable = $.fn.dataTable
window.noUiSlider = noUiSlider
window.VanillaCalendarPro = VanillaCalendarPro

const app = createApp(App)

app.use(router)

app.mount('#app')
import('preline/dist/index.js')
