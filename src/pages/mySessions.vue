<template>
    <v-container>
        <NavBar />
        <div class="mt-10 mb-15 mySessionsHeader"> 
            My Sessions
        </div>
        <div>
            <v-row>
                <v-col :cols="!isMentor && !isAdmin ? 12 : 10">
                    <div class="pr-5">
                        <v-card class="mb-15" max-width="">
                            <div class="text-center">
                                <div class="subcardHeader">
                                    As Individual
                                </div>
                                <div style="border-bottom: 3px solid grey;">
                                    <v-row>
                                        <v-col cols="5" >
                                            <div style="border-left: 3px solid grey; border-right: 3px solid grey;">
                                                Session Name
                                            </div>
                                        </v-col>
                                        <v-col cols="3">
                                            <div style="border-right: 3px solid grey;">
                                                Name
                                            </div> 
                                        </v-col>
                                        <v-col cols="2">
                                            <div style="border-right: 3px solid grey;">
                                                Assigned Group
                                            </div>
                                        </v-col>
                                        <v-col cols="2">
                                            <div style="border-right: 3px solid grey;">
                                                Top Preference
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div>
                                    <v-row v-for="(menteeSession, index) in this.sampleMenteeSessions" :key="index" >
                                        <v-col cols="5" >
                                            <div>
                                                <router-link class="sessionLink" :to="{name: 'Session Details', params: { sessionData: menteeSession }}">{{ menteeSession.sessionName }}</router-link>
                                            </div>
                                        </v-col>
                                        <v-col cols="3" >
                                            <div>
                                                {{ menteeSession.name }}
                                            </div>
                                        </v-col>
                                        <v-col cols="2" >
                                            <div>
                                                {{ menteeSession.assignedGroup }}
                                            </div>
                                        </v-col>
                                        <v-col cols="2" >
                                            <div>
                                                {{ menteeSession.topPreference }}
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-card>

                        <v-card v-if="isMentor && viewAsMentor" class="my-15" max-width="">
                            <div class="text-center">
                                <div class="subcardHeader">
                                    As Group
                                </div>
                                <div style="border-bottom: 3px solid grey;">
                                    <v-row>
                                        <v-col cols="5" >
                                            <div style="border-left: 3px solid grey; border-right: 3px solid grey;">
                                                Session Name
                                            </div>
                                        </v-col>
                                        <v-col cols="3">
                                            <div style="border-right: 3px solid grey;">
                                                Group Name
                                            </div> 
                                        </v-col>
                                        <v-col cols="2">
                                            <div style="border-right: 3px solid grey;">
                                                Member Count
                                            </div>
                                        </v-col>
                                        <v-col cols="2">
                                            <div style="border-right: 3px solid grey;">
                                                Capacity
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div>
                                    <v-row v-for="(mentorSession, index) in this.sampleMentorSessions" :key="index" >
                                        <v-col cols="5" >
                                            <div>
                                                <router-link class="sessionLink" :to="{name: 'Session Details', params: { sessionData: mentorSession }}">{{ mentorSession.sessionName }}</router-link>
                                            </div>
                                        </v-col>
                                        <v-col cols="3" >
                                            <div>
                                                {{ mentorSession.groupName }}
                                            </div>
                                        </v-col>
                                        <v-col cols="2" >
                                            <div>
                                                {{ mentorSession.memberCount }}
                                            </div>
                                        </v-col>
                                        <v-col cols="2" >
                                            <div>
                                                {{ mentorSession.capacity }}
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-card>


                        <v-card v-if="isAdmin && viewAsAdmin" class="my-15" max-width="">
                            <div class="text-center">
                                <div class="subcardHeader">
                                    As Administrator
                                </div>
                                <div style="border-bottom: 3px solid grey;">
                                    <v-row>
                                        <v-col cols="6" >
                                            <div style="border-left: 3px solid grey; border-right: 3px solid grey;">
                                                Session Name
                                            </div>
                                        </v-col>
                                        <v-col cols="4">
                                            <div style="border-right: 3px solid grey;">
                                                Group Count
                                            </div> 
                                        </v-col>
                                        <v-col cols="2">
                                            <div style="border-right: 3px solid grey;">
                                                Individual Count
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div>
                                    <v-row v-for="(adminSession, index) in this.sampleAdminSessions" :key="index" >
                                        <v-col cols="6" >
                                            <div>
                                                <router-link class="sessionLink" :to="{name: 'Session Details', params: { sessionData: adminSession }}">{{ adminSession.sessionName }}</router-link>
                                            </div>
                                        </v-col>
                                        <v-col cols="4" >
                                            <div>
                                                {{ adminSession.groupCount }}
                                            </div>
                                        </v-col>
                                        <v-col cols="2" >
                                            <div>
                                                {{ adminSession.individualCount }}
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-card>
                    </div>
                </v-col>
                <v-col v-if="isMentor || isAdmin" cols="2" style="border-left: 2px solid black;">
                    <div class="pl-5">
                        <div class="viewAsHeader">
                            View As
                        </div>
                        <div v-if="isMentor">
                            <v-checkbox v-model="viewAsMentor" label="As Mentor" color="primary" input-value="true" hide-details />
                        </div>
                        <div v-if="isAdmin">
                            <v-checkbox v-model="viewAsAdmin" label="As Admin" color="primary" input-value="true" hide-details />
                        </div>
                    </div>
                </v-col>
            </v-row>
            
        </div>
    </v-container>
</template>

<style>
    .mySessionsHeader{
        font-size: calc(1vh + 2vw);
        font-weight: 700;
    }

    .sessionLink{
        text-decoration: none;
    }

    .subcardHeader{
        font-size: calc(2vh + 1vw);
        color: white;
        background-color: grey;
        font-weight: bold;
    }

    .viewAsHeader{
        font-size: calc(0.8vh + 1.75vw);
        font-weight: 400;
    }
</style>

<script>
    import NavBar from '@/components/NavBar';

    export default {
        name: 'mySessions',
        computed: {
            
        },
        data() {
            return {
                isAdmin: true,
                isMentor: true,
                viewAsMentor: (this.isMentor ? true : false),
                viewAsAdmin: (this.isAdmin ? true : false),
                sampleMenteeSessions: [
                    {sessionName: "Mason's Matchings", name: "Mason duBoef", assignedGroup: "Team A", topPreference: "Team C" },
                    {sessionName: "Sorting Hat", name: "Ron Weasley", assignedGroup: "Gryffindor", topPreference: "Gryffindor" },
                    {sessionName: "Alex's Matchings", name: "Alex Montes", assignedGroup: "Team B", topPreference: "Team A" },
                ], // THIS JSON WILL BE PASSED IN FROM BACKEND REFERENCING
                sampleMentorSessions: [
                    {sessionName: "Mason's Matchings", groupName: "Friend Group", memberCount: 5, capacity: 10 },
                    {sessionName: "Fantasy Football 2022", groupName: "Tulso Grizzlies", memberCount: 29, capacity: 32 },
                ], // THIS JSON WILL BE PASSED IN FROM BACKEND REFERENCING
                sampleAdminSessions: [
                    {sessionName: "Fantasy Football 2022", groupCount: 5, individualCount: 150 },
                    {sessionName: "Mentor Pairing", groupCount: 10, individualCount: 10 },
                ], // THIS JSON WILL BE PASSED IN FROM BACKEND REFERENCING
                
            };
        },
        methods: {
            followSession () {
                
            }
        },
        components: {
            NavBar
        }
    }

  </script>
  