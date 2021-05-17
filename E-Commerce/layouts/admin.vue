<template>
    <v-app>
        <div class="row">

            <!-- sidebar -->
            <div class="col-md-2 col-sm-4">
                <v-navigation-drawer color="light-blue lighten-3" permanent fixed>

                    <!-- user -->
                    <div class="mt-10 mb-10">
                        <v-list-item>
                            <!-- admin image -->
                            <v-list-item-avatar class="ml-3">
                                <img
                                    src="https://i.pravatar.cc/45?img=12"
                                />
                            </v-list-item-avatar>
                            
                            <!-- Nane -->
                            <v-list-item-content class="ml-2">
                                <n-link to="/">
                                    <v-list-item-title><b>Khodidas Gamdha</b></v-list-item-title>
                                    <v-list-item-subtitle>Admin</v-list-item-subtitle>
                                </n-link>
                            </v-list-item-content>
                        </v-list-item>
                    </div>

                    <v-divider></v-divider>

                    <!-- routes -->
                    <div class="mt-5 ml-6" v-for="route in routes" :key="route.name">
                        <v-btn class="button no-active" text :to="route.path">
                            <v-icon class="mr-3">{{ route.icon }}</v-icon>
                            {{ route.name }}
                        </v-btn>                                          
                    </div>

                    <!-- logout -->
                    <v-btn class="button ml-6" id="logout" to="/">
                        <v-icon class="mr-3">mdi-logout</v-icon>
                        Logout 
                    </v-btn>                                          

                </v-navigation-drawer>
            </div>

            <!-- components -->
            <div class="col-md-10 col-sm-8">
                <nuxt />
            </div>
        </div>

    </v-app>
</template>

<script>
export default {
    data: () => ({
        routes: [
            { name: 'Dashboard', path: '/admin', icon: 'mdi-home' },
            { name: 'Add Product', path: '/admin/addProduct', icon: 'mdi-plus' },
            { name: 'Update Product', path: '/admin/update', icon: 'mdi-pencil' }
        ]
    })
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
.button {
    width: 204px;
}
#logout {
    margin-top: 300px;
}
</style>