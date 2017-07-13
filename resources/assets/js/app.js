
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

require('owl.carousel');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('upcoming', require('./components/Upcoming.vue'));
Vue.component('previous', require('./components/Previous.vue'));

const app = new Vue({
    el: '#app',
    methods: {
        getEvents(status) {
            _defaultParams = {
                sign: true,
                'photo-host': 'public',
                fields: 'simple_html_description, photo_album',
                key: 'INSERT_YOUR_MEETUP_API_KEY_HERE',
            }
            status = (['recent_past', 'next_upcoming'].indexOf(status) > -1) ? { scroll: status } : { status: status, desc: true }

            return this.$http({
                url: 'https://api.meetup.com/Laravel-Philippines/events',
                params: Object.assign(_defaultParams, status),
                method: 'jsonp'
            })
        },
        getDay(time) {
            const t = new Date(parseInt(time))
            const _month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            const _days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

            return {
                month: _month[t.getMonth()],
                date: t.getDate(),
                year: t.getFullYear(),
                day: _days[t.getDay()],
                _date: t
            }
        }
    },
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
