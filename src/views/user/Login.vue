<template>
  <section class="sign-up">
    <v-form ref="form" v-model="valid">
      <div class="sign-wrap">
        <div class="sign-title">로그인</div>
        <v-text-field
          solo
          flat
          v-model="userObj.user_id"
          :rules="idRules"
          placeholder="아이디"
          class="custom-input" />
        <v-text-field
          solo
          flat
          v-model="userObj.user_password"
          :rules="passwordRules"
          type="password"
          placeholder="비밀번호"
          class="custom-input"
        ></v-text-field>
        <v-btn
          block
          height="48"
          tile
          :disabled="!valid"
          depressed
          class="custom-pink-btn mt20"
          @click="select"
        >로그인</v-btn>
      </div>
    </v-form>
  </section>
</template>

<script>
export default {
  name : 'Login',
  data(){
    return {
      userObj : {
        user_id : "",
        user_password : "",
      },
      valid : false,
    }
  },

  methods: {
  },
}
</script>

<style>

</style>