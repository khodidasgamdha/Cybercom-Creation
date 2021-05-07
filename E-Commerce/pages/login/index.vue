<template>
    <div class="container">
        <div>
            <Login />
        </div>
        <div>
            <Registration />
        </div>
    </div>
</template>

<script>
import Login from '../../components/Login'
import Registration from '../../components/Registration'

export default {
    components: {
        Login,
        Registration
    },
    data() {
        return {
            login: true
        }
    }
}
</script>

<style>
</style>