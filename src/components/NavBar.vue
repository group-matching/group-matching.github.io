<template>
    <div>
        <v-app-bar app color="info accent-4" dark elevate-on-scroll>
        <div>
            <v-img width="200" src="@/assets/oprafullname.png" class="navbarLogo"/>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex align-center justify-center">
            <router-link to="/createSession">
                <div class="pa-3 navbarLink">
                    Create Session
                </div>
            </router-link>
            |
            <router-link to="/joinSession">
                <div class="pa-3 navbarLink">
                    Join Session
                </div>
            </router-link>
            |
            <router-link to="/mySessions">
                <div class="pa-3 navbarLink">
                    My Sessions
                </div>
            </router-link>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon> <v-icon> mdi-magnify </v-icon> </v-btn>
        <v-btn icon>
            <v-icon>mdi-wrench</v-icon>
        </v-btn>
        <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>
            </template>

            <v-list>
            <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                Option {{ n }}
            </v-list-item>
            </v-list>
        </v-menu>
        </v-app-bar>
    </div>
  </template>
  
  <style>
  .navbarLink{
    color: white;
    text-decoration: none;
    white-space: nowrap;
    margin-left: 1vw;
    margin-right: 1vw;
  }

  .navbarLogo{
    margin-left: 1vw;
  }
  </style>


  <script>

    export default {
      name: 'NavBar'
    }

  </script>
  