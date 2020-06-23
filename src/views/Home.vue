<template>
  <div class="home sub-main">
    <v-sheet class="visual-con">
      <VisualSwiper :slides="slides" class="mb67" />
      <div class="cate-wrap">
        <ProductCate @changeCate="changeCate" />
      </div>
      <div class="visual-txt-con">
        <div class="visual-txt mb24">
          하루에 한개,
          <br />무엇이든 판매해보세요.
        </div>
        <div class="visual-reg-txt">
          <router-link to="/product/reg">상품 등록하기</router-link>
        </div>
      </div>
    </v-sheet>
    <div class="sub-con">
      <v-row no-gutters>
        <v-col cols="12">
          <tab @changeTab="changeTab" />
          <v-row no-gutters class="product-con">
            <ProductItem v-for="(product, index) in productList" :key="index" :product="product" />
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import minimalStoreApi from "@/api";
import axios from "axios";
import api from "@/api";
import common from "@/mixin";
import ProductCate from "@/views/product/components/ProductCate";
import ProductItem from "@/views/product/components/ProductItem";
import VisualSwiper from "@/components/VisualSwiper";
import tab from "@/views/product/components/ProductTab";
export default {
  mixins: [common],
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
      userInfo: {},
      cycle: true,
      imageList: [
        {
          url: require("../assets/images/slider_image_01.png")
        },
        {
          url: require("../assets/images/slider_image_02.png")
        },
        {
          url: require("../assets/images/slider_image_03.png")
        }
      ]
    };
  },
  computed: {
    productObj() {
      return this.$store.getters.product;
    }
  },
  async created() {
    if (this.productObj.currentPage !== 1) {
      console.log("~!!")
      for (let i = 1; i < this.productObj.currentPage + 1; i++) {
        const {
          data: { data, lastPage }
        } = await api("get", "/product", { currentPage: i });
        this.productList.push(...data);
        console.log(this.productList)
        this.lastPage = lastPage;
      }
      window.scrollTo({
        top: this.productObj.scrollY + 400,
        left: 0,
        behavior: "smooth"
      });
    } else {
      const {
        data: { data, lastPage }
      } = await api("get", "/product");
      this.lastPage = lastPage;
      this.productList.push(...data);
    }
    window.addEventListener("scroll", () => this.addItem());
  },
  beforeDestroy() {
    window.removeEventListener("scroll", () => this.addItem());
  },
   methods: {
    changeTab(tab) {
      console.log(tab)
    },
    changeCate(code) {
      console.log(code)
    },
    async addItem() {
      if(getCurrentScrollPercentage() > 90 
          && 
        (this.productObj.currentPage < this.lastPage) 
        ) 
      {
        this.$store.commit('addPage');
        const {data : {data}} = await api('get','/product',{currentPage : this.productObj.currentPage});
        this.productList.push(...data)
      }
    }    
  },
  
};

function getCurrentScrollPercentage(){
  return (window.scrollY + window.innerHeight) / document.body.clientHeight * 100
}
</script>
