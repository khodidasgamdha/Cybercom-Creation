<template>
    <div class="m-5 flex">

        <!-- input tag -->
        <input
            ref="searchBox"
            type="text"
            class="rounded-full bg-gray-600 px-5 w-50 h-10 mr-4 mt-1 focus:outline-none"
            placeholder="Search..."
            @input="search"
        />

        <div class="absolute mt-12 ml-3 rounded bg-gray-600 w-48">
            <ul class="mt-3" v-if="searchResults.length != 0">
                <li 
                    v-for="(movie, index) in searchResults"
                    :key="index">
                    <router-link 
                        :to="`/movie/${movie.id}`" 
                        @click.native="searchResults = []"
                        class="flex items-center border-b border-gray-500 pl-3 p-1">
                        <img :src="posterPath(movie)" :alt="movie.title" class="w-8">
                        <span class="ml-4">{{ movie.title }}</span>
                    </router-link>
                </li>
            </ul>
            <ul v-if="noResultFound">
                <li class="flex items-center border-b border-gray-500 pl-3 p-1">
                    No Results Found
                </li>
            </ul>
        </div>

        <!-- user image -->
        <img src="https://i.pravatar.cc/45?img=12" alt="" class="rounded-full">
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchResults: [],
            noResultFound: false,
        }
    },
    mounted() {
        this.keyboardEvent();
    },
    methods: {
        search(event) {
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                this.fetchSearch(event.target.value)
            }, 500)
        },
        async fetchSearch(item) {
            try {
                if(item.length > 0) {
                    const response = await this.$http.get(`search/movie?query=${item}`);
                    this.searchResults = response.data.results;
                    this.noResultFound = response.data.results.length == 0 ? true : false;
                }
                if(item.length == 0) {
                    this.searchResults = [];
                    this.noResultFound = false;
                }
            } catch (error) {
                console.log(error);
            }
        },
        posterPath(movie) {
            if(movie.poster_path) {
                return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            } else {
                return 'https://via.placeholder.com/32x48'
            }
        },
        keyboardEvent() {
            // let windowObj = this;
            window.addEventListener('click', (e) => {
                if(!this.$el.contains(e.target)) {
                    this.searchResults = []
                }
            })
            // window.addEventListener('keypress', (e) => {
            //     if(e.keyCode == '47') {
            //         e.preventDefault()
            //         windowObj.$refs.searchBox.focus();
            //     }
            // })
            // window.addEventListener('keydown', (e) => {
            //     if(e.key == escape) {
            //         this.noResultFound = false;
            //     }
            // });
        },
    }
};
</script>

<style>
</style>