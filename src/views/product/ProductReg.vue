<template>
  <div class="pl50 pr50">
    <div class="font20">
      상품 등록
    </div>
    <v-form         
      ref="form"
      v-model="valid"
    >
      <div class="">
        <div class="">
          상품 이름
        </div>
        <div class="">
          <v-text-field label="Main input" :rules="rules" hide-details="auto" v-model="insertObj.product_name"></v-text-field>
        </div>
      </div>
      
      <div class="">
        <div class="">
          상품 지역
        </div>
        <div class="">
          <v-select
            :items="locationItems"
            label="Standard"
          ></v-select>
        </div>
      </div>

      <div class="">
        <div class="">
          상품 분류
        </div>
        <div class="">
          <v-select
            :items="cateItems"
            label="Standard"
          ></v-select>
        </div>
      </div>

      <div class="">
        <div class="">
          상품 설명
        </div>
        <div class="">
          <v-text-field label="Main input" :rules="rules" hide-details="auto" v-model="insertObj.product_desc"></v-text-field>
        </div>
      </div>   

      <div class="">
        <div class="">
          상품 가격
        </div>
        <div class="">
          <v-text-field label="Main input" :rules="rules" hide-details="auto" v-model="insertObj.product_price"></v-text-field>
        </div>
      </div>        

      <div class="">
        <div class="">
          배송 무료 여부
        </div>
        <div class="">
          <v-switch v-model="insertObj.del_is_free"></v-switch>
        </div>
      </div> 

      <div class="">
        <div class="">
          상품 사진
        </div>
        <div class="">
          <div class="" v-for="(url, index) in urlList" :key="index">
            <v-sheet width="100%" height="350">
              <v-img :src="url.result" alt="" contain width="100%" height="100%"></v-img>
            </v-sheet>
          </div>
          <v-text-field label="Select Image" @click='pickFile' v-model='imageName' class="my10"></v-text-field>
          <input
            name="img"
            type="file"
            style="display: none"
            ref="image"
            accept="image/*"
            @change="onFilePicked"
            multiple
          >
        </div>
      </div>    
      <div class="">
        <v-btn 
          @click="saveProduct">저장</v-btn>
      </div>  
    </v-form>
  </div>
</template>

<script>
import api from '@/api'
import axios from 'axios'

export default {
  watch : {
    showList(val) {
      this.urlList = val.slice()
    }
  },
  created() {
    this.cateItems = []
  },
  data() {
    return {
      valid: false,
      imageName : "",
      locationItems : [],
      cateItems : [],
      rules: [
        value => !!value || 'Required.',
      ],
      insertObj : {
        product_name : "",
        product_desc : "",
        product_price : "",
        product_cate : "",
        product_address : "",
        del_is_free : false,
      },
      attachFile : [],
      urlList : [],
      showList : []
    }
  },
  methods: {
    async onFilePicked (e) {
      const files = e.target.files
      this.attachFile = files
      this.showList = []
      if(files.length > 0) {
        for(let i=0;i<files.length;i++) {
          const fr = new FileReader()
          await fr.readAsDataURL(files[i])
          await fr.addEventListener('load', () => {
            this.showList.push(fr)
          })
        }
      }
    },
    pickFile () {
        this.$refs.image.click ()
    },    
    async saveProduct() {
      const frm = new FormData()
      console.log(this.attachFile)
      this.attachFile.forEach( file => {
        frm.append('img', file)
      })
      await axios.post('http://localhost:8080/api/product/upload', frm, 
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })      
    }
  },
}
</script>

<style scoped>
.bak-img{
  background-repeat: no-repeat;
  background-size: cover;
}
</style>