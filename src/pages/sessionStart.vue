<template>
    <v-container>
      <NavBar />
      <v-btn color="primary" @click="addTextField">Add Text Field</v-btn>
      <v-btn color="error" @click="removeTextField">Remove Text Field</v-btn>
      <v-form>
        <v-container v-for="(textField, index) in textFields" :key="index">
          <v-text-field v-model="textField.text" :label="'Text Field ' + (index + 1)"></v-text-field>
        </v-container>
      </v-form>
    </v-container>
  </template>
  
  <script>
    import NavBar from '@/components/NavBar'

    export default {
      name: 'sessionStart',
      components: {
        NavBar
      },
        data() {
            return {
            textFields: [{ text: "" }]
            };
        },
        methods: {
            addTextField() {
            this.textFields.push({ text: "" });
            },
            removeTextField() {
            this.textFields.pop();
            }
        }
    }

  </script>
  