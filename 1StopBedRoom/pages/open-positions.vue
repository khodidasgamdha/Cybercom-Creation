<template>
    <v-layout>
        <!-- sidebar -->
        <v-flex md3 class="grey lighten-3 pa-5 d-none d-lg-flex d-xl-flex">
            <p>
                <v-icon color="indigo">mdi-chevron-left</v-icon>
                <n-link to="/careers" class="text-decoration-none black--text"
                    >Back to Careers</n-link
                >
            </p>
        </v-flex>
        <v-flex md9 class="ma-10">
            <p id="title">Open Positions</p>

            <!-- select -->
            <v-col cols="4">
                <v-select
                    v-model="selectedPosition"
                    :items="positions"
                    label="Select Departments"
                    width="200"
                    outlined
                    dense
                    @change="selectedJobs"
                ></v-select>
            </v-col>

            <!-- jobs -->
            <div
                v-for="(item, i) in selectedJob.length == 1
                    ? selectedJob
                    : jobs"
                :key="i"
            >
                <p id="title" class="mt-10 mb-0">{{ item.title }}</p>
                <v-divider></v-divider>
                <v-row
                    v-for="(job, i) in item.job"
                    :key="i"
                    class="justify-space-between my-0"
                >
                    <v-col md="auto">
                        <n-link
                            :to="`/job-description/${job.id}`"
                            class="text-decoration-none black--text"
                        >
                            <span>{{ job.name }}</span>
                        </n-link>
                    </v-col>
                    <v-col md="auto">
                        <v-icon color="indigo">mdi-chevron-right</v-icon>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </div>

            <!-- contact us -->
            <p id="title" class="mt-10">Don’t see the right position?</p>
            <p>
                We’re always looking to connect with like minded people. Reach
                out and connect with our team.
            </p>
            <v-btn
                class="rounded-xl orange darken-3 text-capitalize px-10"
                large
                dark
                to="/about-contact-us"
            >
                Contact Us
            </v-btn>

        </v-flex>
    </v-layout>
</template>

<script>
export default {
    layout: 'cms',
    head() {
        return {
            title: 'Open Positions'
        }
    },
    data() {
        return {
            jobs: [
                {
                    title: 'Accounting',
                    job: [{ name: 'Accountant', id: 1 }],
                },
                {
                    title: 'Sales',
                    job: [{ name: 'E-Commerce Salesperson', id: 2 }],
                },
                {
                    title: 'Administrative',
                    job: [{ name: 'Executive Assistant', id: 3 }],
                },
                {
                    title: 'Customer Service',
                    job: [{ name: 'Customer Service Representative', id: 4 }],
                },
                {
                    title: 'Engineering',
                    job: [
                        { name: 'UI/UX Designer', id: 5 },
                        { name: 'Mogento Senior Developer', id: 6 },
                    ],
                },
                {
                    title: 'Human Resources',
                    job: [{ name: 'Talent Acquisition Specialist', id: 7 }],
                },
                {
                    title: 'Project Manager',
                    job: [
                        {
                            name: 'Project Manager / Business Analyst - Experienced in JIRA',
                            id: 8,
                        },
                    ],
                },
                {
                    title: 'Design',
                    job: [{ name: 'Visual Designer', id: 9 }],
                },
            ],
            positions: ['All Departments'],
            selectedPosition: 'All Departments',
            selectedJob: [],
        }
    },
    mounted() {
        this.jobs.forEach((job) => {
            this.positions.push(job.title)
        })
    },
    methods: {
        selectedJobs() {
            this.selectedJob = []
            this.jobs.forEach((job) => {
                this.selectedPosition === job.title &&
                    this.selectedJob.push(job)
            })
        },
    },
}
</script>

<style scoped>
#title {
    font-size: 28px;
    font-weight: 500;
}
p {
    font-size: 1.1rem;
}
</style>