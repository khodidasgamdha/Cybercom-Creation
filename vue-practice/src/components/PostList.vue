<template>
    <div class="container">
        <h1>Get Data From Server</h1>

        <!-- form -->
        <form class="mb-2">
            <input type="number" placeholder="User Id" v-model.number="formData.userId" class="mr-2" />
            <input type="text" placeholder="Title" v-model="formData.title" class="mr-2" />
            <input type="text" placeholder="Body" v-model="formData.body" class="mr-2" />
            <b-button variant="success" @click="createUser">Add</b-button>
        </form>

        <!-- table -->
        <div id="table">
            <b-table hover bordered headVariant='dark' :items="items" :fields="fields">
                <button>Add</button>
            </b-table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PostList',
    data() {
        return {
            formData: {
                userId: '',
                title: '',
                body: ''
            },
            fields: [
                {
                  key: 'userId',
                  sortable: true
                },
                {
                  key: 'id',
                  sortable: true
                },
                {
                  key: 'title',
                  sortable: true,
                },
                {
                  key: 'body',
                  label: 'Info',
                  sortable: true,
                }
            ],
            items: []
        }
    },
    methods: {
        createUser() {
            console.log('hi')
            axios
                .post('https://jsonplaceholder.typicode.com/posts', this.formData)
                .then(responce => {
                    // this.items = responce.data
                    console.log(responce.data)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(responce => {
                this.items = responce.data
            })
            .catch(error => {
                console.log(error);
            })
    }
}
</script>

<style scoped>
#table {
    background: white
}
</style>