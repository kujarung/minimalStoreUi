<template>
  <div class="home">
    <header class="main-header">
      <v-carousel :cycle="cycle" :interval="5000">
        <v-carousel-item v-for="(item,i) in imageList" :key="i" :src="item.url"></v-carousel-item>
      </v-carousel>
      <div class="slider-on-list">
        <ul>
          <li>Books</li>
          <li>Item</li>
          <li>Interior Goods</li>
          <li>Life Style</li>
        </ul>
      </div>
    </header>
    <section>
      <p class="main-copy">
        하루에 한개,
        <br />무엇이든 판매해보세요.
      </p>
      <div class="sub-wrap">
      <p class="sub-copy">
        첫날에 하나, 둘째 날에 두개, 셋째날에 세개
        <br />미니멀리즘을 실천해보세요
      </p>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import minimalStoreApi from "@/api";
import axios from "axios";

export default {
  async created() {},
  data() {
    return {
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
  methods: {
    name() {}
  },
  name: "Home",
  components: {}
};
</script>
