<template>
  <v-container>
    <NavBar />
    <v-toolbar-title class="pb-5 header text-center">
      Individual Sign Up
    </v-toolbar-title>

    
    <br>
    <v-row justify-content="center" align-content="center">
      <v-col cols="15">
        <v-card>
          <div class="subcardHeader text-center">
            Personal Info
          </div>
          <br>
          <v-layout wrap style="margin-left: 20px">
            <v-flex xs12 sm6 v-for="(item, index) in personalInfo" :key="index">
              <div class="d-flex justify-center" style="width: 40%;">
                <v-text-field type="string" :label="personalInfo[index].label" :rules="checkFieldBlankRule" variant="outlined" v-model="personalInfo[index].inputValue "/>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>


    <v-layout column left>
      <div class="subsectionHeader my-2">
        Please select attributes you want to add in:
      </div>
      <v-flex xs12>
        <el-select
          v-model="selectedValues"
          multiple
          filterable
          placeholder="Select"
          size="medium"
          class="custom-select"
          @remove-tag="handleRemoveTag"
        >
          <el-option
            v-for="(item, index) in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @click.native.stop="toggleInput(index)"
          >
          </el-option>
        </el-select>
      </v-flex>
    </v-layout>
    <br>
    <br>
    <v-row justify-content="center" align-content="center">
      <v-col cols="15">
        <v-card>
          <div class="subcardHeader text-center">
            Form
          </div>
          <br>
          <v-layout wrap style="margin-left: 20px">
            <v-flex xs12 sm6 v-for="(item, index) in selectedOptions" :key="index">
              <div v-if="selectedOptions[index].inputType==='number'" class="d-flex justify-center" style="width: 40%;">
                <v-text-field type="number" :label="selectedOptions[index].label" :rules="[checkFieldRule(index,selectedOptions[index])]" variant="outlined" v-model="selectedOptions[index].inputValue "/>
              </div>
              <div v-if="selectedOptions[index].inputType==='string'" class="d-flex justify-center" style="width: 40%;">
                <v-text-field type="text" :label="selectedOptions[index].label" :rules="checkFieldBlankRule" variant="outlined" v-model="selectedOptions[index].inputValue "/>
              </div>
              <div v-if="selectedOptions[index].inputType==='boolean'" class="d-flex justify-center" style="width: 40%;">
                <v-checkbox :label="selectedOptions[index].label" />
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>

    <v-layout column left>
      <div class="subsectionHeader my-2">
        Please select attributes you want to add in:
      </div>
      <v-flex xs12>
        <el-select
          v-model="preferenceSelectedValues"
          multiple
          filterable
          placeholder="Select"
          size="medium"
          class="custom-select"
          @remove-tag="handleRemoveTag_preference"
        >
          <el-option
            v-for="(item, index) in preferences"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @click.native.stop="toggleInput_preference(index)"
          >
          </el-option>
        </el-select>
      </v-flex>
    </v-layout>
    <br>
    <br>
  <v-row justify-content="center" align-content="center">
    <v-col cols="15">
      <v-card>
        <div class="subcardHeader text-center">
          Preferences
        </div>
        <br>
        <v-layout wrap style="margin-left: 20px">
          <v-flex xs12 sm6 v-for="(item, index) in preferenceSelectedOptions" :key="index">
            <div v-if="preferenceSelectedOptions[index].inputType==='number'" class="d-flex justify-center" style="width: 40%;">
              <v-text-field type="number" :label="preferenceSelectedOptions[index].label" :rules="[checkFieldRule(index,preferenceSelectedOptions[index])]" variant="outlined" v-model="preferenceSelectedOptions[index].inputValue"/>
            </div>
            <div v-if="preferenceSelectedOptions[index].inputType==='string'" class="d-flex justify-center" style="width: 40%;">
              <v-text-field type="text" :label="preferenceSelectedOptions[index].label" :rules="checkFieldBlankRule" variant="outlined" v-model="preferenceSelectedOptions[index].inputValue"/>
            </div>
            <div v-if="preferenceSelectedOptions[index].inputType==='boolean'" class="d-flex justify-center" style="width: 40%;">
              <v-checkbox :label="preferenceSelectedOptions[index].label" v-model="preferenceSelectedOptions[index].inputValue"/>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
      <br>
      <br>
      <v-btn :disabled="isButtonDisabled" medium color="primary" style="margin-left: 535px;">Submit</v-btn>
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
          showInput: false,
          inputValue: '',
          inputType: 'string'
        },
        {
          value: 'RIN',
          label: 'RIN',
          showInput: false,
          inputValue: '',
          inputType: 'string'
        },
        {
          value: 'RCS',
          label: 'RCS',
          showInput: false,
          inputValue: '',
          inputType: 'string'
        },
      ],
      options: [{
          value: 'GPA',
          label: 'GPA',
          showInput: false,
          inputValue: '',
          inputType: 'number'
        },
        {
          value: 'AGE',
          label: 'AGE',
          showInput: false,
          inputValue: '',
          inputType: 'number'
        },
        {
          value: 'APPLIED',
          label: 'APPLIED',
          showInput: false,
          inputValue: false,
          inputType: 'boolean'
        },        
      ],
      preferences: [{
          value: 'GPA',
          label: 'GPA2',
          showInput: false,
          inputValue: '',
          inputType: 'number'
        },
        {
          value: 'AGE2',
          label: 'AGE2',
          showInput: false,
          inputValue: '',
          inputType: 'number'
        },
        {
          value: 'APPLIEDD',
          label: 'APPLIEDD',
          showInput: false,
          inputValue: false,
          inputType: 'boolean'
        },        
      ],
      preferenceSelectedValues : [],
      preferenceSelectedOptions: [],        
      selectedValues : [],
      selectedOptions: [],
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
    toggleInput(index) {
      this.options[index].showInput = !this.options[index].showInput;
      this.selectedOptions = this.options.filter(option => this.selectedValues.includes(option.value));
    },
    handleRemoveTag(tag) {
      const indexToRemove = this.options.findIndex(item => item.value === tag);
      this.selectedOptions = this.options.filter(option => this.selectedValues.includes(option.value));
      if (indexToRemove !== -1) {
        this.options[indexToRemove].showInput = false;
        this.options[indexToRemove].inputValue = '';
        this.selectedValues = this.selectedValues.filter(value => value !== tag);
      }
    },
    toggleInput_preference(index) {
      this.preferences[index].showInput = !this.preferences[index].showInput;
      this.preferenceSelectedOptions = this.preferences.filter(preferences => this.preferenceSelectedValues.includes(preferences.value));
    },
    handleRemoveTag_preference(tag) {
      const indexToRemove = this.preferences.findIndex(item => item.value === tag);
      this.preferenceSelectedOptions = this.preferences.filter(preferences => this.preferenceSelectedValues.includes(preferences.value));
      if (indexToRemove !== -1) {
        this.preferences[indexToRemove].showInput = false;
        this.preferences[indexToRemove].inputValue = '';
        this.preferenceSelectedValues = this.preferenceSelectedValues.filter(value => value !== tag);
      }
    }

  },
  computed: {
    isButtonDisabled() {
      const selected = this.options.filter(option => this.selectedValues.includes(option.value));
      const selected_preference = this.preferences.filter(preferences => this.preferenceSelectedValues.includes(preferences.value));
      return selected_preference.length == 0 || selected.length == 0 || selected.some(option => option.inputType !== 'boolean' && !option.inputValue) || selected_preference.some(preferences => preferences.inputType !== 'boolean' && !preferences.inputValue) || this.personalInfo.some(item => item.inputValue.trim() === '');
    },
  },
};
</script>