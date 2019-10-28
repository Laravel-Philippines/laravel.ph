<template>
    <div>
        <div class="row">
            <div class="col-sm-12">
                <div class="d-flex justify-content-between mb-3">
                    <h4>{{ pageTitle }} Events</h4>
                </div>

                <text-input
                    labelText="Title"
                    type="text"
                    placeholder="Give the event a good title.."
                    v-model="form.title"
                    :errorText="getError('title')"
                ></text-input>

                <date-time
                    labelText="Event Date"
                    type="datetime"
                    format="y-MM-dd HH:mm"
                    v-model="form.event_date"
                    :errorText="getError('event_date')"
                ></date-time>

                <text-area
                    labelText="Description"
                    placeholder="And the description goes here.."
                    rows="5"
                    v-model="form.description"
                    :errorText="getError('event_date')"
                ></text-area>

                <div class="form-group row">
                    <div class="col-sm-12 text-right">
                        <router-link
                            :to="{ name: 'events.index' }"
                            class="btn btn-link"
                            role="button"
                        >
                            Cancel
                        </router-link>
                        <button class="btn btn-primary" @click="submit">Save</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import {Form, ErrorBag, DateFormat} from '@/mixins';
export default {
    mixins: [Form, ErrorBag, DateFormat],

    data () {
        return {
            events: [],
        }
    },

    computed: {
        pageTitle() {
            return !! this.$route.params.id ? 'Edit' : 'Create';
        }
    },

    mounted () {
        this.loadEvent();
    },

    methods: {
        submit () {
            let { id } = this.form;
            let url = id ? `/spa/publication/events/${id}/update` : `/spa/publication/events/store`;
            let method = id ? 'patch' : 'post';

            this.clearErrors();

            return axios[method](url, {
                    ...this.form,
                    event_date: this.formatDate(this.form.event_date, 'Y-MM-DD HH:mm'),
                })
                .then(({data}) => {
                    this.$router.push({ name: 'events.show', params: { id: data.data.id } })
                }, err => this.errorBag = err.response.data);
        },

        loadEvent() {
            let {id} = this.$route.params;

            if (! id) return;

            const uri = `/spa/publication/events/${id}/show`;

            return axios.get(uri)
                .then(({data}) => {
                    this.form = {
                        ...data.data,
                        event_date: this.formatDate(
                            data.data.event_date,
                            'Y-MM-DDTHH:mm:ss.SSSZ' // For some weird reason ISO8601 is the only format datetime package is accepting.
                        ),
                    }
                });
        },

    },
}
</script>