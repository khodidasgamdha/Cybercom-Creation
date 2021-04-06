<template>
    <div>

        <!-- show form daat -->
        <div>
            <h1>Form</h1>
            <pre>
                {{JSON.stringify(formData, null, 2)}}
            </pre>
        </div>

        <!-- from -->
        <form @submit.prevent="submitFrom">

            <!-- first name -->
            <div>
                <label for="firstName">First Name</label>
                <input 
                    type="text" 
                    id="firstName" 
                    v-model.trim.lazy="formData.firstName">
            </div>

            <!-- last name -->
            <div>
                <label for="lastName">Last Name</label>
                <input 
                    type="text" 
                    id="lastName" 
                    v-model.trim.lazy="formData.lastName">
            </div>

            <!-- phone number -->
            <div>
                <label for="phoneNumber">Phone Number</label>
                <input 
                    type="number" 
                    id="phoneNumber" 
                    v-model.trim.number="formData.phoneNo">
            </div>

            <!-- position -->
            <div>
                <label for="position">Position</label>
                <select id="position"  v-model="formData.position">
                    <option value="" disabled>Select Postion</option>
                    <option v-for="position in positions" :key="position" :value="position">{{ position }}</option>
                </select>
            </div>

            <!-- skill -->
            <div>
                <label for="skill">Skill</label>
                <label :for="skill" v-for="skill in skills" :key="skill">
                    <input         
                        type="checkbox" 
                        :id="skill" 
                        :value="skill" 
                        v-model="formData.skill"> 
                    {{ skill }}
                </label>
            </div>

            <!-- type -->
            <div>
                <label for="type">Type</label>
                <label :for="type" v-for="type in types" :key="type">
                    <input 
                        type="radio" 
                        :id="type" 
                        :value="type" 
                        v-model="formData.type"> 
                    {{ type }}
                </label>
            </div>

            <!-- submit button -->
            <div>
                <button>Submit</button>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                phoneNo: null,
                position: '',
                skill: [],
                type: ''
            },
            positions: ['Web Developer', 'Software Developer'],
            skills: ['HTML', 'CSS', 'JavaScript'],
            types: ['Techniacal', 'Non-technical']
        }
    },
    methods: {
        submitFrom() {
            alert('Form Submited Successfully !!')
            console.log(this.formData);
        }
    }
}
</script>

<style scoped>
div {
    margin: 20px auto;
    text-align: left;
}
#firstName, 
#lastName, 
#position,
#phoneNumber {
    width: 200px;
    height: 20px;
}
label {
    display: flex;
}
</style>