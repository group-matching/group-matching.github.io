<template>
  <v-container>
    <NavBar />
    <v-toolbar-title class="pb-5 header text-center">
      Group Sign Up
    </v-toolbar-title>
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
                <v-text-field type="number" :label="selectedOptions[index].label" :rules="checkFieldBlankRule" variant="outlined" v-model="selectedOptions[index].inputValue "/>
              </div>
              <div v-if="selectedOptions[index].inputType==='string'" class="d-flex justify-center" style="width: 40%;">
                <v-text-field type="text" :label="selectedOptions[index].label" :rules="checkFieldBlankRule" variant="outlined" v-model="selectedOptions[index].inputValue "/>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
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
      options: [{
          value: 'GPA',
          label: 'GPA',
          showInput: false,
          inputValue: '',
          inputType: 'number'
        },
        {
          value: 'NAME',
          label: 'NAME',
          showInput: false,
          inputValue: '',
          inputType: 'string'
        },
        {
          value: 'AGE',
          label: 'AGE',
          showInput: false,
          inputValue: '',
          inputType: 'number'
        },
        {
          value: 'Gender',
          label: 'Gender',
          showInput: false,
          inputValue: '',
          inputType: 'string'
        },
        {
          value: 'Major',
          label: 'Major',
          showInput: false,
          inputValue: '',
          inputType: 'string'
        }
      ],
      selectedValues : [],
      selectedOptions: [],
      checkFieldBlankRule: [
        value => {
          if (value !== '') return true
          return ' cant be empty'
        },
      ],
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

  },
  computed: {
    isButtonDisabled() {
      const selected = this.options.filter(option => this.selectedValues.includes(option.value));
      return selected.length == 0 || selected.some(option => !option.inputValue);
    },
  },
};
</script>