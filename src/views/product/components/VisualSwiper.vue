<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in slides" :key="slide">
      <v-sheet height="490">
        <v-img :src="slide" contain position="left" min-height="490"/>
      </v-sheet>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev pointer" slot="button-prev">
      <v-img src="@/assets/img/left.svg" />
    </div>
    <div class="swiper-button-next pointer" slot="button-next">
      <v-img src="@/assets/img/right.svg" />
    </div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  props : {
    slides : Array
  },
  components: {
    Swiper,
    SwiperSlide
  }, 
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
}
</script>