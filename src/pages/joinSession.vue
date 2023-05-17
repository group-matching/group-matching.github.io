<template>
    <v-container>
        <NavBar />
            <v-toolbar-title class="py-10 header text-center">
                Join Session
            </v-toolbar-title>
            <v-row class="py-10" justify-content="center" align-content="center">
                <v-col cols="6">
                    <div class="pb-5 d-flex justify-center">
                        <div class="d-flex justify-center">
                            <h1> Individual Code </h1>
                        </div>
                    </div>
                    <div class="pa-5 d-flex justify-center">
                        <div class="d-flex justify-center" style="width: 50%;">
                            <v-text-field @click="clearOtherField(true)" v-model="individualJoinCode" label="Individual Code" :rules="checkFieldBlankRule" variant="outlined"/>
                        </div>
                    </div>
                    <div class="d-flex justify-center">
                        <router-link to="/individualSignup">
                            <div class="d-flex justify-center" style="width: 50%;">
                                <v-btn @click="joinAsIndividual()" :disabled="individualJoinCode == '' || individualJoinCode == null" medium color="primary">
                                    Join as Individual
                                </v-btn>
                            </div>
                        </router-link>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div class="pb-5 d-flex justify-center">
                        <div class="d-flex justify-center">
                            <h1> Group Code </h1>
                        </div>
                    </div>
                    <div class="pa-5 d-flex justify-center">
                        <div class="d-flex justify-center" style="width: 50%;">
                            <v-text-field @click="clearOtherField(false)" v-model="groupJoinCode" label="Group Code" :rules="checkFieldBlankRule" variant="outlined"/>
                        </div>
                    </div>

                    <div class="d-flex justify-center">
                        <router-link to="/groupSignup">
                            <div class="d-flex justify-center" style="width: 50%;">
                                    <v-btn @click="joinAsGroup()" :disabled="groupJoinCode == '' || groupJoinCode == null" medium color="primary">
                                        Join as Group
                                    </v-btn>
                            </div>
                        </router-link>
                    </div>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
    import NavBar from '@/components/NavBar'

    export default {
        name: 'joinSession',
        computed: {
            
        },
        data() {
            return {
                checkFieldBlankRule: [
                    value => {
                        if (value != '') return true
                        return 'Field can not be left blank.'
                    },
                ],
                groupJoinCode: null,
                individualJoinCode: null
            };
        },
        methods: {
            clearOtherField(currentFieldIsIndividual){
                if (currentFieldIsIndividual)
                    this.groupJoinCode = null
                else
                    this.individualJoinCode = null
            },
            joinAsGroup(){
                // verify code valid
            },
            joinAsIndividual(){
                // verify code valid
            }
        },
        components: {
            NavBar
        }
    }

  </script>
  