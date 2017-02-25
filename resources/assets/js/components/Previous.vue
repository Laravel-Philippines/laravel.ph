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
            const d = this.$parent.getDay(time)

            return d.month + ' ' + d.date + ', ' + d.year
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
        this.$parent.getEvents('past')
        .then(response => {
            console.log('PREVIOUS', response.body.data)
            this.previouses = response.body.data;
        })
    }
}
</script>
