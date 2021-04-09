<template>
    <div>
        <!-- binding -->
        <h2>{{ name }}</h2>
        <h2 v-text="text"></h2>
        <hr />

        <!-- id bind -->
        <h2 :id="headingId">Bind Id</h2>
        <hr />

        <!-- class bind -->
        <h2 :class="isDisabled && 'italic'">Bind Class</h2>
        <h2 :class="[isDisabled && 'italic', 'grn']">Array Bind Class</h2>
        <h2
            :class="{
                italic: isDisabled,
                grn: !isDisabled,
            }"
        >
        Object Bind Class
        </h2>
        <hr />

        <!-- style bind -->
        <h2
            :style="{
                color: highlightColor,
                fontSize: headerSize + 'px',
            }"
        >
        Style Bind
        </h2>
        <h2 :style="objectStyle">Object Style Bind</h2>
        <h2 :style="[objectStyle, bold]">Array Style Bind</h2>
        <hr />

        <!-- disabled -->
        <button :disabled="isDisabled">Disabled</button>
        <hr />

        <!-- conditions -->
        <h2 v-if="num === 0">Num is Zero</h2>
        <h2 v-else-if="num < 0">Num is Negative</h2>
        <h2 v-else-if="num > 0">Num is Positive</h2>
        <h2 v-else>Num is Num</h2>

        <template v-if="num === 0">
          <h2>Amar</h2>
          <h2>Akabar</h2>
          <h2>Anthany</h2>
        </template>

        <!-- directives -->
        <h2 v-show="num === 0">Using v-show</h2>
        <h2 v-if="num === 0">Using v-if</h2>
        <hr />

        <!-- loop -->
        <li v-for="name in nm" :key="name">{{ name }}</li>
        <li v-for="name in fullName" :key="name.first">
            {{ name.first }} {{ name.last }}
        </li>
        <div v-for="name in actor" :key="name.id">
            <h2>{{ name.name }}</h2>
            <li v-for="movie in name.movies" :key="movie">{{ movie }}</li>
        </div>
        <h3 v-for="(value, key, index) in info" :key="index">
            {{ index }} {{ key }} {{ value }}
        </h3>
        <hr />

        <!-- add & remove students -->
        <template>
            <h1><input type="text" v-model="student" /></h1>
            <button @click="add">Add Student</button>
            <li v-for="name in students" :key="name.index">
                {{ name }}
                <button @click="remove">Remove</button>
            </li>
        </template>

        <!-- click event -->
        <h2>{{ count }}</h2>
        <button @click="increment">Increment Count</button>
        <hr />

        <!-- v-once v-pre -->
        <h1 v-once>{{ on }}</h1>
        <h1 v-pre>{{ pre }}</h1>
        <button @click="on = 'v-once'">Click</button><hr>

        <!-- computed property vs method -->
        <h1>{{callMethod()}}</h1>
        <h1>{{callComputed}}</h1><hr>

        <!-- getters & setters -->
        <h1>{{ fullNm }}</h1>
        <button @click="changeName">Change Name</button><hr>

        <!-- watchers -->
        <h1>Volume Tracker</h1>
        <h3>Currunt Volume : {{ volume }}</h3>
        <div>
            <button @click="volume += 2">Increase</button>
            <button @click="volume -= 2">Decrease</button>
        </div><hr>

        <!-- raw html -->
        <h2 v-html="html"></h2>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            name: "Interpolation",
            text: "V-text",
            headingId: "heading",
            isDisabled: true,
            html: "<b>HTML Binding</b>",
            highlightColor: "yellow",
            headerSize: "26",
            objectStyle: {
              color: "yellow",
              fontSize: "26px",
            },
            bold: {
              fontWeight: "bold",
            },
            num: 0,
            nm: ["Helo", "Mini"],
            fullName: [
              { first: "Hello", last: "Mini" },
              { first: "Hii", last: "World" },
            ],
            actor: [
              { name: "Kartik", movies: ["Abc", "def"] },
              { name: "Hritik", movies: ["War", "Dhoom3"] },
            ],
            info: {
              name: "Abcd",
              age: 20,
            },
            count: 0,
            student: "",
            students: [],
            on: 'V-once',
            pre: 'v-pre',
            a: 'Virat',
            b: 'Kohli',
            volume: 0
        };
    },
    methods: {
        increment() {
            this.count++;
        },
        add() {
            this.students.push(this.student);
        },
        remove() {
            this.students.splice(this.student, 1);
        },
        callMethod() {
            console.log('Method Call');
        },
        changeName() {
            this.fullNm = 'MS Dhoni'
        }
    },
    computed: {
        callComputed() {
            console.log('Computed Property Call');
            return true;
        },

        // getter & setters
        fullNm: {
            get() {
                return `${this.a} ${this.b}`;
            },
            set(value) {
                const name = value.split(' ');
                this.a = name[0]
                this.b = name[1]
            }
        }
    },
    watch: {
        volume(newValue, oldValue) {
            if(newValue > oldValue && newValue === 16) {
                alert('Higher Volumn Danger for Ear !!');
            }
        }
    }
};
</script>

<style scoped>
h2,
button {
    margin-bottom: 30px;
}
.italic {
    font-style: italic;
}
.grn {
    color: green;
}
</style>