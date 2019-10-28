<template>
    <div>
        <h2>Events</h2>
        <div class="row mb-4">
            <div class="col-md-3">
                <text-input
                    placeholder="Search.."
                    v-model="form.search"
                    @input="loadEvents"
                ></text-input>
            </div>
            <div class="col-md d-flex align-items-center justify-content-end">
                <router-link :to="{ name: 'events.create' }" class="btn btn-primary">Create</router-link>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <ul class="list-unstyled" v-if="events && events.data.length > 0">
                    <li class="media" v-for="(event, key) in events.data">
                        <div class="media-body border-bottom mb-3">
                            <router-link :to="{name: 'events.show', params: {id: event.id}}" class="text-dark">
                                <h4 class="mb-2">{{ event.title }}</h4>
                                <p>{{ event.description }}</p>
                            </router-link>
                        </div>
                    </li>
                </ul>
                <div class="text-center px-4" v-else> No data..</div>
            </div>

            <pagination
                v-if="events && events.data.length > 0"
                :links="events && events.meta"
                @goToPage="goToPage"
            >
            </pagination>

        </div>
    </div>
</template>
<script>
import { Form } from '@/mixins';
export default {
    mixins: [Form],

    data () {
        return {
            events: null,
        }
    },

    mounted () {
        this.loadEvents();
    },

    methods: {
        loadEvents(navigationPage) {
            let page = navigationPage || 1;
            const uri = '/spa/publication/events';

            axios.get(uri, {
                params: {
                    search: this.form.search,
                    page,
                    sort: 'created_at|desc',
                }
            }).then(({data}) => {
                this.events = data;
            });
        },

        goToPage(page) {
            this.loadEvents(page);
        },
    }
}
</script>