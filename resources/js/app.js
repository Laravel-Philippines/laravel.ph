import Vue from 'vue';
import App from '@screens/App';

import '@/bootstrap';
import '@/components';

import router from '@/router';

const app = new Vue({
    el: '#app',
    router,
    template: "<App/>",
    components: { App },
});
