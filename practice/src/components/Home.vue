<template>
    <div>
        <hr />
        <!-- props -->
        <h1 v-bind="$attrs">Hello, {{ name }} : Like {{ like }}</h1>
        <hr />

        <!-- Dynamic Components -->
        <div>
            <button @click="activeTab = 'TabA'">Tab A</button>
            <button @click="activeTab = 'TabB'">Tab B</button>
            <button @click="activeTab = 'TabC'">Tab C</button>
        </div>
        <component :is="activeTab" />
        <hr />
    </div>
</template>

<script>
import TabA from "./TabA";
import TabB from "./TabB";
import TabC from "./TabC";

export default {
    name: "Home",
    data() {
        return {
            activeTab: "TabA",
        };
    },
    components: {
        TabA,
        TabB,
        TabC,
    },
    props: {
        name: {
            type: String,
            default: "default Name",
        },
        like: Number,
    },
    inheritAttrs: false,
};
</script>

<style>
</style>