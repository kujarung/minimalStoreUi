<template>
    <div class="">
      <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
      <KakaoLogin
        api-key="8a038013f4764ac6f534e6ad557d1edf"
        image="kakao_login_btn_large"
        :on-success=onSuccessKakao
        :on-failure=onFailure
        />      
      <div class="mb50" @click="logoutKakao">
        logoutKakao
      </div>
      <div class="">
        <div class="" style="border:1px solid black">
          <input type="text" v-model="form.id">
        </div>
        <div class="" style="border:1px solid black">
          <input type="password" v-model="form.password">
        </div>
        <div class="">
          <input type="submit" value="login" @click="login(null)">
        </div>
        <div class="" @click="checkToken">
          checkToken
        </div>
        <div class="" @click="currentToken">
          currentToken
        </div>
      </div>
    </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
import KakaoLogin from 'vue-kakao-login'
import NaverLogin from 'vue-naver-login'
import api from "@/api";

export default {
  components: {
    GoogleLogin,
    KakaoLogin,
    NaverLogin
  },
  data() {
    return {
      token : "",
      form : {
        id : "",
        password : ""
      },
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id: "506588159681-vhb9kn56i87gss76gr325ng115i2d0dk.apps.googleusercontent.com"
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    }
  },
  methods: {
    onSuccess(googleUser) {
      // Useful data for your client-side scripts:
      var profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // Don't send this directly to your server!
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail());

      // The ID token you need to pass to your backend:
      var id_token = googleUser.getAuthResponse().id_token;
      console.log("ID Token: " + id_token);
    },
    onSuccessKakao(data) {
      const vue = this;
      vue.$store.dispatch("addLoading")
      Kakao.Auth.setAccessToken(data.access_token);
      Kakao.API.request({
        url: '/v2/user/me',
        success:(res) => {
          const loginData = {
            id : res.id,
            password : res.id
          }
          vue.$store.dispatch("removeLoading")
          vue.login(loginData)
        },
        fail: (error) => {
          alert(
            'login success, but failed to request user information: ' +
              JSON.stringify(error)
          )
        },
      })      
    },
    onFailure(data) {
      console.log(data)
      console.log("failure")    
    },
    logoutKakao() {
      Kakao.API.request({
        url: '/v1/user/unlink',
        success: function(response) {
          console.log(response);
        },
        fail: function(error) {
          console.log(error);
        },
      });      
    },
    async login(loginData) {
      const { data } = await api('post','/login', loginData ? loginData : this.form)
      if(data.success) {
        this.$store.commit("setuser", data.token)
        this.$router.push("/")
      } else {
        alert("로그인 실패")
      }
    },    
    async checkToken() {
      const data = await api('get','/login/checkToken', {token : this.token})
      console.log(data)
    },
    async currentToken() {
      const data = await api('post','/login/current', null , this.token)
      console.log(data)
    }
  }
}

</script>

<style>

</style>