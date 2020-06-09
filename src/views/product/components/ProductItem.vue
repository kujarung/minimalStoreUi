<template>
  <v-col
    cols="12"
    sm="6"
    md="3"
  >
    <v-card class="inner-card" outlined>
      <v-sheet class="product-img-con">
        <v-sheet class="product-star">
          <v-img src="@/assets/images/star-active.svg"/>
        </v-sheet>
        <v-sheet height="300" color="transparent">
          <v-img class="product-img" src="@/assets/images/20200609_182933.png"/>
        </v-sheet>
        <v-sheet class="product-desc-con">
          <v-sheet class="label-text-con free-del">
            <span class="label-text">
              무료 배송  
            </span>
          </v-sheet>
          <v-sheet class="label-text-con best">
            <span class="label-text">
              베스트  
            </span>
          </v-sheet>
        </v-sheet>
      </v-sheet>
      <v-sheet class="text-con">
        <v-sheet class="product-title">
          milk and honey 책
        </v-sheet>
        <v-sheet class="product-desc">
          산지 10일밖에 안됐습니다.
        </v-sheet>
        <v-sheet class="product-price">
          30,000원
        </v-sheet> 
      </v-sheet>
    </v-card>
  </v-col>
</template>

<script>
export default {

}
</script>

<style>

</style>