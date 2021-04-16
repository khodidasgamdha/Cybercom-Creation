<template>
    <!-- connect with us -->
    <div id="banner" class="container row">
        <!-- quota -->
        <div md="8" id="quota">
            <h1 id="head" class="display-1">START YOUR WORK WITH US</h1>
            <h3 class="subtitle-1">
                Let's Connect with Us, We provide batter Service for your work
                :)
            </h3>
        </div>

        <!-- contact-us button -->
        <div id="connect">
            <v-btn elevation="10" large to="/contact-us" color="success">
                Contact Us
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contactbanner'
};
</script>

<style>
#banner {
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
    height: 200px;
    margin: 40px auto;
    border-radius: 10px;
}
#quota {
    margin: 50px auto auto 50px;
    color: white;
}
#connect {
    margin: auto;
}
</style>