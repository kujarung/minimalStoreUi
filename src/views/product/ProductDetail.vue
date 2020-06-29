<template>
  <section class="product-detail custom-container">
    <div class v-if="renderOk">
      <v-row no-gutters>
        <v-col cols="12" md="6" class="left-area">
          <VisualSwiper
            v-if="detailData.ATTACH_IMGs.length > 1"
            :slides="detailData.ATTACH_IMGs.map(val => this.path + val.file_path)"
          />
          <v-img
            v-else
            v-for="(img, index) in detailData.ATTACH_IMGs"
            :key="index"
            :src="path + img.file_path"
          />
        </v-col>
        <v-col cols="12" md="6" class="right-area">
          <div class="product-name" v-html="detailData.product_name"></div>
          <div class="product-price" v-html="`${numberWithCommas(detailData.product_price)} 원`"></div>
          <div
            class="product-option"
          >{{`- ${detailData.del_is_free ? '무료배송 상품입니다' : '배송비 미포함입니다'}`}}</div>
          <div class="product-option">{{`- 판매가능 지역 : ${detailData.product_address_code}`}}</div>
          <div class="d-flex align-center my20">
            <v-sheet width="100%" class="mr10">
              <v-btn outlined height="42" color="#000" tile block depressed>관심상품</v-btn>
            </v-sheet>
            <v-sheet width="100%">
              <v-btn height="42" dark color="#000" tile block depressed>구매하기</v-btn>
            </v-sheet>
          </div>
          <div class="product-desc" v-html="detailData.product_desc"></div>
        </v-col>
      </v-row>
    </div>
    <!-- <div class>
      <div class="title">{{detailData.product_name}}</div>
      <div class="title">
        <editor :editVal="detailData.product_desc" :editMode="`detail`" />
      </div>
      <div class="title">{{detailData.product_price}}</div>
    </div>
    <div class></div>-->
  </section>
</template>

<script>
import api from "@/api";
import common from "@/mixin";
import editor from "./components/TxtEditor";
import VisualSwiper from "@/components/VisualSwiper";

export default {
  mixins: [common],
  components: {
    editor,
    VisualSwiper
  },
  mixins: [common],
  props: {
    productCode: String
  },
  async created() {
    const { data } = await api("get", `/product/detail/${this.productCode}`);
    this.detailData = { ...data[0] };
    console.log("detailData", JSON.stringify(this.detailData, null, 2));
    this.renderOk = true;
  },
  data() {
    return {
      renderOk: false,
      detailData: {}
    };
  }
};
</script>