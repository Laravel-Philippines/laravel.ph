export default {
    filters: {
        dateFormat(date, format) {
            if (! date) {
                return '';
            }

            return moment(date).format(format);
        }
    },

    methods: {
        formatDate(date, format) {
            if (! date) {
                return '';
            }

            return moment(date).format(format);
        }
    }
}