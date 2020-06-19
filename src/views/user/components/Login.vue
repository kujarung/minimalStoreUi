<template>
    <div class="">
      <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
      <KakaoLogin
        api-key="8a038013f4764ac6f534e6ad557d1edf"
        image="kakao_login_btn_large"
        :on-success=onSuccessKakao
        :on-failure=onFailure
        />      
        <div class="" @click="logoutKakao">
          logoutKakao
        </div>
    </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
import KakaoLogin from 'vue-kakao-login'

export default {
  components: {
    GoogleLogin,
    KakaoLogin
  },
  data() {
    return {
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
      console.log(data)
      Kakao.API.request({
        url: '/v2/user/me',
        success: function(res) {
          console.log(res)
        },
        fail: function(error) {
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
    }    
  }
}

</script>

<style>

</style>