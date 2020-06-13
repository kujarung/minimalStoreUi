<template>
<div class="">
  <form action="/api/auth/login" method="POST">
      <input type="text" name="username" placeholder="username">
      <input type="password" name="password" placeholder="password">
      <button type="submit">submit</button>
  </form>
  <a :href="`${this.path}/api/oauth`">
      <div class="kakaoLogin">
          카카오 계정으로 로그인
      </div>
  </a>
</div>

</template>

<script>
import common from "@/mixin"

export default {
  mixins : [common],
}
</script>

<style>

</style>