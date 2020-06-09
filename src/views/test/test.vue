<template>
  <div class="pl50 pr50">
    <div>
      <div class="">
        인설트를 위한 폼
      </div>
      <div class="">
        <input type="text" placeholder="id" v-model="testObj.USER_ID">
      </div>
      <div class="">
        <input type="text" placeholder="pass" v-model="testObj.USER_PASS">
      </div>
      <div class="">
        <input type="text" placeholder="name" v-model="testObj.USER_NAME">
      </div>
      <div class="">
        <input type="text" placeholder="age" v-model="testObj.USER_AGE">
      </div>
      <div class="">
        <input type="text" placeholder="address" v-model="testObj.USER_ADRESS">
      </div>
      <div class="">
        <select v-model="testObj.USER_PHONE">
          <option value="010">010</option>
          <option value="011">011</option>
          <option value="012">012</option>
        </select>
      </div>
      <div class="">
        
      </div>
      <div class="">
        <label for="mo">남자</label>
        <input type="radio" name="sex" value="man" v-model="testObj.USER_SEX" id="mo">
        <label for="wo">여자</label>
        <input type="radio" name="sex" value="wo" v-model="testObj.USER_SEX" id="wo">
      </div>
      <div class="">
        <textarea name="" id="" cols="30" rows="10" v-model="testObj.USER_ETC"/>
      </div>
    </div>
    <div class="">
      get
    </div>
    <div class="" @click="insert">
      insert
    </div>
    <div class="" @click="selectAll">
      select(전체 검색)
    </div>
    <div class="">
      <div class="">
        <input type="text" v-model="del_seq">
      </div>
      <div class="" @click="del">
        delete(인풋에 쓰여진 user_seq 삭제)
      </div>
    </div>
    <div class="" @click="select">
      select(user_seq가 3인값을 찾음)
    </div>    
    <div class="">
      <input v-model="update_val">
      <div class="" @click="update">
        update 3번 이름 변경
      </div>
    </div>        
    <br><br>
    <div class="">
      post
    </div>
    <div class="" @click="postSelect">
      select(user_seq가 3인값을 찾음)
    </div>
    <form method="POST">
      <div class="">
        파일 업로드
      </div>
      <div class="mb50">
        <form action="http://localhost:8080/api/product/upload" ref="formtest" method="post" enctype="multipart/form-data">
          <!-- <img :src="imageUrl" height="150" v-if="imageUrl"/> -->
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
          <v-btn @click="uploadFile">파일 업로드</v-btn>
        </form>

      </div>
    </form>
  </div>
</template>

<script>
import api from "@/api";
import axios from "axios";

export default {
  data() {
    return {
      targetFile : "",
      imageName: '',
      imageUrl: '',
      imageFile: '',
      testObj: {
        USER_ID : "",
        USER_PASS : "",
        USER_NAME : "",
        USER_AGE : "",
        USER_PHONE : "",
        USER_ADRESS : "",
        USER_ETC : "",
        USER_SEX : "",
      },
      testArray : [],
      del_seq : "",
      update_val : "",
    }
  },
  async created() {
  },
  methods: {
    async insert() {
      const data = await api(
        'get',
        '/users/insert',
        this.testObj
      )
      console.log(data)
    },

    async select() {
      const data = await api(
        'get',
        '/users/select',
        {
          searchId : 3, 
          searchName : "aaa"
        }
      )
      console.log(data)
    },

    async selectAll() {
      const data = await api('get','/users/selectAll')
    },

    async postSelect() {
      const result = await api(
        'post', 
        '/users/postSelect',
        {
          searchId : 3,
          searchName : "aaa"
        }
      )
      console.log(result)
    },

    async del() {
      const data = await api(
        'get',
        '/users/del',
        {
          searchId : this.del_seq
        }
      )
      console.log(data)
    },
    async update() {
      const data = await api(
        'post',
        '/product/upload',
        {
          update_val : this.update_val
        },
      )
      console.log(data)      
    }    ,
    async uploadFile() {
      this.$refs.formtest.submit();
    },
		onFilePicked (e) {
      const files = e.target.files
			if(files.length > 0) {
        const fr = new FileReader ()
				fr.addEventListener('load', () => {
					this.targetFile = files // this is an image file that can be sent to server...
				})
			}
    },
    pickFile () {
        this.$refs.image.click ()
    },    
  },
}
</script>

<style>
  /* button, input, select, textarea {
    border : 3px solid black !important;
  } */
</style>