<template>
    <v-container>
        <NavBar />
            <v-toolbar-title class="pb-5 header text-center">
                Group Sign Up
            </v-toolbar-title>
            <v-row justify-content="center" align-content="center" >
                <v-col cols="12">
                    <v-card>
                        <v-row justify-content="center" align-content="center">
                            <v-col md="6" class="text-center">
                                <div class="subsectionHeader"  >
                                     value1
                                </div>
                                <div class="d-flex justify-center">
                                    <div class="flex-start" style="width: 50%;">
                                        <v-text-field v-model="value1" label="value1" :rules="checkFieldBlankRule" variant="outlined"/>
                                    </div>
                                </div>
                                <div class="d-flex justify-center">
                                </div>
                                <div class="subsectionHeader">
                                    value2
                                </div>
                                <div class="d-flex justify-center">
                                    <div class="d-flex justify-center" style="width: 50%;">
                                        <v-text-field v-model="value2" label="value2" :rules="checkFieldBlankRule" variant="outlined"/>
                                    </div>
                                </div>
                                <div class="d-flex justify-center">
                                </div>

                                <div class="subsectionHeader">
                                    value3
                                </div>
                                <div class="d-flex justify-center">
                                    <div class="flex-start" style="width: 50%;">
                                        <v-text-field v-model="value3" label="value3" :rules="checkFieldBlankRule" variant="outlined"/>
                                    </div>
                                </div>
                            </v-col>
                            <v-col md="6" class="text-center">
                                <div class="subsectionHeader"  >
                                     value4
                                </div>
                                <div class="d-flex justify-center">
                                    <div class="flex-start" style="width: 50%;">
                                        <v-text-field v-model="value4" label="value4" :rules="checkFieldBlankRule" variant="outlined"/>
                                    </div>
                                </div>
                                <div class="d-flex justify-center">
                                </div>
                                <div class="subsectionHeader">
                                    value5
                                </div>
                                <div class="d-flex justify-center">
                                    <div class="d-flex justify-center" style="width: 50%;">
                                        <v-text-field v-model="value5" label="value5" :rules="checkFieldBlankRule" variant="outlined"/>
                                    </div>
                                </div>
                                <div class="d-flex justify-center">
                                </div>

                                <div class="subsectionHeader">
                                    value6
                                </div>
                                <div class="d-flex justify-center">
                                    <div class="flex-start" style="width: 50%;">
                                        <v-text-field v-model="value6" label="value6" :rules="checkFieldBlankRule" variant="outlined"/>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                        <div class="d-flex justify-center">
                            <v-btn :disabled=" value1 == ''|| value2 == ''||value3 == ''||value4 == ''||value5 == ''||value6 == '' " color="primary">
                                Sign Up
                            </v-btn>
                        </div>
                    </v-card>

                </v-col>
            </v-row>
    </v-container>
</template>


<script>
    import NavBar from '@/components/NavBar'

    export default{
        name: 'groupSignup',
        components: {
            NavBar
        },
        data() {
            return {
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                checkFieldBlankRule: [
                    value => {
                        if (value != '') return true
                        return 'Field can not be left blank.'
                    },
                ],
            };
        },
        methods: {
        }
    }
</script>