<template>
<div class="form-group">
    <label class="form-label">{{ labelText }}</label>
    <slot></slot>
    <span class="form-error" v-if="!! errorText">{{ errorText }}</span>
</div>
</template>
<script>
export default {
    props: {
        labelText: {
            type: String,
            default: ''
        },

        errorText: {
            type: String,
            default: '',
        },
    }
}
</script>