  
<template>
    <div>
        
        <!-- title -->
        <h1 class="text-capitalize pb-5">{{ $route.params.category }}</h1>
        
        <!-- links -->
        <h3>Shop by Category</h3>
        
        <div v-for="(link, i) in productLinks" :key="i" class="pt-1">
            <nuxt-link
                class="black--text text-decoration-none"
                :to="`${$route.params.category}/${link.link}`"
            >
                <span class="body-2 font-weight-light">{{ link.linkTitle }}</span>
            </nuxt-link>
        </div>

        <!-- image -->
        <v-img 
            src="https://cdn-assets.affirm.com/images/banners/170x100.png" 
            alt="affirm"
            width="60%"
            class="mx-auto mt-16"
        ></v-img>

    </div>
</template>

<script>
export default {
    props: {
        productLinks: { type: Array, required: true },
    },
}
</script>