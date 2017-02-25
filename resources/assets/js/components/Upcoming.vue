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
                    name: 'Loading...'
                }
            }
        }
    },
    computed: {
        fullDate() {
            var d = this.$parent.getDay(this.data.time);

            return d.month + ' ' + d.date + ', ' + d.year;
        },
        dayAndTime() {
            var d = this.$parent.getDay(this.data.time);

            return d.day + ' | ' + d._date.toLocaleTimeString();
        },
        filterDescription() {
            var desc = this.data.description.replace(/<(?:.|\n)*?>/gm, '');

            return desc.substring(0, 150) + '...'
        }
    },
    methods: {
        getRecent() {
            this.$parent.getEvents('recent_past')
            .then(response => {
                console.log('RECENT', response.body.data)
                // Brute force
                document.getElementById('meetup_component').getElementsByClassName('upcoming')[0].getElementsByTagName('h3')[0].firstChild.textContent = 'RECENT '
                this.data = response.body.data[0];
            })
        }
    },
    mounted() {
        this.$parent.getEvents('next_upcoming')
        .then(response => {
            console.log('UPCOMING', response.body.data)
            if (response.body.data.length) {
                this.data = response.body.data[0];
            } else {
                console.warn('No upcoming as of the moment, lets get the recent.')
                this.getRecent()
            }

        }, error => {
            console.error('SOMETHING WENT WRONG')
        })
    }
}
</script>
