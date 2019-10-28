<template>
    <div class="w-100 d-flex justify-content-between mt-3" v-show="links && links.total > 0">
        <span class="showing">
            Showing
            <span class="item">{{links && links.from}}</span> to
            <span class="item">{{links && links.to}}</span> of
            {{links && links.total}} items
        </span>
        <ul class="pagination">
            <li
                class="page-item"
                v-if="links.current_page > 1"
            >
                <button
                    @click="navigate(links.current_page - 1)"
                    class="page-link btn btn-sm" >Previous</button>
            </li>
            <template v-for="(link, index) in items">
                <li class="page-item" :class="link.active && 'active'" :key="index">
                    <button class="page-link btn btn-sm" @click="!link.active && navigate(link.page)">{{link.value}}</button>
                </li>
            </template>
            <li
                class="page-item"
                v-if="links.current_page < links.last_page">
                <button
                    @click="navigate(links.current_page + 1)"
                    class="page-link btn btn-sm">Next</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        links: {
            required: true,
            default: null
        }
    },

    data() {
        return {
            items: [],
         }
    },

    mounted() {
        this.generateLink()
    },

    watch: {
        links: function(value) {
            this.generateLink()
        }
    },

    methods: {

        generateLink() {
            if (! this.links) return;
            let { last_page, current_page } = this.links;

            let current = current_page,
                last = last_page,
                delta = 2,
                left = current - delta,
                right = current + delta + 1,
                range = [],
                rangeWithDots = [],
                l;

            for (let i = 1; i <= last; i++) {
                if (i == 1 || i == last || i >= left && i < right) {
                    range.push(i);
                }
            }

            let counter = 0;
            let items = [];
            for (let i of range) {
                if (l) {
                    if (i - l === 2) {
                        items.push({
                            page: l + 1,
                            value: l + 1,
                            active: false,
                        })
                    } else if (i - l !== 1) {
                        // counter = 1 if the ellipsis will show on the left
                        items.push({
                            page: counter === 1 ? i - 1 : l + 1,
                            value: '...',
                            active: false,
                        })
                    }
                }
                ++counter
                items.push({
                    page: i,
                    value: i,
                    active: i === current_page,
                })
                l = i;
            }

            this.items = items
        },

        navigate(page) {
            this.$emit('goToPage', page)
        }
    }
}
</script>

<style scoped>
.pagination {
    justify-content: space-between;
}
.pagination .showing {
    line-height: 28px;
    font-size: 12px;
    color: #9a959a;
}
.pagination .showing .item {
    font-weight: 600;
}
.pagination .page-item.active .page-link {
    background-color: #315f44;
    border-color: #315f44;
    color: #FFFFFF;
}
.pagination .page-item .page-link {
    border-radius: 0;
    color: #9a959a;
}
.pagination .page-item .page-link:focus {
    box-shadow: none;
}
</style>