<template>
    <div class="policies">
        <!-- links -->
        <v-breadcrumbs 
            :items="links" 
            class="pa-0" 
        ></v-breadcrumbs>

        <v-row>
            <!-- sidebar - left -->
            <v-col cols="auto" class="mt-5" v-if="policy.design.layout === '2 columns with left bar'">
                <Sidebar />
            </v-col>

            <!-- policy -->
            <v-col>
                <Policies :policy="policy" />
            </v-col>

            <!-- sidebar - right -->
            <v-col cols="auto" class="mt-5" v-if="policy.design.layout === '2 columns with right bar'">
                <Sidebar />
            </v-col>
        </v-row>
        
    </div>
</template>

<script>
import Policies from '~/components/Policy/Policies'
import Sidebar from '~/components/Policy/Sidebar'
import gql from 'graphql-tag'

const POLICY = gql`
    query POLICY($url: String!) {
        policy(url: $url) {
            pageInfo {
                pageTitle
                url
                status
            }
            content {
                contentHeading
                contentDetails
            }
            design {
                layout
                layout_update_xml {
                    reference {
                        action {
                            type
                            name
                        }
                        block {
                            action {
                                block_id
                            }
                        }
                    }
                }
            }
            metaData {
                keywords
                description
            }
        }
    }
`

export default {
    components: {
        Policies,
        Sidebar
    },
    head() {
        return {
            title: this.policy.pageInfo.pageTitle,
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.policy
                        ? this.policy.metaData.description
                        : '',
                },
            ],
        }
    },
    scrollToTop: true,
    data() {
        return {
            links: [
                {
                    text: 'Home',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Return Policy | 1StopBedrooms',
                    disabled: false,
                    href: '/policy/return-policy',
                },
            ],
        }
    },
    async asyncData({ app, params }) {
        const client = app.apolloProvider.defaultClient
        const url = params.policy

        const res = await client.query({
            query: POLICY,
            variables: {
                url,
            },
        })
        const policy = res.data.policy
        return {
            policy
        }
    },
}
</script>

<style scoped>
.policies {
    margin: auto;
    max-width: 1300px;
}
</style>
