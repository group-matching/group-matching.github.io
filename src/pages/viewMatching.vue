<template>
  <v-container>
    <NavBar />

    <!-- Loop through each group -->
    <v-card style="margin-top: 7%;" class="mb-15" v-for="(group, index) in groups" :key="index" max-width="">
      <div class="text-center">
        <div class="subcardHeader">
          {{ group.name }}
        </div>
        <div style="border-bottom: 3px solid grey;">
          <v-row>
            <v-col cols="5">
              <div style="border-left: 3px solid grey; border-right: 3px solid grey;">
                Name
              </div>
            </v-col>
            <v-col cols="3">
              <div style="border-right: 3px solid grey;">
                E-Mail
              </div>
            </v-col>
            <v-col cols="2">
              <div style="border-right: 3px solid grey;">
                Info 1
              </div>
            </v-col>
            <v-col cols="2">
              <div style="border-right: 3px solid grey;">
                Info 2
              </div>
            </v-col>
          </v-row>
        </div>
        <!-- Loop through each member in the group -->
        <div v-for="(member, memberIndex) in group.members" :key="memberIndex">
          <v-row>
            <v-col cols="5">
              <div :style="{ 'font-weight': member.isLeader ? 'bold' : 'normal' }">
                {{ member.name }}
              </div>
            </v-col>
            <v-col cols="3">
              <div>
                {{ member.email }}
              </div>
            </v-col>
            <v-col cols="2">
              <div>
                {{ member.individual-attribute }}
              </div>
            </v-col>
            <v-col cols="2">
              <div>
                {{ member.individual-attribute2 }}
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'viewMatching',
  components: {
    NavBar
  },
  data() {
    return {
      groups: [
        {
          "name": "Group 1",
          "group-attribute": {
            "leader-info": {
              "name": "lirong",
              "email": "...",
              "group-leader-attribute": "..."
            }
          },
          "members": [
            {
              "name": "Inwon",
              "email": "...",
              "individual-attribute": "...",
              "isLeader": true 
            },
            {
              "name": "Ziqun",
              "email": "...",
              "individual-attribute": "...",
              "isLeader": false 
            }
          ]
        },
        {
          "name": "Group 2",
          "group-attribute": {
            "leader-info": {
              "name": "Leader2",
              "email": "...",
              "group-leader-attribute": "..."
            }
          },
          "members": [
            {
              "name": "group2member",
              "email": "...",
              "individual-attribute": "...",
              "isLeader": true 
            },
            {
              "name": "group2member2",
              "email": "...",
              "individual-attribute": "...",
              "isLeader": false 
            }
          ]
        }
      ]
    };
  }
}
</script>

<style>
</style>
