<template>
    <header class="header">
        <h1 class="title">Nuxt Practice</h1>
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/user">User</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/abcd">_Slug</nuxt-link>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
}
.header .title {
    font-size: 3rem;
    color: #41b883;
}
.header ul {
    display: flex;
    list-style: none;
}
.header a {
    display: inline-block;
    background: #41b883;
    color: #fff;
    padding: 0.3rem 1rem;
    margin-left: 0.5rem;
    text-decoration: none;
}
a.nuxt-link-exact-active {
    color: #000;
}
</style>