<template>
  <div class="">
    <v-sheet class="visual-con">
      <VisualSwiper :slides="slides" class="mb67"/>
      <div class="cate-wrap">
        <ProductCate @changeCate="changeCate"/>  
      </div>
      <div class="visual-txt-con">
        <div class="visual-txt mb24">
          하루에 한개,<br> 
          무엇이든 판매해보세요.
        </div>
        <div class="visual-reg-txt">
          <router-link to="/product/reg">
            상품 등록하기
          </router-link>
        </div>
      </div>
    </v-sheet>
    <div class="sub-con">
      <v-row no-gutters>
        <v-col cols="12">
          <tab @changeTab="changeTab"/>
          <v-row no-gutters class="product-con">
            <ProductItem v-for="(product, index) in productList" :key="index" :product="product"/>
          </v-row>
        </v-col>
      </v-row>
    </div>    
  </div>
</template>

<script>
import ProductItem from './components/ProductItem'
import VisualSwiper from '@/components/VisualSwiper'
import tab from './components/ProductTab'
import ProductCate from './components/ProductCate'
import api from '@/api'

export default {
  async created() {
    const { data } = await api('get','/product');
    this.productList = data
  },
  components: {
    ProductItem,
    VisualSwiper,
    tab,
    ProductCate
  },
  data() {
    return {
      productList : [],
      slides: [
        require("@/assets/images/back-img1.png"),
        require("@/assets/images/back-img2.png"),
      ],           
    }
  },
  methods: {
    changeTab(tab) {
      console.log(tab)
    },
    changeCate(code) {
      console.log(code)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>