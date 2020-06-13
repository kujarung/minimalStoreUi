<template>
  <div class="about-wrap">
    <div class="about-txt-con">
      <div class="minial-txt">
        MINIMALISM
      </div>
      <div class="minimal-img">
        <v-img src="@/assets/images/MINIMALIST.svg" />
      </div>
    </div>

    <div class="about-img-con">
      <v-col cols="12">
        <v-row no-gutters>
          <v-col cols="12" md="6">
            <div class="left-con">
              <v-img class="left-img" src="@/assets/images/about1.png"/>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="right-con">
              <div class="right-img-con">
                <v-img class="right-img" src="@/assets/images/about2.jpg"/>
              </div>
              <div class="center-line">
                <div class="line"></div>
              </div>
              <div class="desc-content">
                <div class="inner-txt">
                  사용하지 않는 물건을 등록해보세요<br class="hidden-md">
                  필요로 하는 사람들에게, <br class="hidden-md">
                  무료로 기부 할 수 있습니다
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </div>

    <div class="about-back-con">
      <div class="inner-text">
        첫날에 하나, 둘째 날에 두개, 셋째날에 세개<br>
        미니멀리즘을 실천해보세요.
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    created() {
      window.addEventListener('scroll', this.scroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.scroll)
    },
    data() {
      return {
        scrollY: ""
      }
    },
    methods: {
      scroll() {}
    },
  }
</script>

<style lang="scss" scoped>

</style>