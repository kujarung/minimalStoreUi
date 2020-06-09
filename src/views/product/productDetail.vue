<template>
  <div>
    <div class="">
      <div class="" v-if="detailData.ATTACH_IMGs.length > 0">
        <v-img 
          v-for="(img, index) in detailData.ATTACH_IMGs" 
          :key="index"
          :src="path + img.file_path"
        />
      </div>
      <div class="">
        <div class="title">
          {{detailData.product_name}}
        </div>
        <div class="title">
          {{detailData.product_desc}}
        </div>        
        <div class="title">
          {{detailData.product_price}}
        </div>
      </div>
      <div class="">

      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import common from "@/mixin"

export default {
  mixins : [common],
  props : {
    productCode : String
  }, 
  async created() {
    const data = await api('get', `/product/detail/${this.productCode}`)
    this.detailData = {...data[0]}
  },
  data() {
    return {
      detailData: {}
    }
  },
}
</script>

<style lang="scss" scoped>

</style>