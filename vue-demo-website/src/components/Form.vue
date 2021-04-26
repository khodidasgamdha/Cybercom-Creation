<template>
    <v-main>

        <!-- heading -->
        <h1 class="display-2 text-center" id="contact">
            {{ title }}
        </h1>

        <!-- form -->
        <form ref="form" class="mb-5">
            <v-container md="4">
                <v-row>
                    <v-col cols="12" sm="12" md="6">

                        <!-- name -->
                        <v-text-field
                            v-model="formData['name']"
                            :error-messages="nameErrors"
                            :counter="10"
                            label="Name"
                            required
                            filled
                            @input="$v.formData.name.$touch()"
                            @blur="$v.formData.name.$touch()"
                        ></v-text-field>

                        <!-- email -->
                        <v-text-field
                            v-model="formData['email']"
                            :error-messages="emailErrors"
                            label="E-mail"
                            required
                            filled
                            @input="$v.formData.email.$touch()"
                            @blur="$v.formData.email.$touch()"
                        ></v-text-field>

                        <!-- subject -->
                        <v-text-field
                            v-model="formData['subject']"
                            :error-messages="subjectErrors"
                            :counter="20"
                            label="Subject"
                            required
                            filled
                            @input="$v.formData.subject.$touch()"
                            @blur="$v.formData.subject.$touch()"
                        ></v-text-field>

                        <!-- message -->
                        <v-textarea
                            v-model="formData['message']"
                            :error-messages="messageErrors"
                            label="Message"
                            hint="Hint text"
                            required
                            filled
                            @input="$v.formData.message.$touch()"
                            @blur="$v.formData.message.$touch()"
                        ></v-textarea>

                        <!-- checkbox -->
                        <v-checkbox
                            v-model="formData['checkbox']"
                            :error-messages="checkboxErrors"
                            label="Do you agree?"
                            required
                            @change="$v.formData.checkbox.$touch()"
                            @blur="$v.formData.checkbox.$touch()"
                        ></v-checkbox>

                        <!-- submit & reset -->
                        <v-btn class="mr-4" @click="submit" color="success">
                            submit
                        </v-btn>
                        <v-btn @click="clear" color="warning"> clear </v-btn>
                    </v-col>

                    <!-- image -->
                    <v-col md="6" class="d-none d-md-block contact-box-img">
                        <img
                            :src="require('@/assets/contact.png')"
                            alt="query-logo" />
                    </v-col>

                </v-row>
            </v-container>
        </form>
        
    </v-main>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
    name: "Form",
    mixins: [validationMixin],
    props: {
        title: {
            type: String,
            default: "Connect With Us !!",
        },
    },
    validations: {
        formData: {
            name: { required, maxLength: maxLength(10) },
            email: { required, email },
            subject: { required, maxLength: maxLength(20) },
            message: { required },
            checkbox: {
                checked(val) {
                    return val;
                },
            },
        },
    },
    data() {
        return {
            formData: {
                name: "",
                email: "",
                subject: "",
                message: "",
                checkbox: false,
            },
            query: [],
        };
    },
    computed: {
        checkboxErrors() {
            const errors = [];
            if (!this.$v.formData.checkbox.$dirty) return errors;
            !this.$v.formData.checkbox.checked &&
                errors.push("You must agree to continue!");
            return errors;
        },
        nameErrors() {
            const errors = [];
            if (!this.$v.formData.name.$dirty) return errors;
            !this.$v.formData.name.maxLength &&
                errors.push("Name must be at most 10 characters long");
            !this.$v.formData.name.required && errors.push("Name is required.");
            return errors;
        },
        messageErrors() {
            const errors = [];
            if (!this.$v.formData.message.$dirty) return errors;
            !this.$v.formData.message.required && errors.push("Message is required.");
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.formData.email.$dirty) return errors;
            !this.$v.formData.email.email &&
                errors.push("Must be valid e-mail");
            !this.$v.formData.email.required &&
                errors.push("E-mail is required");
            return errors;
        },
        subjectErrors() {
            const errors = [];
            if (!this.$v.formData.subject.$dirty) return errors;
            !this.$v.formData.subject.maxLength &&
                errors.push("Subject must be at most 20 characters long");
            !this.$v .formData.subject.required &&
                errors.push("Subject is required.");
            return errors;
        },
    },
    methods: {
        submit() {
            this.$v.formData.$touch();
            this.query = JSON.parse(localStorage.getItem("query")) || [];
            this.query.push(this.formData);
            localStorage.setItem("query", JSON.stringify(this.query));
            this.clear();
        },
        clear() {
            this.$refs.form.reset();
        },
    },
};
</script>

<style>
#contact {
    margin: 50px auto;
}
.contact-box-img img {
    width: 350px;
    height: 340px;
    margin: 80px auto auto 100px;
}
</style>