<template>
  <section class="sign-up">
    <v-form ref="form" v-model="valid">
      <div class="sign-wrap">
        <div class="sign-title">회원가입</div>
        <v-text-field
          solo
          flat
          v-model="userObj.user_name"
          :rules="nameRules"
          placeholder="이름"
          class="custom-input"
        ></v-text-field>
        <v-text-field
          solo
          flat
          v-model="userObj.user_id"
          :rules="idRules"
          placeholder="아이디"
          class="custom-input"
        >
          <template #append>
            <v-btn text tile color="#ff0000" @click="select">중복확인</v-btn>
          </template>
        </v-text-field>
        <v-text-field
          solo
          flat
          v-model="userObj.user_password"
          :rules="passwordRules"
          type="password"
          placeholder="비밀번호"
          class="custom-input"
        ></v-text-field>
        <v-text-field
          solo
          flat
          v-model="checkPassword"
          type="password"
          placeholder="비밀번호 확인"
          :rules="checkPasswordRules"
          class="custom-input"
        ></v-text-field>
        <v-text-field
          solo
          flat
          v-model="userObj.user_phone"
          type="number"
          placeholder="휴대전화"
          class="custom-input"
        ></v-text-field>
        <v-text-field
          solo
          flat
          v-model="userObj.user_email"
          :rules="emailRules"
          placeholder="이메일"
          class="custom-input"
        ></v-text-field>
        <v-text-field
          solo
          flat
          v-model="userObj.user_address"
          :rules="addressRules"
          placeholder="주소를 입력해주세요"
          class="custom-input"
        ></v-text-field>
        <v-btn
          block
          height="48"
          tile
          :disabled="!valid"
          depressed
          class="custom-pink-btn mt20"
          @click="insert"
        >회원가입</v-btn>
      </div>
      <!-- <v-btn @click="selectAll">select All</v-btn> -->
    </v-form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      checkPassword:'',
      userObj: {
        user_name: "",
        user_id: "",
        user_password: "",
        user_phone: "",
        user_email: "",
        user_address:"",
      },
      valid: false,
      isDuplicateOK: false,
      idRules: [
        v =>
          /^[a-z]+[a-z0-9]{5,19}$/.test(v) ||
          "아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다."
      ],
      nameRules: [
        v => !!v || "이름을 입력해주세요",
        v => (v && v.length <= 12) || "이름은 12자 이하로 입력해주세요."
      ],
      emailRules: [
        v => !!v || "이메일을 입력해주세요",
        v => /.+@.+\..+/.test(v) || "이메일 형식이 옳지 않습니다."
      ],
      passwordRules: [
        v => !!v || "비밀번호를 입력해주세요",
        v =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(v) ||
          "대 소문자, 숫자 포함 8자리 이상이어야 합니다."
      ],
      checkPasswordRules: [
        v => !!v || "비밀번호 확인을 입력해주세요",
        v =>
          this.userObj.user_password === this.checkPassword ||
          "비밀번호가 일치하지 않습니다."
      ],
      addressRules:[
        v => !!v || "주소를 입력해주세요",
        v => (v && v.length <= 30) || "제한길이 30자"
      ]
    };
  },
  mounted() {},
  computed: {
    // isFormCheck() {
    //   //폼 내용이 다 입력되었는지 체크
    //   if (
    //     this.userObj.USER_NAME &&
    //     this.userObj.USER_ID &&
    //     this.userObj.USER_PASSWORD &&
    //     this.userObj.USER_PASSWORD_CHECK &&
    //     this.userObj.USER_PHONE &&
    //     this.userObj.USER_EMAIL
    //   ) {
    //     return true;
    //   } else return false;
    // },
    // isPasswordCheck() {
    //   //패스워드가 서로 같은지 체크
    //   if (this.userObj.USER_PASSWORD == this.userObj.USER_PASSWORD_CHECK) {
    //     return true;
    //   } else return false;
    // }
  },
  methods: {
    async insert() {
      if (this.valid && this.isDuplicateOK) {
        try {
          const data = await api("get", "/signUp/insert", this.userObj);
          console.log("data::", data);
          this.$router.push("/");
        } catch (e) {
          console.log(e);
        }
      } else if (!this.isDuplicateOK) {
        alert("아이디 중복확인을 해주세요.");
      }
    },
    async select() {
      if (this.userObj.user_id) {
        try {
          const searchId = this.userObj.user_id;
          const data = await api("get", "/signUp/select", { userId: searchId });
          if (data.length == 0) {
            this.isDuplicateOK = true;
            alert("사용 가능한 아이디입니다");
          } else {
            alert("아이디가 이미 있습니다");
            this.isDuplicateOK = false;
          }
          console.log("이것 찾았음", searchId);
        } catch (e) {
          console.log("error::", e);
        }
      } else {
        alert("아이디를 입력해주세요");
      }
    },
    async selectAll() {
      const data = await api({
        method: "get",
        url: "http://localhost:3000/signUp/selectAll"
      });
      console.log(data);
    }
  }
};
</script>

<style>
</style>