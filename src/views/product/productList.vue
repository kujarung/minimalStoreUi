<template>
  <div class="sub-main">
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
  computed : {
    productObj() {
      return this.$store.getters.product
    }
  },
  async created() {
    if(this.productObj.currentPage !== 1) {
      for(let i=1;i<this.productObj.currentPage + 1;i++) {
        const {data, lastPage} = await api('get','/product', {currentPage : i} );  
        this.productList.push(...data);
        this.lastPage = lastPage;
      }
      console.log(this.productObj.scrollY)
      window.scrollTo({
        top: this.productObj.scrollY,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      const {data, lastPage} = await api('get','/product');  
      this.lastPage = lastPage;
      this.productList.push(...data);
    }
    window.addEventListener("scroll", ()=> this.addItem())
  },
  beforeDestroy() {
    window.removeEventListener("scroll", ()=> this.addItem())
  },  
  components: {
    ProductItem,
    VisualSwiper,
    tab,
    ProductCate
  },
  data() {
    return {
      lastPage : 0,
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
    async addItem() {
      if(getCurrentScrollPercentage() > 90 && (this.productObj.currentPage < this.lastPage) ) {
        this.$store.commit('addPage');
        const { data } = await api('get','/product',{currentPage : this.productObj.currentPage});
        this.productList.push(...data)
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