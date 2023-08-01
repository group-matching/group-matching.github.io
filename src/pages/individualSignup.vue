<template>
    <v-container>
        <NavBar />
            <v-toolbar-title class="pb-5 header text-center">
                Individual Sign Up
            </v-toolbar-title>
            <v-col cols="16" justify-content="center">
                <v-card>
                    <div class="pa-5 text-center">
                        <div v-if="selectedIndividualOptions.length == 0" style="font-weight: bold;">
                            No attributes selected.
             f           </div>
                        <div v-if="selectedIndividualOptions.length != 0">
                            <div v-for="(object, index) in selectedIndividualOptions" :key="index">
                                <v-row>
                                    <v-col cols="8">
                                        {{ object.attribute }}
                                    </v-col>
                                    <v-col cols="4">
                                        <v-btn @click="removeIndividualAttribute(object.attribute)" small color="error">
                                            <v-icon color="white">mdi-minus</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </div>
                </v-card>
            </v-col>

    </v-container>
</template>


<script>
    import NavBar from '@/components/NavBar'

    export default{
        name: 'individualSignup',
        components: {
            NavBar
        },
        computed: {
            unselectedIndividualOptions: function () {
                return this.individualsAttributes.filter(attr => attr.isSelected == false)
            },
            selectedIndividualOptions: function () {
                return this.individualsAttributes.filter(attr => attr.isSelected == true)
            }
        },
        data() {
            return {
                individualsAttributes: [
                    {attribute: "First Name", isSelected: false },
                    {attribute: "Last Name", isSelected: false },
                    {attribute: "GPA", isSelected: false },
                    {attribute: "RPI Email", isSelected: false },
                    {attribute: "Phone Number", isSelected: false },
                    {attribute: "Recommender", isSelected: false },
                    {attribute: "Applied", isSelected: false },
                    {attribute: "Compensation", isSelected: false },
                    {attribute: "Intl. Status", isSelected: false },
                    {attribute: "Mentored CSCI Previously", isSelected: false },
                    {attribute: "Mentored Non-CSCI Previously", isSelected: false },
                    {attribute: "Courses Qualified To Mentor", isSelected: false },
                    {attribute: "Availability (Time Slots)", isSelected: false },
                    {attribute: "Course Preference", isSelected: false } 
                ],
                checkFieldBlankRule: [
                    value => {
                        if (value != '') return true
                        return 'Field can not be left blank.'
                    },
                ],
            };
        },
        methods: {
            removeIndividualAttribute(attr) {
                for (var i = 0; i < this.individualsAttributes.length; i++){
                    if (this.individualsAttributes[i].attribute == attr){
                        this.individualsAttributes[i].isSelected = false;
                        break;
                    }
                }
            }
        }
    }
</script>