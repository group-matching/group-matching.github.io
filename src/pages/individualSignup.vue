<template>
  <v-container>
    <NavBar />
    <v-toolbar-title class="pb-5 header text-center">
      Individual Sign Up
    </v-toolbar-title>

    
    <br>
    <v-row >
      <v-col cols="12">
        <v-card>
          <div class="subcardHeader text-center">
            Personal Info
          </div>
          <br>
          <v-layout wrap style="margin-left: 20%;">
            <v-flex xs12 sm6 v-for="(item, index) in personalInfo" :key="index">
              <div class="d-flex justify-center" style="width: 40%;">
                <v-text-field type="string" :label="personalInfo[index].label" :rules="checkFieldBlankRule" variant="outlined" v-model="personalInfo[index].inputValue "/>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>

    <br>
    <br>
    <v-row justify-content="center" align-content="center">
      <v-col cols="15">
        <v-card>
          <div class="subcardHeader text-center">
            Form
          </div>
          <br>
          <v-layout wrap style="margin-left: 20%">
            <v-flex xs12 sm6 v-for="(item, index) in Form" :key="index">
              <div v-if="Form[index].inputType==='number'" class="d-flex justify-center" style="width: 40%;">
                <v-text-field type="number" :label="Form[index].label" :rules="[checkFieldRule(index,Form[index])]" variant="outlined" v-model="Form[index].inputValue "/>
              </div>
              <div v-if="Form[index].inputType==='string'" class="d-flex justify-center" style="width: 40%;">
                <v-text-field type="text" :label="Form[index].label" :rules="checkFieldBlankRule" variant="outlined" v-model="Form[index].inputValue "/>
              </div>
              <div v-if="Form[index].inputType==='boolean'" class="d-flex justify-center" style="width: 40%;">
                <v-checkbox :label="Form[index].label" v-model="Form[index].inputValue" />
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>

    <br>
    <br>
  <v-row justify-content="center" align-content="center">
    <v-col cols="15">
      <v-card>
        <div class="subcardHeader text-center">
          Preferences
        </div>
        <br>
        <v-layout wrap style="margin-left: 20%">
          <v-flex xs12 sm6 v-for="(item, index) in Preferences" :key="index">
            <div v-if="Preferences[index].inputType==='number'" class="d-flex justify-center" style="width: 40%;">
              <v-text-field type="number" :label="Preferences[index].label" :rules="[checkFieldRule(index,Preferences[index])]" variant="outlined" v-model="Preferences[index].inputValue"/>
            </div>
            <div v-if="Preferences[index].inputType==='string'" class="d-flex justify-center" style="width: 40%;">
              <v-text-field type="text" :label="Preferences[index].label" :rules="checkFieldBlankRule" variant="outlined" v-model="Preferences[index].inputValue"/>
            </div>
            <div v-if="Preferences[index].inputType==='boolean'" class="d-flex justify-center" style="width: 40%;">
              <v-checkbox :label="Preferences[index].label" v-model="Preferences[index].inputValue"/>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
      <br>
      <br>
      <v-btn :disabled="isButtonDisabled" medium color="primary" style="margin-left: 535px;" @click="submitForm">Submit</v-btn>
    </v-col>
  </v-row>
 


  </v-container>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      personalInfo: [{
          value: 'Name',
          label: 'Name',
          inputValue: '',
          inputType: 'string'
        },
        {
          value: 'RIN',
          label: 'RIN',
          inputValue: '',
          inputType: 'string'
        },
        {
          value: 'RCS',
          label: 'RCS',
          inputValue: '',
          inputType: 'string'
        },
      ],
      Form: [{
          value: 'GPA',
          label: 'GPA',
          inputValue: '',
          inputType: 'number'
        },
        {
          value: 'AGE',
          label: 'AGE',
          inputValue: '',
          inputType: 'number'
        },
        {
          value: 'APPLIED',
          label: 'APPLIED',
          inputValue: false,
          inputType: 'boolean'
        },        
      ],
      Preferences: [{
          value: 'GPA',
          label: 'GPA2',
          inputValue: '',
          inputType: 'number'
        },
        {
          value: 'AGE2',
          label: 'AGE2',
          inputValue: '',
          inputType: 'number'
        },
        {
          value: 'APPLIEDD2',
          label: 'APPLIEDD2',
          inputValue: false,
          inputType: 'boolean'
        },        
      ],

      checkFieldBlankRule: [
        
        value => {
          if (value !== '') return true
          return 'can\'t be empty'
        },
      ],
      checkFieldRule(index, target) {
          if (target.inputValue !== '') {
            if (target.inputType === 'number') {
              if (target.value === 'GPA') {
                const gpaValue = target.inputValue
                if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 4) {
                  return 'must be from 0 to 4';
                }
              } else {
                return true;
              }
            }
            return true;
          }
          return 'can\'t be empty';
      },


    };
  },
  methods: {
    submitForm() {
      // Handle the form submission logic here...
      // After submitting, reset the form to its default state
      this.resetForm();
    },
    resetForm() {
      // Reset all input values to their defaults
      this.personalInfo.forEach(item => {
        item.inputValue = '';
      });

      this.Form.forEach(item => {
        if (item.inputType === 'boolean') {
          item.inputValue = false;
        } else {
          item.inputValue = '';
        }
      });

      this.Preferences.forEach(item => {
        if (item.inputType === 'boolean') {
          item.inputValue = false;
        } else {
          item.inputValue = '';
        }
      });
      // window.location.reload();
    },
  },
computed: {
  isButtonDisabled() {
    // Check if any personalInfo input is empty
    if (this.personalInfo.some(item => item.inputValue === '')) {
      return true;
    }

    // Check if any Form input is empty
    if (this.Form.some(item => item.inputValue === '')) {
      return true;
    }

    // Check if any Preferences input is empty
    if (this.Preferences.some(item => item.inputValue === '')) {
      return true;
    }

    // If none of the input fields are empty, enable the button
    return false;
  },
},

};
</script>