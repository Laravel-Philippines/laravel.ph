<template>
    <form-group :labelText="labelText" :errorText="errorText">
        <textarea
            class="form-control"
            v-bind="$attrs"
            @input="$emit('update', $event.target.value)"
            :value="value"
        ></textarea>
    </form-group>
</template>
<script>
export default {
    model: { event: 'update', },
    props: {
        labelText: {
            type: String,
            default: '',
            required: true,
        },

        errorText: {
            type: String,
            default: '',
        },

        value: {
            type: String,
            default: '',
        },
    }
}
</script>