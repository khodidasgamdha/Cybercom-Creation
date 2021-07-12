<template>
    <div>
        <GmapMap
            :center="{ lat: 40.61574145333913, lng: -73.9636418508522 }"
            :zoom="15"
            map-type-id="terrain"
            :style="`width: 100%; height: ${height}px`"
        >
            <GmapMarker
                :position="{ lat: 40.61574145333913, lng: -73.9636418508522 }"
                :clickable="true"
                :draggable="true"
                @click="center = { lat: 40.61574145333913, lng: -73.9636418508522 }"
            />
        </GmapMap>
    </div>
</template>

<script>
export default {
    props: {
        height: {
            type: String,
            default: 400
        }
    }
}
</script>

<style>
</style>