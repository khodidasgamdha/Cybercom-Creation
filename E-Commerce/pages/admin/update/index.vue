<template>
    <div id="noProduct">
        <h1 color="" class="text-center display-1">
            Oops, Please Select Product from Dashboard
        </h1>
        <n-link id="addProduct" to="/admin">
            <v-btn class="mt-10" color="primary" dark> Select Product </v-btn>
        </n-link>
    </div>
</template>

<script>
export default {
    layout: 'admin',
}
</script>

<style>
#noProduct {
    margin-top: 200px;
    color: #606060;
}
#addProduct {
    margin-left: 500px;
}
</style>