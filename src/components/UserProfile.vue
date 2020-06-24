<template>
  <v-menu
    :close-on-content-click="false"
    :nudge-width="200"
    :nudge-bottom="20"
    offset-y
    content-class="profile-tri"
  >

    <!-- Profile Icon -->
    <template v-slot:activator="{on}">
      <div class="menu-icon" v-on="on">
        <v-avatar size="36">
          <template v-if="profileURL">
            <img :src="profileURL" alt="John" class="pointer"/>
          </template>
          <template v-else>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" class="pointer"/>
          </template>
        </v-avatar>
      </div>
    </template>

    <v-card class="menu-tri" style="border: 1px solid #CFCFCF;">
      <v-list>
        <v-list-item-group color="indigo darken-3">
          <!-- My Profile -->
          <v-list-item
            class="custom-gnb-menu"
          >
            <v-list-item-content>
              <v-list-item-title class="font12">
                <router-link to="mypage">
                  My Profile 
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Logout -->
          <v-list-item
            class="custom-gnb-menu"
          >
            <v-list-item-content @click="logout">
              <v-list-item-title class="font12">
                Logout
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-card>
  </v-menu>  
</template>

<script>
import api from "@/api"

export default {
  props : {
    profileURL : String
  },
  methods: {
    async logout() {
      this.$store.commit("deleteuser")
    }
  },
}
</script>

<style>

</style>