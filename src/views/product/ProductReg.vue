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
            v-model="insertObj.product_address_code"
            :items="locationItems"
          ></v-select>
        </div>
      </div>

      <div class="">
        <div class="">
          상품 분류
        </div>
        <div class="">
          <v-select
            v-model="insertObj.product_cate"
            :items="cateItems"
            item-text="cate_label"
            item-value="cate_code"
          ></v-select>
        </div>
      </div>

      <div class="">
        <div class="">
          상품 설명
        </div>
        <div class="">
          <editor @saveDesc="saveDesc"/>
        </div>
      </div>   

      <div class="">
        <div class="">
          상품 가격
        </div>
        <div class="">
          <v-text-field type="number" label="Main input" :rules="rules" hide-details="auto" v-model="insertObj.product_price"></v-text-field>
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
import editor from './components/TxtEditor'

export default {
  components: {
    editor,
  },
  watch : {
    showList(val) {
      this.urlList = val.slice()
    }
  },
  async created() {
    const cate = await api('get', '/product/cate')
    console.log(cate)
    this.cateItems = cate
  },
  data() {
    return {
      valid: false,
      imageName : "",
      locationItems : ['서울', '부산', '인천', '대구', '대전', '광주', '수원', '울산', '포항', '의정부', '김포', '성남', '청주', '부천', '전주', '진주', '제주'],
      cateItems : [],
      rules: [
        value => !!value || 'Required.',
      ],
      insertObj : {
        product_code : "",
        product_name : "",
        product_desc : "",
        product_price : "",
        product_cate : "",
        product_address_code : "",
        del_is_free : false,
        reg_date : new Date()
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

    // 프로덕트 인서트
    async saveProduct() {
      this.insertObj['product_code'] = new Date().getTime() + "-" + Math.ceil(Math.random() * 10)
      const frm = new FormData();
      for(let i=0;i<this.attachFile.length;i++) {
        frm.append('img', this.attachFile[i])
      }
      frm.append('code', this.insertObj.product_code)
      const headers = {'Content-Type': 'multipart/form-data'};
      const result = await api('get', '/product/insert', {...this.insertObj});
      await api('post','/product/upload', frm, headers);
    },

    saveDesc(val) {
      this.insertObj.product_desc = val
    }    
  },
}
</script>