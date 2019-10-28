<template>
    <form-group :labelText="labelText" :errorText="errorText">
        <input
            class="form-control"
            :value="value"
            @input="$emit('update', $event.target.value)"
            v-on="$listeners"
            v-bind="$attrs"
        >
    </form-group>
</template>
<script>
export default {
    model: { event: 'update', },
    props: {
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
    }
}
</script>