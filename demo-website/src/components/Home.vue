<template>
        <v-main>

            <!-- banner image -->
            <div id="bannerImg">
                <img :src="require('@/assets/banner.jpg')" alt="banner">
            </div>

            <!-- form -->
            <Form title="Want to Connect with Us !!" />
            
            <!-- contact banner -->
            <Contactbanner />
            
        </v-main>
</template>

<script>
import Form from "./Form";
import Contactbanner from "./contact-banner";

export default {
    name: "Home",
    components: {
        Form,
        Contactbanner,
    },
    data() {
        return {};
    },
};
</script>

<style scoped>
#bannerImg {
    width: 100%;
}
</style>