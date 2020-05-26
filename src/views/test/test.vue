<template>
  <div class="">
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
    <div class="" @click="select">
      select(user_seq가 1인값을 찾음)
    </div>    
    <br><br>
    <div class="">
      post
    </div>
    <div class="" @click="postSelect">
      select(user_seq가 1인값을 찾음)
    </div>
  </div>
</template>

<script>
import minimalStoreApi from "@/api";
import axios from "axios";

export default {
  data() {
    return {
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
    }
  },
  async created() {
    // const test = await minimalStoreApi('get',"/users/select")
    // const data = await axios({
    //   method: 'get',
    //   url: 'http://localhost:3000/users/select',
    // })
  },
  methods: {
    async insert() {
      const data = await axios({
        method: 'get',
        url: 'http://localhost:3000/users/insert',
        params : this.testObj
      })
      console.log(data)
    },
    async select() {

    },
    async selectAll() {

    },
    async postSelect() {

    }
  },
}
</script>

<style>
  button, input, select, textarea {
    border : 3px solid black !important;
  }
</style>