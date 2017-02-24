<template>
    <div class="previous-component">
        <div class="media" v-for="previous in previouses">
            <div class="media-left hidden-xs">
                <a target="_blank" :href="previous.link">
                    <img :src="getImage(previous).thumb" alt="" />
                </a>
            </div>
            <div class="media-body">
                <a target="_blank" class="media-heading h5" :href="previous.link">{{ previous.name }}</a>
                <p>{{ getDay(previous.time) }}</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            previouses: []
        }
    },
    methods: {
        getDay(time) {
            var t = new Date(parseInt(time))
            var _month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            var _days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

            return _month[t.getMonth()] + ' ' + t.getDate() + ', ' + t.getFullYear()
        },
        getImage(evt) {
            if (evt.hasOwnProperty('photo_album')) {
                var photo = evt.photo_album.photo_sample[Math.floor(Math.random() * evt.photo_album.photo_sample.length)]
                return {
                    highres: photo.highres_link,
                    thumb: photo.thumb_link
                };
            } else {
                return {
                    highres: '/assets/default-event.jpg',
                    thumb: '/assets/default-event.jpg'
                }
            }
        }
    },
    mounted() {
        this.$http({
            url: 'https://api.meetup.com/Laravel-Philippines/events',
            params: {
                sign: true,
                'photo-host': 'public',
                status: 'past',
                fields: 'simple_html_description, photo_album',
                key: '4e4f73451216b2be7a434b357cd74'
            },
            method: 'jsonp'
        })
        .then(response => {
            console.log('PREVIOUS', response.body.data)
            this.previouses = response.body.data;
        })
    }
}
</script>
