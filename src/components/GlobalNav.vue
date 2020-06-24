<template>
  <div>
    <v-app-bar color="white" elevation="0" class="px30">
       <v-toolbar-title class="font-weight-bold font20 mont">
        <router-link to="/">
          Minimal Store
        </router-link>
      </v-toolbar-title>
      <div class="ml32 mont mt6"> Store</div>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <div class="mr20">
        <router-link to="/about">About</router-link>
      </div>
      <div class="mx20">
        <router-link to="/product/list">상품 리스트</router-link>
      </div>
      <div class="d-flex" v-if="userInfo.token.length == 0">
        <div class="mx20">
          <router-link to="/login">Login</router-link>
        </div>
        <div class="mr20">
          <router-link to="/user/signUp">Sign Up</router-link>
        </div>
      </div>
      <template v-else>
        <UserProfile :profileURL="profileURL"/>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import UserProfile from './UserProfile'

export default {
  components: {
    UserProfile,
  },
  computed : {
    userInfo() {
      return this.$store.getters.user
    }
  },
  data: () => ({
    drawer: false
  })
};
</script>

<style>
</style>