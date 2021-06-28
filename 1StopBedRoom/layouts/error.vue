<template>
    <v-app dark>
        <div v-if="error.statusCode === 404">
            <Error :type="pageNotFound" />
        </div>
        <div v-else>
            <Error :type="otherError" />
        </div>
    </v-app>
</template>

<script>
import Error from '../components/Error'

export default {
    components: {
        Error
    },
    layout: 'empty',
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            pageNotFound: '404 Not Found',
            otherError: 'An error occurred',
        }
    },
    head() {
        const title =
            this.error.statusCode === 404 ? this.pageNotFound : this.otherError
        return {
            title,
        }
    },
}
</script>

<style>
</style>
