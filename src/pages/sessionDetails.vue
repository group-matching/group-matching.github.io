<template>
    <v-container>
        <NavBar />
        <div v-if="this.sessionData == null" >
            <div style="height: 30vh" />
            <div class="text-center mt-16">
                <h1> Hmm... Not so sure how we got here.</h1>
                <h3> Something went wrong trying to load this page. Try again from the My Sessions page.</h3>
            </div>
        </div>
        <div v-else>
            <div class="mt-10 sessionNameHeader"> 
                {{ this.sessionData.sessionName }}
            </div>
            <div class="sessionNameSubheader">
                Created by <strong> {{ this.sessionData.name }} </strong>
            </div>
            <div class="mt-5 mb-5 matchingStatusText">
                Status: 
                <span v-if="matchedStatus == -1" style="color: crimson" >Not Matched</span>
                <span v-if="matchedStatus == 0" style="color: orange" >Matching...</span>
                <span v-if="matchedStatus == 1" style="color: green" >Matched</span>
            </div>
            <div class="mb-10">
                <router-link v-if="matchedStatus == 1" class="viewMatchingLink" :to="{name: 'View Matching', params: { sessionData: this.sessionData }}"><strong>View Matching</strong></router-link>
            </div>
            <v-row>
                <v-col cols="8">
                    <v-card>
                        <div class="pa-5 sessionNameSubheader">
                            <strong>Members Signed Up</strong>
                        </div>
                        <v-expansion-panels variant="inset" class="px-5 pb-5" color="gray">
                            <v-expansion-panel v-for="(signedUpName, index) in signedUpNames" :key="index">
                                <v-expansion-panel-header>
                                    {{ signedUpName }}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Here's some sample info on {{ signedUpName }}. <br>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card>
                        <div class="pa-5 sessionNameSubheader">
                            <strong>Group Leaders</strong>
                        </div>
                        <v-expansion-panels variant="inset" class="px-5 pb-5" color="gray">
                            <v-expansion-panel v-for="(leaderName, index) in groupLeaderNames" :key="index">
                                <v-expansion-panel-header>
                                    {{ leaderName }}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Here's some sample info on {{ leaderName }}. <br>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    
                        
                        <div class="pa-5 sessionNameSubheader">
                            <strong>Group Leaders</strong>
                        </div>
                        <v-expansion-panels variant="inset" class="px-5 pb-5" color="gray">
                            <v-expansion-panel v-for="(menteeName, index) in mentees" :key="index">
                                <v-expansion-panel-header>
                                    {{ menteeName }}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Here's some sample info on {{ menteeName }}. <br>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        
                    </v-card>
                </v-col>
            </v-row>

            <div class="d-flex justify-center py-10">
                <div class="d-flex justify-center">
                    <v-btn @click="matchingTrigger()" :disabled="this.matchedStatus == 0" color="primary">
                        {{ (matchedStatus == -1 ? 'Run Matching' : (matchedStatus == 1 ? 'Re-run Matching' : 'Matching Running...') ) }}
                    </v-btn>
                </div>
            </div>

            <v-dialog v-model="showPopup" width="auto">
                <v-card>
                    <v-card-text class="pa-10 text-center">
                        <h1 class="py-3">Matching Complete.</h1>
                        Choose below to continue.
                    </v-card-text>
                        <div>
                            <v-row class="px-10">
                                <v-col cols="6">
                                    <v-btn color="primary" block @click="viewMatchingButtonPress()">View Matching</v-btn>
                                </v-col>
                                <v-col cols="6">
                                    <v-btn color="primary" block @click="downloadMatchingCSV()">Download CSV</v-btn>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="px-10 py-5">
                            <v-btn color="secondary" block @click="showPopup = false" >Dismiss</v-btn>
                        </div>
                </v-card>
            </v-dialog>

        </div>
    </v-container>
  </template>


<style>
    .matchingStatusText{
        font-size: calc(1vh + 1.25vw);
        font-weight: 500;
    }
    
    .sessionNameHeader{
        font-size: calc(1vh + 2vw);
        font-weight: 700;
    }

    .sessionNameSubheader{
        font-size: calc(0.5vh + 0.75vw);
    }

    .viewMatchingLink{
        text-decoration: none;
        font-size: calc(0.6vh + 0.8vw);
    }
</style>
  
  <script>
    import NavBar from '@/components/NavBar'

    export default {
      name: 'sessionDetails',
      components: {
        NavBar
      },
      data() {
        return {
            showPopup: false,
            matchedStatus: -1, // -1 for not matched, 0 for loading (in case it takes a while) and 1 for matched
            signedUpNames: ["Lebron James", "Mike Trout", "Michael Jordan", "Trevor Bauer", "Jacob deGrom"],
            groupLeaderNames: ["Lirong Xia", "Inwon Kang"],
            mentees: ["Mason duBoef", "Alex Montes"],
            sampleMenteeSessions: [
                {sessionName: "Mason's Matchings", name: "Mason duBoef", assignedGroup: "Team A", topPreference: "Team C" },
                {sessionName: "Sorting Hat", name: "Ron Weasley", assignedGroup: "Gryffindor", topPreference: "Gryffindor" },
                {sessionName: "Alex's Matchings", name: "Alex Montes", assignedGroup: "Team B", topPreference: "Team A" },
            ], // THIS JSON WILL BE PASSED IN FROM BACKEND REFERENCING
        };
      },
      methods: {
        downloadMatchingCSV(){
            return;
            // not sure what to put here yet...
        },
        matchingTrigger(){
            this.matchedStatus = 0;
            this.$forceUpdate();
            setTimeout(()=> {
                this.matchedStatus = 1;
                this.$forceUpdate();
                this.showPopup = !this.showPopup;
            }, 1000) // TEMPORARY
        },
        viewMatchingButtonPress(){
            this.showPopup = false;
            this.$router.push({name: 'View Matching', params: { sessionData: this.sessionData }})
            this.$forceUpdate();
        }
      },
      props: ['sessionData']
    }
  </script>
  