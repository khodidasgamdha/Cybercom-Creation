<template>
    <div>

        <!-- slot -->
        <div>
            <p slot="named">hii</p>
        </div>
        <div>
            <h3 v-for="name in names" :key="name.firstName">
                <slot :firstName='name.firstName' :lastName='name.lastName'></slot>
            </h3>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Slots',
    data() {
        return {
            names: [
                { firstName: 'Ajay', lastName: 'Nagotha' },
                { firstName: 'Ravi', lastName: 'Gajera' }
            ]
        }
    }
}
</script>

<style>

</style>