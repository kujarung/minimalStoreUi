<template>
  <div class="cate-con">
    <div class="cate-item" 
      :class="selected == index ? 'active' : ''" 
      v-for="(cate, index) in cateList" 
      :key="index"
      @click="selectItem(index, cate.code)"
    >
      {{cate.label}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected : 0,
      cateList: [
        {
          code: "al",
          label : "ITEM",
        },
        {
          code: "fu",
          label : "FURNITURE",
        },
        {
          code: "di",
          label : "DIY",
        },
        {
          code: "bo",
          label : "BOOKS",
        },
        {
          code: "cl",
          label : "CLOTHES",
        }        
      ]
    }
  },
  methods: {
    selectItem(index, code) {
      this.selected = index;
      this.$emit('changeCate', code);
    }
  },
}
</script>

<style>

</style>