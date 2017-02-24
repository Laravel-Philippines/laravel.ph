
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('upcoming', require('./components/Upcoming.vue'));
Vue.component('previous', require('./components/Previous.vue'));

const app = new Vue({
    el: '#app',
    mounted() {
        $('.owl-carousel').owlCarousel({
            items: 4,
            margin: 16,
            dots: true,
            autoplay: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                480: {
                    items: 1,
                    dots: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        })
    }
});
