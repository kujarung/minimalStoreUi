<template>
  <div class="about-wrap">
    <section class="image-container">
      <v-img src="@/assets/images/about_background_02.png" min-height="550" max-height="550"></v-img>
      <div class="main-title">For your comfortable life</div>
      <div class="vertical-line"></div>
    </section>
    <div class="custom-container about-txt-con">
      <div class="minial-txt">MINIMALISM</div>
      <div class="minimal-subtxt">
        <span class="font42">미니멀리즘;</span>
        <br />단순함을 추구하는 예술 및 문화, 최소한의 필요.
      </div>
      <p class="font18">
        미니멀 라이프 - 미니멀리즘 라이프 스타일이라고 하는 단순한 생활 방식.
        <br />'심플 라이프(Simple life)'와 '단순한 삶(Simple living)'의 동의어.
        <br />자발적으로 불필요한 물건이나 일과 등을 줄여 본인이 가진 것에 만족한다.
        <br />물건을 적게 소유하면서 생활이 단순해지고 나중에 마음과 생각이 정리되면서
        <br />오히려 삶이 더 풍요로워진다는 것이다.
      </p>
    </div>

    <div class="about-img-con custom-container">
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <div class="left-con">
            <v-img class="left-img" src="@/assets/images/about1.png" />
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="right-con">
            <div class="right-img-con">
              <v-img class="right-img" src="@/assets/images/about2.jpg" />
            </div>
            <div class="center-line">
              <div class="line"></div>
            </div>
            <div class="desc-content">
              <div class="inner-txt">
                사용하지 않는 물건을 등록해보세요
                <br class="hidden-md" />필요로 하는 사람들에게,
                <br class="hidden-md" />무료로 기부 할 수 있습니다
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="about-back-con">
      <div class="inner-text">
        첫날에 하나, 둘째 날에 두개, 셋째날에 세개
        <br />미니멀리즘을 실천해보세요.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.scroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scroll);
  },
  data() {
    return {
      scrollY: ""
    };
  },
  methods: {
    scroll() {}
  }
};
</script>

<style lang="scss" scoped>
</style>