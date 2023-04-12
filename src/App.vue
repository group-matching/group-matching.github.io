<template>
    <v-app>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>
  
<script>
  // import NavBar from '@/components/NavBar'

  //import HelloWorld from "./components/HelloWorld";
  
  export default {
    name: "App",
    /*components: {
        NavBar
    },*/
    data(){
      return {
        appTitle: 'OPRA'
      }
    }
  };
</script>

<style>
  
</style>