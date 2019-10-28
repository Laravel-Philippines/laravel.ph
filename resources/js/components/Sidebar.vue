<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <router-link
                :to="{ name: 'events.index' }"
                class="text-dark"
                exact-active-class="font-weight-bold"
            >
                Events
            </router-link>
        </li>
        <li class="list-group-item">
            <router-link
                :to="{ name: 'articles.index' }"
                class="text-dark"
                exact-active-class="font-weight-bold"
            >
                Articles
            </router-link>
        </li>
        <li class="list-group-item">
            <router-link
                :to="{ name: 'sponsors.index' }"
                class="text-dark"
                exact-active-class="font-weight-bold"
            >
                Sponsors
            </router-link>
        </li>
        <li class="list-group-item">
            <a
                href="/logout"
                class="text-dark"
                onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
            >
                Logout
            </a>

            <form id="logout-form" action="/logout" method="POST" style="display: none;">
                <input type="hidden" name="_token" :value="csrfToken">
            </form>
        </li>
    </ul>
</template>
<script>
export default {

    data () {
        return {
            csrfToken: null,
        }
    },

    mounted () {
        this.csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
    }
}
</script>