<template>
  <v-app>
    <GlobalNav />
    <router-view></router-view>
    <Loading v-if="visibleLoading"></Loading>
  </v-app>
</template>

<script>
import GlobalNav from "@/components/GlobalNav";
import Loading from './components/Loading';

export default {
  name: "App",
  components: {
    GlobalNav
  },

  data: () => ({
    // 로딩바 표시 여부
    visibleLoading() {
      return this.$store.getters.loading.count > 0
    },
    //
  })
};
</script>
