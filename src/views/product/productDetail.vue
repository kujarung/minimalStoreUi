<template>
  <div>
    <div class="">
      <div class="" v-if="renderOk">
        <VisualSwiper v-if="detailData.ATTACH_IMGs.length > 1" 
          :slides="detailData.ATTACH_IMGs.map(val => this.path + val.file_path)"/>
        <v-img
          v-else
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
          <editor :editVal="detailData.product_desc" :editMode="`detail`"/>
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
import api from '@/api';
import common from "@/mixin";
import editor from './components/TxtEditor';
import VisualSwiper from '@/components/VisualSwiper';

export default {
  mixins : [common],
  components: {
    editor,
    VisualSwiper
  },
  mixins : [common],
  props : {
    productCode : String
  }, 
  async created() {
    const {data} = await api('get', `/product/detail/${this.productCode}`)
    this.detailData = {...data[0]}
    this.renderOk = true
  },
  data() {
    return {
      renderOk : false,
      detailData: {}
    }
  },
}
</script>

<style lang="scss" scoped>

</style>