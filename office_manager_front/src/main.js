import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ElementUI from "element-ui";
import Axios from 'axios';
import "element-ui/lib/theme-chalk/index.css";
import "./styles/customize.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = Axios;

new Vue({
    store: store,
    router: router,
    render: h => h(App)
}).$mount("#app");
