<template>
    <v-container>
        
        <!-- heading -->
        <h1 class="text-center display-2" id="heading"> {{ title }} </h1>
        
        <v-row>
            <v-col v-for="blog in data" :key="blog.title" md="4">
                
                <!-- card -->
                <v-card>

                    <!-- image & title -->
                    <v-img class="white--text align-end" :src="blog.image">
                        <v-card-title> {{ blog.title }} </v-card-title>
                    </v-img>

                    <!-- date -->
                    <v-card-subtitle class="pb-0">
                        {{ blog.date }}
                    </v-card-subtitle>

                    <!-- subtitle & blog details -->
                    <v-card-text class="text--primary">
                        <h3 class="title">{{ blog.quota }}</h3>
                        <h3 class="body-2" v-trim>{{ blog.details }}</h3>
                    </v-card-text>

                    <!-- buttons -->
                    <v-card-actions>
                        <v-btn small color="primary" class="white--text" elevation="5"> Share </v-btn>
                        <v-btn small color="success" elevation="5">
                            <router-link :to="{ name: 'blog', params: { id:  blog.title }}" class="white--text">
                                 View more...
                            </router-link> 
                        </v-btn>
                    </v-card-actions>
                </v-card>
                
            </v-col>
        </v-row>

    </v-container> 
</template>

<script>
export default {
    name: "BlogPost",
    props: {
        data: {
            type: Array,
            default() {
                return [];
            }
        },
        title: {
            type: String,
            default: 'Blogs'
        }
    },
    directives: {
        trim: {
            inserted: function (el) {
                var str = el.innerHTML;
                var resultString = str.substr(0, 100) + "...";
                el.innerHTML = resultString
            }
        }
    },
}
</script>

<style>
#heading {
    margin: 50px auto;
}
</style>