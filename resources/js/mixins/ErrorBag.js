export default {
    data () {
        return {
            errorBag: [],
        }
    },

    methods: {
        getError(key) {
            try {
                return this.errorBag.errors[key][0];
            } catch (e) {
                return '';
            }
        },

        clearErrors() {
            this.errorBag = [];
        },
    }
}