<template>
  <section class="sign-up">
    <div class="sign-wrap">
      <div class="sign-title">회원가입</div>
      <v-text-field solo flat v-model="userObj.USER_NAME" placeholder="이름" class="custom-input"></v-text-field>
      <v-text-field solo flat v-model="userObj.USER_ID" placeholder="아이디" class="custom-input">
        <template #append>
          <v-btn text tile color="#ff0000" @click="select">중복확인</v-btn>
        </template>
      </v-text-field>
      <v-text-field
        solo
        flat
        v-model="userObj.USER_PASSWORD"
        placeholder="비밀번호"
        class="custom-input"
      ></v-text-field>
      <v-text-field
        solo
        flat
        v-model="userObj.USER_PASSWORD_CHECK"
        placeholder="비밀번호 확인"
        class="custom-input"
      ></v-text-field>
      <v-text-field
        solo
        flat
        v-model="userObj.USER_PHONE"
        type="number"
        placeholder="휴대전화"
        class="custom-input"
      ></v-text-field>
      <v-text-field solo flat v-model="userObj.USER_EMAIL" placeholder="이메일" class="custom-input"></v-text-field>
      <v-btn
        block
        height="48"
        tile
        :disabled="!isFormCheck"
        depressed
        class="custom-pink-btn mt20"
        @click="insert"
      >회원가입</v-btn>
    </div>
    <v-btn @click="selectAll">select All</v-btn>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userObj: {
        USER_NAME: "",
        USER_ID: "",
        USER_PASSWORD: "",
        USER_PASSWORD_CHECK: "",
        USER_PHONE: "",
        USER_EMAIL: ""
      },
      isDuplicateOK: false
    };
  },
  mounted() {},
  computed: {
    isFormCheck() {
      //폼 내용이 다 입력되었는지 체크
      if (
        this.userObj.USER_NAME &&
        this.userObj.USER_ID &&
        this.userObj.USER_PASSWORD &&
        this.userObj.USER_PASSWORD_CHECK &&
        this.userObj.USER_PHONE &&
        this.userObj.USER_EMAIL
      ) {
        return true;
      } else return false;
    },
    isPasswordCheck() {
      //패스워드가 서로 같은지 체크
      if (this.userObj.USER_PASSWORD == this.userObj.USER_PASSWORD_CHECK) {
        return true;
      } else return false;
    }
  },
  methods: {
    async insert() {
      if (this.isDuplicateOK && this.isFormCheck && this.isPasswordCheck) {
        try {
          const data = await axios({
            method: "get",
            url: "http://localhost:3000/signUp/insert",
            params: this.userObj
          }).then(res => {
            console.log("res::", res);
            console.log("insert!");
            this.$router.push('/');
          });
        } catch (e) {
          console.log(error);
        }
      } else if (!this.isDuplicateOK) {
        alert("아이디 중복확인을 해주세요.");
      } else if (!this.isPasswordCheck) {
        alert("패스워드가 같은지 확인해주세요.");
      }
    },
    async select() {
      if (this.userObj.USER_ID) {
        try {
          const searchId = this.userObj.USER_ID;
          await axios({
            method: "get",
            url: "http://localhost:3000/signUp/select",
            params: { userId: searchId }
          }).then(res => {
            console.log("res", res.data);
            if (res.data.length == 0) {
              this.isDuplicateOK = true;
              alert("사용 가능한 아이디입니다");
            } else {
              alert("아이디가 이미 있습니다");
              this.isDuplicateOK = false;
            }
          });
          console.log("이것 찾았음", searchId);
        } catch (e) {
          console.log("error::", e);
        }
      } else {
        alert("아이디를 입력해주세요");
      }
    },
    async selectAll() {
      const data = await axios({
        method: "get",
        url: "http://localhost:3000/signUp/selectAll"
      });
      console.log(data);
    }

    //   async select() {
    //   const data = await axios({
    //     method: 'get',
    //     url: 'http://localhost:3000/users/select',
    //     params : {searchId : 3}
    //   })
    //   console.log(data)
    // },
  }
};
</script>

<style>
</style>