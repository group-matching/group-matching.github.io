<template>
    <v-container>
        <NavBar />
            
        <div>
            <router-link to="/sessionDetails">Home</router-link>
            <router-link to="/about">Session Status</router-link>
            <router-view></router-view>
        </div>

        <v-row class="text-center mt-16">
        <v-textarea v-model='JSONdata' filled outlined height="500"/>
        </v-row>
        <v-row class="text-center justify-center mt-10">
        <v-btn color="primary" @click='getJSONdata(JSONdata)' elevation="2"> COMPUTE </v-btn>
        </v-row>

        <v-row class="JSONdata mt-10">
        {{/*

        for (let i = 0; i < Object.keys(JSONdata).length; i++) {
            var value = data[key];
            // your code here...
        }


        */}}
        </v-row>
    </v-container>
  </template>
  
  <script>
    import NavBar from '@/components/NavBar'

    export default {
      name: 'sessionDetails',
      components: {
        NavBar
      },
      data: () => ({
        isMentor: false,
        ecosystem: [
          {
            text: 'vuetify-loader',
            href: 'https://github.com/vuetifyjs/vuetify-loader',
          },
          {
            text: 'github',
            href: 'https://github.com/vuetifyjs/vuetify',
          },
          {
            text: 'awesome-vuetify',
            href: 'https://github.com/vuetifyjs/awesome-vuetify',
          },
        ],
        importantLinks: [
          {
            text: 'Documentation',
            href: 'https://vuetifyjs.com',
          },
          {
            text: 'Chat',
            href: 'https://community.vuetifyjs.com',
          },
          {
            text: 'Made with Vuetify',
            href: 'https://madewithvuejs.com/vuetify',
          },
          {
            text: 'Twitter',
            href: 'https://twitter.com/vuetifyjs',
          },
          {
            text: 'Articles',
            href: 'https://medium.com/vuetify',
          },
        ],
        whatsNext: [
          {
            text: 'Explore components',
            href: 'https://vuetifyjs.com/components/api-explorer',
          },
          {
            text: 'Select a layout',
            href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
          },
          {
            text: 'Frequently Asked Questions',
            href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
          },
        ],
      }),
    }
  </script>
  