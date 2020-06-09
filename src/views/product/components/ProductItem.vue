<template>
  <v-col
    cols="12"
    sm="6"
    md="3"
  >
    <v-card class="inner-card" outlined>
      <router-link :to="`/product/detail/${prdData.product_code}`">
        <v-sheet class="product-img-con">
          <v-sheet class="product-star">
            <v-img src="@/assets/images/star-active.svg"/>
          </v-sheet>
          <v-sheet height="300" color="transparent">
            <v-img class="product-img" :src="path + prdData.ATTACH_IMGs[0].file_path" v-if="prdData.ATTACH_IMGs.length > 0"/>
            <v-img class="product-img" src="@/assets/images/20200609_182933.png" v-else/>
          </v-sheet>
          <v-sheet class="product-desc-con">
            <v-sheet class="label-text-con free-del" v-if="prdData.del_is_free === 'true'">
              <span class="label-text">
                무료 배송  
              </span>
            </v-sheet>
            <v-sheet class="label-text-con best">
              <span class="label-text">
                베스트  
              </span>
            </v-sheet>
          </v-sheet>
        </v-sheet>
        <v-sheet class="text-con">
          <v-sheet class="product-title">
            {{prdData.product_name}}
          </v-sheet>
          <v-sheet class="product-desc">
            {{prdData.product_desc}}
          </v-sheet>
          <v-sheet class="product-price">
            {{prdData.product_price}}원
          </v-sheet> 
        </v-sheet>
      </router-link>
    </v-card>
  </v-col>
</template>

<script>
import common from "@/mixin"

export default {
  mixins : [common],
  props : {
    product : Object
  },
  created() {
    this.prdData = {...this.product}
  },
  data() {
    return {
      prdData: {}
    }
  },
}
</script>

<style>

</style>