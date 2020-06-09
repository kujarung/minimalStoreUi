<template>
  <div class="">
    <v-sheet class="visual-con">
      <VisualSwiper :slides="slides" class="mb67"/>
      <div class="visual-txt-con">
        <div class="visual-txt mb24">
          하루에 한개,<br> 
          무엇이든 판매해보세요.
        </div>
        <div class="visual-reg-txt">
          상품 등록하기
        </div>
      </div>
    </v-sheet>
    <div class="sub-con">
      <v-row no-gutters>
        <v-col cols="12">
          <v-tabs
            background-color="transparent"
            slider-size="4"
            color="black"
            grow
            class="mb23"
            slider-color="#E39696"
          >
            <v-tab>
              All
            </v-tab>
            <v-tab>
              Best
            </v-tab>
            <v-tab>
              New
            </v-tab>
          </v-tabs>      
          <v-row no-gutters class="product-con">
            <ProductItem v-for="n in 10" :key="n"/>
          </v-row>
        </v-col>
      </v-row>
    </div>    
  </div>
</template>

<script>
import ProductItem from './components/ProductItem'
import VisualSwiper from './components/VisualSwiper'
  export default {
    components: {
      ProductItem,
      VisualSwiper
    },
    data() {
      return {
        slides: [
          require("@/assets/img/back-img1.png"),
          require("@/assets/img/back-img2.png"),
        ],           
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>