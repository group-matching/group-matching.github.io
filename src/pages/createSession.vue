<template>
    <v-container>
        <NavBar />
            <v-toolbar-title class="pb-5 header text-center">
                Create Session
            </v-toolbar-title>
            <v-card class="mx-auto mb-15" max-width="65%">
                    <div class="pa-5 d-flex">
                        <v-btn @click="changeSelectedSessionType('General')" depressed color="primary" :disabled="selectedSessionType == 'General'" class="sessionTypeButtons">
                            General
                        </v-btn>
                        <v-spacer/>
                        <v-btn @click="changeSelectedSessionType('Mentoring')" depressed color="primary" :disabled="selectedSessionType == 'Mentoring'" class="sessionTypeButtons">
                            Mentoring
                        </v-btn>
                        <v-spacer/>
                        <v-btn @click="changeSelectedSessionType('RCOS')" depressed color="primary" :disabled="selectedSessionType == 'RCOS'" class="sessionTypeButtons">
                            RCOS
                        </v-btn>
                        <v-spacer/>
                        <v-btn @click="changeSelectedSessionType('Research Pairing')" depressed color="primary" :disabled="selectedSessionType == 'Research Pairing'" class="sessionTypeButtons">
                            Research Pairing
                        </v-btn>
                    </div>
            </v-card>

            <v-row justify-content="center" align-content="center">
                <v-col cols="8">
                    <v-card style="height:817px">
                        <div class="subcardHeader text-center">
                            Session
                        </div>
                        <v-row justify-content="center" align-content="center">
                            <v-col cols="6" class="text-center">
                                <div class="subsectionHeader">
                                    Session Name
                                </div>
                                <div class="d-flex justify-center">
                                    <div class="d-flex justify-center" style="width: 50%;">
                                        <v-text-field v-model="sessionName" label="Session Name" :rules="checkFieldBlankRule" variant="outlined"/>
                                    </div>
                                </div>
                                <div class="d-flex justify-center">
                                </div>
                                <div class="subsectionHeader">
                                    Sorting Methods
                                </div>
                                <div class="d-flex justify-center">
                                    <div>
                                        <v-checkbox v-for="(checkbox, index) in sortingMethods" v-model="checkbox.isChecked" :key="index" :label="checkbox.method"/>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="6" class="text-center">
                                <div class="subsectionHeader">
                                    Maximum Individuals
                                </div>
                                <div class="d-flex justify-center">
                                    <div class="d-flex justify-center" style="width: 15%;">
                                        <v-text-field type="number" oninput="if(this.value < 1) this.value = 1;" v-model="maxIndividuals" variant="outlined"/>
                                    </div>
                                </div>
                                <div class="pt-1 subsectionHeader">
                                    Maximum Groups
                                </div>
                                <div class="d-flex justify-center">
                                    <div class="d-flex justify-center" style="width: 15%;">
                                        <v-text-field type="number" oninput="if(this.value < 1) this.value = 1;" v-model="maxGroups" variant="outlined"/>
                                    </div>
                                </div>
                                <div class="d-flex justify-center">
                                    <div class="">
                                        <v-checkbox v-model="limitGroupCapacity" label="Limit Group Capacity"/>
                                    </div>
                                </div>
                                <div class="subsectionHeader">
                                    Individual Code
                                </div>
                                <div class="d-flex justify-center">
                                    <div class="d-flex justify-center" style="width: 50%;">
                                        <v-text-field v-model="individualCode" label="Individual Code" variant="outlined"/>
                                    </div>
                                </div>
                                <div class="subsectionHeader">
                                    Group Code
                                </div>
                                <div class="d-flex justify-center">
                                    <div class="d-flex justify-center" style="width: 50%;">
                                        <v-text-field v-model="groupCode" label="Group Code" variant="outlined"/>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card class="mb-10">
                        <div class="subcardHeader text-center">
                            Groups
                        </div>
                        <div class="pa-5 text-center">
                            <div v-if="selectedGroupOptions.length == 0" style="font-weight: bold;">
                                No attributes selected.
                            </div>
                            <div v-if="selectedGroupOptions.length != 0">
                                <div v-for="(object, index) in selectedGroupOptions" :key="index">
                                    <v-row>
                                        <v-col cols="8">
                                            {{ object.attribute }}
                                        </v-col>
                                        <v-col cols="4">
                                            <v-btn @click="removeGroupAttribute(object.attribute)" small color="error">
                                                <v-icon color="white">mdi-minus</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </div>
                        <v-row justify-content="center" align-content="center" class="pa-2">
                            <div class="pa-5 d-flex justify-center">
                                <v-col cols="10">
                                    <div class="d-flex justify-center">
                                        <div>
                                            <v-select v-model="groupsDropdown_currentlySelected" :items="unselectedGroupOptions" :disabled="unselectedGroupOptions.length == 0" item-text="attribute" label="Select Attribute" />
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="2">
                                    <div class="pt-5 pb-5 d-flex justify-center">
                                        <v-btn @click="addGroupAttribute()" :disabled="unselectedGroupOptions.length == 0 || groupsDropdown_currentlySelected == null" color="primary">
                                            <v-icon size="3vh" color="white">mdi-plus</v-icon>
                                        </v-btn>
                                    </div>
                                </v-col>
                            </div>
                    <v-row justify-content="flex-end">
                        <v-col style="margin-left: 10%; margin-bottom: 10%;">
                            <v-btn @click="dialog = true" color="primary">Add Attribute</v-btn>
                        </v-col>
                    </v-row>

                        <!-- Dialog for adding data -->
                        <v-dialog v-model="dialog" max-width="500">
                        <v-card>
                            <div class="subcardHeader text-center">
                            Add Attribute
                            </div>
                            <v-card-text>
                            <!-- Your form content -->
                            <v-text-field v-model="newGroupAttribute" label="New Attribute" />
                            <!-- <v-select v-model="newGroupAttributeType" :items="['int', 'boolean', 'string']" label="Type" /> -->
                            <v-select v-model="newGroupAttributeType" :items="['int', 'boolean', 'string']" label="Type" @change="checkForIntType" />
                            <!-- Fields for minValue, maxValue, and step -->
                                    <v-row v-if="newGroupAttributeType === 'int'">
                                    <v-col cols="4">
                                        <v-text-field v-model="minValue" label="Min Value" type="number" />
                                    </v-col>
                                    <v-col cols="4">
                                        <v-text-field v-model="maxValue" label="Max Value" type="number" />
                                    </v-col>
                                    <v-col cols="4">
                                        <v-text-field v-model="step" label="Step" type="number" />
                                    </v-col>
                                    </v-row>
                            </v-card-text>
                            <v-card-actions>
                            <v-btn @click="addNewGroupAttribute(newGroupAttribute)" :disabled="this.newGroupAttribute=='' || this.newGroupAttributeType==''" color="primary">
                                <v-icon size="3vh" color="white">mdi-plus</v-icon>
                            </v-btn>
                            </v-card-actions>
                            <!-- List of selected group attributes -->
                            <v-list >
                            <v-list-item-group v-if="userDefineGroupAttributes.length != 0">
                                <v-list-item v-for="(groupAttribute, index) in userDefineGroupAttributes" :key="index">
                                <v-list-item-content>
                                    <v-list-item-title>{{ groupAttribute.attribute }}</v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn @click="removeUserDefineGroupAttribute(groupAttribute)" color="error" small>
                                    <v-icon>mdi-minus</v-icon>
                                    </v-btn>
                                </v-list-item-action>
                                </v-list-item>
                            </v-list-item-group>
                            <v-alert v-else>No group attributes </v-alert>
                            </v-list>
                        </v-card>
                        </v-dialog>
                        
                            <!-- <div class="pa-5 d-flex justify-center">
                                <v-col cols="5">
                                    <div class="d-flex justify-center">
                                        <div >
                                            <v-text-field v-model="newGroupAttribute" label="New Attribute" />
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="5">
                                    <div class="d-flex justify-center">
                                        <v-select v-model="newGroupAttributeType" :items="['int', 'boolean', 'string']" label="Type" />
                                    </div>
                                </v-col>
                                <v-col cols="2">
                                    <div class="pt-5 pb-5 d-flex justify-center">
                                        <v-btn @click="addNewGroupAttribute(newGroupAttribute)" :disabled="this.newGroupAttribute=='' || this.newGroupAttributeType==''" color="primary">
                                            <v-icon size="3vh" color="white">mdi-plus</v-icon>
                                        </v-btn>
                                    </div>
                                </v-col>
                            </div> -->
                        </v-row>

                    </v-card>
                    <v-card class="mb-10">
                        <div class="subcardHeader text-center">
                            Individuals
                        </div>
                        <div class="pa-5 text-center">
                            <div v-if="selectedIndividualOptions.length == 0" style="font-weight: bold;">
                                No attributes selected.
                            </div>
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
                        
                        <v-row justify-content="center" align-content="center" class="pa-2">
                                <div class="pa-5 d-flex justify-center">
                                    <v-col cols="10">
                                        <div class="d-flex justify-center">
                                            <div>
                                                <v-select v-model="individualsDropdown_currentlySelected" :items="unselectedIndividualOptions" item-text="attribute" :disabled="unselectedIndividualOptions.length == 0" label="Select Attribute" />
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col cols="2">
                                        <div class="pt-5 pb-5 d-flex justify-center">
                                            <v-btn @click="addIndividualAttribute()" :disabled="unselectedIndividualOptions.length == 0 || individualsDropdown_currentlySelected == null" color="primary">
                                                <v-icon size="3vh" color="white">mdi-plus</v-icon>
                                            </v-btn>
                                        </div>
                                    </v-col>
                                </div>
                                <v-row justify-content="flex-end">
                                    <v-col style="margin-left: 10%; margin-bottom: 10%;">
                                        <v-btn @click="dialog_individual = true" color="primary">Add Attribute</v-btn>
                                    </v-col>
                                </v-row>
<!-- Dialog for adding data -->
                        <v-dialog v-model="dialog_individual" max-width="500">
                        <v-card>
                            <div class="subcardHeader text-center">
                            Add Attribute
                            </div>
                            <v-card-text>
                            <!-- Your form content -->
                            <v-text-field v-model="newIndividualAttribute" label="New Attribute" />
                            <v-select v-model="newIndividualAttributeType" :items="['int', 'boolean', 'string']" label="Type" @change="checkForIntType" />
                            <!-- Fields for minValue, maxValue, and step -->
                                    <v-row v-if="newIndividualAttributeType === 'int'">
                                    <v-col cols="4">
                                        <v-text-field v-model="minValue_invd" label="Min Value" type="number" />
                                    </v-col>
                                    <v-col cols="4">
                                        <v-text-field v-model="maxValue" label="Max Value" type="number" />
                                    </v-col>
                                    <v-col cols="4">
                                        <v-text-field v-model="step" label="Step" type="number" />
                                    </v-col>
                                    </v-row>
                            </v-card-text>
                            <v-card-actions>
                            <v-btn @click="addNewIndividualAttribute(newIndividualAttribute)" :disabled="this.newIndividualAttribute=='' || this.newIndividualAttributeType==''" color="primary">
                                <v-icon size="3vh" color="white">mdi-plus</v-icon>
                            </v-btn>
                            </v-card-actions>
                            <!-- List of selected group attributes -->
                            <v-list >
                            <v-list-item-group v-if="userDefineIndividualAttributes.length != 0">
                                <v-list-item v-for="(individualAttribute, index) in userDefineIndividualAttributes" :key="index">
                                <v-list-item-content>
                                    <v-list-item-title>{{ individualAttribute.attribute }}</v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn @click="removeIndividualAttribute(individualAttribute)" color="error" small>
                                    <v-icon>mdi-minus</v-icon>
                                    </v-btn>
                                </v-list-item-action>
                                </v-list-item>
                            </v-list-item-group>
                            <v-alert v-else>No group attributes </v-alert>
                            </v-list>
                        </v-card>
                        </v-dialog>
                            <!-- <div class="pa-5 d-flex justify-center">
                                <v-col cols="5">
                                    <div class="d-flex justify-center">
                                        <div >
                                            <v-text-field v-model="newIndividualAttribute" label="New Attribute" />
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="5">
                                    <div class="d-flex justify-center">
                                        <v-select v-model="newIndividualAttributeType" :items="['int', 'boolean', 'string']" label="Type" />
                                    </div>
                                </v-col>
                                <v-col cols="2">
                                    <div class="pt-5 pb-5 d-flex justify-center">
                                        <v-btn @click="addNewIndividualAttribute(newIndividualAttribute)" :disabled="this.newIndividualAttribute=='' || this.newIndividualAttributeType==''" color="primary">
                                            <v-icon size="3vh" color="white">mdi-plus</v-icon>
                                        </v-btn>
                                    </div>
                                </v-col>
                            </div> -->
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            
            <div class="d-flex justify-center">
                <v-btn @click="createNewSession()" depressed :disabled="selectedGroupOptions.length == 0 || selectedIndividualOptions.length == 0 || sessionName.length == 0 || sessionName.length == null || this.individualCode == '' || this.groupCode == '' " color="primary" class="ma-10">
                    Create Session
                </v-btn>
            </div>
    </v-container>
</template>
  
<style>
  .header {
    font-size: calc(4vh + 3vw);
    font-weight: bold;
  }

  .methodCheckbox {
    font-weight: 500;      /*not working*/
    align-content: center; /*not working either*/
  }

  .sessionTypeButtons {
    margin-left: calc(1vh + 1vw);
    margin-right: calc(1vh + 1vw);
  }

  .subcardHeader {
    font-size: calc(2vh + 1vw);
    color: white;
    background-color: grey;
    font-weight: bold;
  }
  
  .subsectionHeader{
    font-size: calc(1.25vh + 0.625vw);
    font-weight: 500;
    padding-top: calc(2vh + 1vw);
  }

  </style>
  
  <script>
    import NavBar from '@/components/NavBar'

    export default {
        name: 'createSession',
        computed: {
            unselectedGroupOptions: function () {
                return this.groupsAttributes.filter(attr => attr.isSelected == false)
            },
            selectedGroupOptions: function () {
                return this.groupsAttributes.filter(attr => attr.isSelected == true)
            },
            unselectedIndividualOptions: function () {
                return this.individualsAttributes.filter(attr => attr.isSelected == false)
            },
            selectedIndividualOptions: function () {
                return this.individualsAttributes.filter(attr => attr.isSelected == true)
            }
        },
        data() {
            return {
                checkFieldBlankRule: [
                    value => {
                        if (value) return true
                        return 'Field can not be left blank.'
                    },
                ],
                // =============================
                selectedSessionType: "General",
                sessionName: null,
                sortingMethods: [
                    { method: 'Method 1', isChecked: false },
                    { method: 'Method 2', isChecked: false },
                    { method: 'Method 3', isChecked: false }
                ],
                dialog: false,
                dialog_individual: false,
                newGroupAttribute: '',
                newGroupAttributeType: '',
                newIndividualAttribute: '',
                newIndividualAttributeType: '',
                maxIndividuals: 1,
                maxGroups: 1,
                limitGroupCapacity: false,
                individualCode: this.generateIndividualCode(),
                groupCode: this.generateGroupCode(),
                groupsDropdown_currentlySelected: null,
                individualsDropdown_currentlySelected: null,
                groupsAttributes: [
                    {attribute: "Name", isSelected: false },
                    {attribute: "Is Open", isSelected: false },
                    {attribute: "Capacity", isSelected: false }
                ],
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
                userDefineGroupAttributes: [],
                userDefineIndividualAttributes: [],
            };
        },
        methods: {
            addGroupAttribute() {
                for (var i = 0; i < this.groupsAttributes.length; i++){
                    if (this.groupsAttributes[i].attribute == this.groupsDropdown_currentlySelected){
                        this.groupsAttributes[i].isSelected = true;
                        break;
                    }
                }
                this.groupsDropdown_currentlySelected = null;
            },
            addIndividualAttribute() {
                for (var i = 0; i < this.individualsAttributes.length; i++){
                    if (this.individualsAttributes[i].attribute == this.individualsDropdown_currentlySelected){
                        this.individualsAttributes[i].isSelected = true;
                        break;
                    }
                }
                this.individualsDropdown_currentlySelected = null;
            },
            addNewGroupAttribute(newAttribute){
                const NewGroupAttribute = {
                attribute: newAttribute,
                isSelected: false,            
                };
                this.groupsAttributes.push(NewGroupAttribute)
                this.userDefineGroupAttributes.push(NewGroupAttribute)
                this.newGroupAttribute = ''
                this.newGroupAttributeType = ''
            },
            addNewIndividualAttribute(newAttribute){
                const NewIndividualAttribute = {
                attribute: newAttribute,
                isSelected: false,            
                };
                this.individualsAttributes.push(NewIndividualAttribute)
                this.userDefineIndividualAttributes.push(NewIndividualAttribute)
                this.newIndividualAttribute = ''
                this.newIndividualAttributeType = ''
                
            },
            changeSelectedSessionType(newSessionType) {
                this.selectedSessionType = newSessionType;
            },
            createNewSession(){
                var jsonData = {};
                jsonData["sessionType"] = this.selectedSessionType;
                jsonData["sessionName"] = this.sessionName;
                jsonData["sortingMethods"] = [];
                for ( let i = 0; i < this.sortingMethods.length; i++ ) {
                    if (this.sortingMethods[i].isChecked)
                        jsonData["sortingMethods"].push(this.sortingMethods[i].method)
                }
                jsonData["maxIndividuals"] = this.maxIndividuals;
                jsonData["maxGroups"] = this.maxGroups;
                jsonData["limitGroupCapacity"] = this.limitGroupCapacity;
                jsonData["individualCode"] = this.individualCode;
                jsonData["groupCode"] = this.groupCode;
                jsonData["groupsAttributes"] = [];
                jsonData["individualsAttributes"] = [];
                for ( let i = 0; i < this.groupsAttributes.length; i++ ) {
                    if (this.groupsAttributes[i].isSelected)
                        jsonData["groupsAttributes"].push(this.groupsAttributes[i].attribute)
                }
                for ( let i = 0; i < this.individualsAttributes.length; i++ ) {
                    if (this.individualsAttributes[i].isSelected)
                        jsonData["individualsAttributes"].push(this.individualsAttributes[i].attribute)
                }
                
                // insert JS code for sending JSON data into Django Backend
                
            },
            generateGroupCode(){
                // REPLACE with JS code to call for an available code from backend

                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

                let result = ' ';
                const charactersLength = characters.length;
                for ( let i = 0; i < 10; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }

                return result;
            },
            generateIndividualCode(){
                // REPLACE with JS code to call for an available code from backend

                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

                let result = ' ';
                const charactersLength = characters.length;
                for ( let i = 0; i < 10; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }

                return result;
            },
            removeGroupAttribute(attr) {
                for (var i = 0; i < this.groupsAttributes.length; i++){
                    if (this.groupsAttributes[i].attribute == attr){
                        this.groupsAttributes[i].isSelected = false;
                        break;
                    }
                }
            },
            removeIndividualAttribute(attr) {
                for (var i = 0; i < this.individualsAttributes.length; i++){
                    if (this.individualsAttributes[i].attribute == attr){
                        this.individualsAttributes[i].isSelected = false;
                        break;
                    }
                }
            },
            removeUserDefineGroupAttribute(attributeToRemove) {
            const index = this.userDefineGroupAttributes.findIndex(attr => attr.attribute === attributeToRemove.attribute);
            if (index !== -1) {
                this.userDefineGroupAttributes.splice(index, 1);
            }
            const index2 = this.groupsAttributes.findIndex(attr => attr.attribute === attributeToRemove.attribute);
            if (index !== -1) {
                this.groupsAttributes.splice(index2, 1);
            }
            },

            debug(){
                console.log(this.limitGroupCapacity);
            }
            
        },
        components: {
            NavBar
        }
    }

  </script>
  