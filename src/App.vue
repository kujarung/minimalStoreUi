<template>
  <v-app>
    <GlobalNav />
    <router-view></router-view>
  </v-app>
</template>

<script>
import GlobalNav from "@/components/GlobalNav";
export default {
  name: "App",
  components: {
    GlobalNav
  },

  data: () => ({
    //
  })
};
</script>
