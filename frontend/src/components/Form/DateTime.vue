<template>
    <form-group :labelText="labelText" :errorText="errorText">
        <datetime
            input-class="form-control"
            v-on="$listeners"
            v-bind="$attrs"
            :value="value"
        ></datetime>
    </form-group>
</template>
<script>
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';
export default {
    props: {
        model: { event: 'update', },
        labelText: {
            type: String,
            default: '',
        },

        errorText: {
            type: String,
            default: '',
        },

        value: {
            type: String,
            default: '',
        },
    },

    components: {
        datetime: Datetime
    }
}
</script>
<style>
</style>