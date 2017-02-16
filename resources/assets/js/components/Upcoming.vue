<template>
    <div class="upcoming-component">
        <div class="media">
            <div class="media-left hidden-xs">
                <i class="fa fa-calendar fa-3x fa-fw" aria-hidden="true"></i>
            </div>
            <div class="media-body">
                <h5 class="media-heading">{{ fullDate }}</h5>
                <p>{{ dayAndTime }}</p>
            </div>
        </div>
        <div class="media">
            <div class="media-left hidden-xs">
                <i class="fa fa-map-marker fa-3x fa-fw" aria-hidden="true"></i>
            </div>
            <div class="media-body">
                <h5 class="media-heading">{{ data.venue.name }}</h5>
                <p>{{ data.venue.address_1 }}</p>
            </div>
        </div>
        <div class="media">
            <div class="media-left hidden-xs">
                <i class="fa fa-comments-o fa-3x fa-fw" aria-hidden="true"></i>
            </div>
            <div class="media-body">
                <h5 class="media-heading">Topics &amp; Discussion</h5>
                <div v-html="filterDescription" class="text-justify"></div>
                <a :href="data.link" target="_blank">Learn more</a>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    data() {
        return {
            data: {
                name: '...',
                time: Date.now(),
                description: 'Loading',
                link: '',
                venue: {
                    address_1: '...',
                    name: ''
                }
            }
        }
    },
    computed: {
        fullDate() {
            var d = this.getDay(this.data.time);

            return d.month + ' ' + d.date + ', ' + d.year;
        },
        dayAndTime() {
            var d = this.getDay(this.data.time);

            return d.day + ' | ' + d._date.toLocaleTimeString();
        },
        filterDescription() {
            var desc = this.data.description.replace(/<(?:.|\n)*?>/gm, '');

            return desc.substring(0, 150) + '...'
        }
    },
    methods: {
        getDay(time) {
            var t = new Date(parseInt(time))
            var _month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            var _days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

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
        this.$http({
            url: 'https://api.meetup.com/Laravel-Philippines/events',
            params: {
                sign: true,
                'photo-host': 'public',
                page: 1,
                status: 'upcoming',
                key: '4e4f73451216b2be7a434b357cd74'
            },
            method: 'jsonp'
        })
        .then(response => {
            console.log(response.body.data[0])
            this.data = response.body.data[0];
        })
    }
}
</script>
