<template>
  <v-col
    cols="12"
    sm="6"
    md="3"
  >
    <v-card class="inner-card" outlined>
      <v-sheet class="product-star" width="22" @click="activeStar(prdData.product_code)" v-model="starStatus">
        <v-img src="@/assets/images/star-active.svg" v-if="starStatus"/>
        <v-img src="@/assets/images/star.svg" v-else/>
      </v-sheet>
      <div @click="goDetail">
        <v-sheet class="product-img-con">
          <v-sheet height="300" color="transparent">
            <v-img class="product-img" 
              min-height="300"
              max-height="300"
              :src="path + prdData.ATTACH_IMGs[0].file_path" v-if="prdData.ATTACH_IMGs.length > 0"
            />
            <!-- 이미지가 없을 시 기본 디폴트 이미지 -->
            <v-img class="product-img" src="@/assets/images/default.png" v-else/>
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
      </div>        
      <v-sheet class="text-con">
        <v-sheet class="product-title">
          {{prdData.product_name}}
        </v-sheet>
        <v-sheet class="product-desc">
          <!-- html 지우는 정규식 -->
          {{prdData.product_desc.replace(/(<([^>]+)>)/ig,"")}}
        </v-sheet>
        <v-sheet class="product-price">
          {{ numberWithCommas(prdData.product_price) }}원
        </v-sheet> 
      </v-sheet>
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
      prdData: {},
      starStatus : false
    }
  },
  methods: {
    activeStar(code) {
      this.starStatus = !this.starStatus
      console.log(code)
    },
    goDetail() {
      this.$store.commit("setScrollY",{posY : window.scrollY})
      this.$router.push(`/product/detail/${this.prdData.product_code}`)
    }
  },
}
</script>

<style>

</style>