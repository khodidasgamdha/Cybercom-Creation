<template>
    <div>
        <GmapMap
            :center="{ lat: 40.61574145333913, lng: -73.9636418508522 }"
            :zoom="15"
            map-type-id="terrain"
            style="width: 100%; height: 400px"
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
    
}
</script>

<style>
</style>