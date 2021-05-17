<template>
    <div class="container mx-auto">
        <form class="mt-10">

            <div class="row">
                <!-- name  -->
                <div class="col-sm-6">
                    <v-text-field
                        v-model="product.name"
                        :error-messages="nameErrors"
                        :counter="50"
                        label="Name"
                        required
                        filled
                        clearable
                        @input="$v.product.name.$touch()"
                        @blur="$v.product.name.$touch()"
                    ></v-text-field>
                </div>
                <!-- image -->
                <div class="col-sm-6">
                    <v-text-field
                        v-model="product.img"
                        :error-messages="imgErrors"
                        label="Image URL"
                        required
                        filled
                        clearable
                        @input="$v.product.img.$touch()"
                        @blur="$v.product.img.$touch()"
                    ></v-text-field>
                </div>
            </div>

            <div class="row">
                <!-- brand -->
                <div class="col-sm-6">
                    <v-text-field
                        v-model="product.brandName"
                        :error-messages="brandNameErrors"
                        :counter="20"
                        label="Brand Name"
                        required
                        filled
                        clearable
                        @input="$v.product.brandName.$touch()"
                        @blur="$v.product.brandName.$touch()"
                    ></v-text-field>
                </div>
                <!-- category -->
                <div class="col-sm-6">
                    <v-select
                        v-model="product.category"
                        :items="categories"
                        :error-messages="categoryErrors"
                        label="Category"
                        required
                        filled
                        clearable
                        @input="$v.product.category.$touch()"
                        @blur="$v.product.category.$touch()"
                    ></v-select>
                </div>
            </div>

            <div class="row">
                <!-- product type -->
                <div class="col-md-4">
                    <v-select
                        v-model="product.subCategory"
                        :items="subCategories"
                        :error-messages="subCategoryErrors"
                        label="Sub Category"
                        required
                        filled
                        clearable
                        @input="$v.product.subCategory.$touch()"
                        @blur="$v.product.subCategory.$touch()"
                    ></v-select>
                </div>
                <!-- price -->
                <div class="col-md-4">
                    <v-text-field
                        v-model.number="product.price"
                        :error-messages="priceErrors"
                        label="Price"
                        required
                        filled
                        clearable
                        prefix="₹"
                        @input="$v.product.price.$touch()"
                        @blur="$v.product.price.$touch()"
                    ></v-text-field>
                </div>
                <!-- rating -->
                <div class="col-md-4">
                    <v-text-field
                        v-model.number="product.rating"
                        :error-messages="ratingErrors"
                        label="Rating"
                        required
                        filled
                        clearable
                        prefix="✭"
                        @input="$v.product.rating.$touch()"
                        @blur="$v.product.rating.$touch()"
                    ></v-text-field>
                </div>
            </div>

            <!-- discription -->
            <div>
                <v-textarea
                    v-model="product.description"
                    label="Description of Product..."
                    filled
                    clearable
                ></v-textarea>
            </div>

            <div class="row container mx-auto">
                <!-- add product -->
                <v-btn
                    v-if="type === 'Add Product'"
                    width="215"
                    class="primary"
                    elevation="20"
                    @click="addProd(product)"
                >
                    {{ type }}
                </v-btn>
                <!-- update product -->
                <v-btn
                    v-else
                    width="215"
                    class="primary"
                    elevation="20"
                    @click="updateProd(product)"
                >
                    {{ type }}
                </v-btn>
                <!-- clear -->
                <v-btn
                    width="215"
                    class="ml-auto"
                    color="warning"
                    elevation="20"
                    @click="clear"
                >
                    Clear
                </v-btn>
            </div>

        </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength } from 'vuelidate/lib/validators'
import { db } from '../../firebase'

export default {
    props: {
        product: {
            required: true,
        },
        type: {
            required: true,
        },
    },
    mixins: [validationMixin],
    validations: {
        product: {
            name: { required, maxLength: maxLength(50) },
            img: { required },
            brandName: { required, maxLength: maxLength(20) },
            category: { required },
            subCategory: { required },
            price: { required, maxLength: minLength(2) },
            rating: { required },
        },
    },
    data: () => ({
        categories: ['fashion', 'mobile', 'laptop'],
        subCategories: ['clothing', 'footware', 'backpacks', 'watches', 'sunglasses', 'jewellwery', 'laggage', 'apple', 'samsung', 'oneplus', 'mi', 'realme', 'oppo', 'vivo', 'asus', 'acer', 'hp', 'dell', 'lenovo', 'lg']
    }),
    computed: {
        nameErrors() {
            const errors = []
            if (!this.$v.product.name.$dirty) return errors
            !this.$v.product.name.maxLength &&
                errors.push('Name must be at most 50 characters long')
            !this.$v.product.name.required && errors.push('Name is required.')
            return errors
        },
        imgErrors() {
            const errors = []
            if (!this.$v.product.img.$dirty) return errors
            !this.$v.product.img.required &&
                errors.push('Image URL is required.')
            return errors
        },
        brandNameErrors() {
            const errors = []
            if (!this.$v.product.brandName.$dirty) return errors
            !this.$v.product.brandName.maxLength &&
                errors.push('Brand Name must be at most 20 characters long')
            !this.$v.product.brandName.required &&
                errors.push('Brand Name is required.')
            return errors
        },
        categoryErrors() {
            const errors = []
            if (!this.$v.product.category.$dirty) return errors
            !this.$v.product.category.required &&
                errors.push('Category Name is required.')
            return errors
        },
        subCategoryErrors() {
            const errors = []
            if (!this.$v.product.subCategory.$dirty) return errors
            !this.$v.product.subCategory.required &&
                errors.push('Sub Category Name is required.')
            return errors
        },
        priceErrors() {
            const errors = []
            if (!this.$v.product.price.$dirty) return errors
            !this.$v.product.price.maxLength &&
                errors.push('Price must be at least 2 degits')
            !this.$v.product.price.required && errors.push('Price is required.')
            return errors
        },
        ratingErrors() {
            const errors = []
            if (!this.$v.product.rating.$dirty) return errors
            !this.$v.product.rating.required &&
                errors.push('Rating is required.')
            return errors
        },
    },

    methods: {
        addProd(product) {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                var newProductRef = db.collection(`products/${product.category}/${product.subCategory}`).doc()
                newProductRef
                    .set({
                        id: newProductRef.id,
                        name: product.name,
                        img: product.img,
                        brandName: product.brandName,
                        category: product.category,
                        subCategory: product.subCategory,
                        price: product.price,
                        rating: product.rating,
                        description: product.description,
                    })
                    .then(() => {
                        console.log('Document successfully written!')
                    })
                    .catch((error) => {
                        console.error('Error writing document: ', error)
                    })
            }
        },
        updateProd(product) {
            db.collection('products')
                .doc(product.id)
                .set({
                    id: product.id,
                    name: product.name,
                    img: product.img,
                    brandName: product.brandName,
                    category: product.category,
                    subCategory: product.subCategory,
                    price: product.price,
                    rating: product.rating,
                    description: product.description,
                })
                .then(() => {
                    console.log('Document successfully written!')
                })
                .catch((error) => {
                    console.error('Error writing document: ', error)
                })
        },
        clear() {
            this.$v.$reset();
            (this.product.name = ''),
            (this.product.img = ''),
            (this.product.brandName = ''),
            (this.product.category = ''),
            (this.product.subCategory = ''),
            (this.product.price = ''),
            (this.product.rating = ''),
            (this.product.description = '')
        },
    },
}
</script>

<style>
</style>