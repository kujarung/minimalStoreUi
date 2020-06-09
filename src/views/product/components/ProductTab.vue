<template>
<v-tabs
  background-color="transparent"
  slider-size="4"
  color="black"
  grow
  class="mb23"
  slider-color="#E39696"
>
  <v-tab v-for="(tab, i) in tabData" :key="i" @click="$emit('changeTab',tab.code)">
    {{tab.label}}
  </v-tab>
</v-tabs>  
</template>

<script>
export default {
  data() {
    return {
      tabData: [
        {
          code: "all",
          label: "All"
        },
        {
          code: "best",
          label: "Best"
        },
        {
          code: "new",
          label: "New"
        }
      ]
    }
  },
}
</script>

<style>

</style>