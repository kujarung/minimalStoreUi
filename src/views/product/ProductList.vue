<template>
  <div class="sub-main">
    <v-sheet class="custom-container season-image-wrap">
      <v-row no-gutters>
        <v-col cols="12">
          <v-img max-height="280" min-height="280" :src="seasonImage" class="season-image"></v-img>
          <div class="season-content">
            <span class="main-title">
              더운 여름을 나게 해줄
              <br />산뜻한 소품들
            </span>

            <span class="main-title hilight-brown">세일전</span>
            <br />
            <span class="mini-desc">이달의 시즌 세일 30%</span>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
    <div class="sub-con mt100">
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
import ProductItem from "./components/ProductItem";
import VisualSwiper from "@/components/VisualSwiper";
import tab from "./components/ProductTab";
import api from "@/api";
import common from "@/mixin";

export default {
  mixins: [common],
  components: {
    ProductItem,
    VisualSwiper,
    tab
  },
  computed: {
    productObj() {
      return this.$store.getters.product;
    }
  },
  async created() {
    if (this.productObj.currentPage !== 1) {
      for (let i = 1; i < this.productObj.currentPage + 1; i++) {
        const {
          data: { data, lastPage }
        } = await api("get", "/product", { currentPage: i });
        this.productList.push(...data);
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
  data() {
    return {
      lastPage: 0,
      productList: [],
      slides: [
        require("@/assets/images/back-img1.png"),
        require("@/assets/images/back-img2.png")
      ],
      seasonImage: require("@/assets/images/season1.png")
    };
  },
  methods: {
    changeTab(tab) {
      console.log(tab);
    },
    changeCate(code) {
      console.log(code);
    },
    async addItem() {
      if (
        getCurrentScrollPercentage() > 90 &&
        this.productObj.currentPage < this.lastPage
      ) {
        this.$store.commit("addPage");
        const {
          data: { data }
        } = await api("get", "/product", {
          currentPage: this.productObj.currentPage
        });
        this.productList.push(...data);
      }
    }
  }
};

function getCurrentScrollPercentage() {
  return (
    ((window.scrollY + window.innerHeight) / document.body.clientHeight) * 100
  );
}
</script>