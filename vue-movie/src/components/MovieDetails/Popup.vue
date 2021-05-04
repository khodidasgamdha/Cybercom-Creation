<template>
    <div
        style="background-color: rgba(0, 0, 0, 0.7)"
        class="fixed top-0 w-full h-full flex items-center"
        tabindex="0"
        v-if="value">
        <div class="container mx-auto lg:px-40 md:px-3 rounded-lg overflow-y-auto">
            
            <div class="bg-gray-920 rounded">

                <div class="flex justify-end pr-16">
                    <button
                        @click="close"
                        class="text-3xl leading-none hover:text-gray-300">
                        &times;
                    </button>
                </div>

                <div :class="isvideo ? 'modal-body px-8 py-8' : 'px-32 py-6'">
                    <div
                        class="responsive-container overflow-hidden relative"
                        :style="isVideo ? 'padding-top: 50%' : {}">
                        <img
                            class="responsive-iframe w-full"
                            style="border: 0"
                            :src="mediaURL"
                            v-if="!isVideo"
                        />
                        <iframe
                            class="responsive-iframe absolute top-0 left-0 w-full h-full"
                            style="border: 0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            v-if="isVideo"
                            :src="mediaURL"
                        >
                        </iframe>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            required: true,
        },
        mediaURL: {
            required: true,
        },
        isVideo: {
            required: true,
        },
    },
    methods: {
        close() {
            this.$emit("input", !this.value);
        },
    },
};
</script>

<style>
</style>