<template>
    <div v-if="!! event">
        <h2>Events</h2>
        <div class="row mb-4">
            <div class="col-md d-flex align-items-center justify-content-end">
                <router-link :to="{ name: 'events.edit' }" class="btn btn-primary">Edit</router-link>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <table class="table table-hover table-striped w-full">
                <tbody>
                    <tr>
                        <td class="w-2/5">Title</td>
                        <td class="w-3/5" v-text="event.title"></td>
                    </tr>
                    <tr>
                        <td class="w-2/5">Description</td>
                        <td class="w-3/5" v-text="event.description"></td>
                    </tr>
                    <tr>
                        <td class="w-2/5">Event Date</td>
                        <td class="w-3/5">{{ event.event_date | dateFormat('Y-MM-DD HH:mm') }}</td>
                    </tr>
                    <tr>
                        <td class="w-2/5">Published At</td>
                        <td class="w-3/5">{{ event.published_at | dateFormat('Y-MM-DD') }}</td>
                    </tr>
                    <tr>
                        <td class="w-2/5">Publisher</td>
                        <td class="w-3/5"></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>




</template>
<script>
import {DateFormat} from '@/mixins';
export default {

    mixins: [DateFormat],

    data () {
        return {
            event: null,
        }
    },

    mounted () {
        this.loadEvent();
    },

    methods: {
        loadEvent() {
            let {id} = this.$route.params;
            const uri = `/spa/publication/events/${id}/show`;

            return axios.get(uri, {
                params: {
                    load: 'publisher',
                }
            }).then(({data}) => { this.event = data.data; });
        }
    }
}
</script>