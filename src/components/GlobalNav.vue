<template>
  <div>
    <v-app-bar color="white" elevation="0" class="px30">
      <v-toolbar-title class="font-weight-bold font20 mont">
        <router-link to="/">Minimal Store</router-link>
      </v-toolbar-title>
      <router-link to="/product/list">
        <div class="ml32 mont mt6 hover-underline">Store</div>
      </router-link>
      <router-link to="/about">
        <div class="ml32 mont mt6 hover-underline">About</div>
      </router-link>
      <v-spacer></v-spacer>
      <v-sheet max-width="240" min-width="240">
     <v-text-field class="custom-input"  placeholder="검색어를 입력해 주세요" append-icon="mdi-magnify" hide-details></v-text-field>
     </v-sheet>
      <div class="d-flex" v-if="userInfo.token.length == 0">
        <div class="mx20">
          <router-link to="/login">Login</router-link>
        </div>
        <div class="mr20">
          <router-link to="/user/signUp">Sign Up</router-link>
        </div>
      </div>
      <template v-else>
        <UserProfile :profileURL="profileURL" />
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import UserProfile from "./UserProfile";

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.getters.user;
    }
  },
  data: () => ({
    drawer: false
  })
};
</script>

<style>
</style>