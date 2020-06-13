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
      <div class="mx20">Login</div>
      <div class="mx20">
        <router-link to="/product">상품 리스트</router-link>
      </div>
      <div class="mr20">
        <router-link to="/about">about</router-link>
      </div>      
      <div class="mr20">
        <router-link to="/signUp">Sign Up</router-link>
      </div>
      <v-avatar size="36">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  })
};
</script>

<style>
</style>