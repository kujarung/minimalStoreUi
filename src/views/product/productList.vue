<template>
  <div class="sub-wrap">
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
import common from "@/mixin"

export default {
  mixins : [common],
  beforeDestroy() {
    window.removeEventListener("scroll", ()=> this.addItem())
  },  
  async created() {
    window.addEventListener("scroll", ()=> this.addItem())
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
    },
    addItem() {
      if(getCurrentScrollPercentage() > 90 && this.productList.length < 12) {
        let plusItem = {
          createdAt: "2020-06-09T16:29:24.000Z",
          del_is_free: "true",
          deletedAt: null,
          product_address_code: "서울",
          product_cate: "com",
          product_code: "1591720150710-4",
          product_desc: "ㅊㅌ퓿튜",
          product_name: "ㄴㄹㅎㅇㅎ",
          product_price: 234234,
          reg_date: "2020-06-09T16:29:10.000Z",
          updatedAt: "2020-06-10T02:48:33.000Z",
          view: 3,
          ATTACH_IMGs: [
            {
              file_name: "201812_type1_2880.jpg",
              file_path: "/upload/product/temp1.png",
              file_seq: 50,
              product_code: "1591720150710-4",
              upload_date: "2020-06-09T16:29:24.000Z",
            }
          ]
        }
        this.productList.push(plusItem)
        plusItem.ATTACH_IMGs.file_path = "/upload/product/temp2.png"
        this.productList.push(plusItem)
        console.log(plusItem)
        plusItem.ATTACH_IMGs.file_path = "/upload/product/temp3.png"
        this.productList.push(plusItem)
        plusItem.ATTACH_IMGs.file_path = "/upload/product/temp4.png"
        this.productList.push(plusItem)
      }
    }    
  },
}

function getCurrentScrollPercentage(){
  return (window.scrollY + window.innerHeight) / document.body.clientHeight * 100
}
</script>

<style lang="scss" scoped>

</style>