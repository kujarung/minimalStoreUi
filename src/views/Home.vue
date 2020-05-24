<template>
  <section class="home">
    <!-- <div class="main-block-container">
      <div class="item first">first</div>
      <div class="item second">second</div>
      <div class="item third">third</div>
      <div class="item fourth">fourth</div>
      <div class="item end">end</div>
    </div> -->
    메인홈
  </section>
</template>

<script>
// @ is an alias to /src
import minimalStoreApi from "@/api";
import axios from "axios";

export default {
  async created (){ 
    const {users} = await minimalStoreApi('get',"/users/select")
    console.log(users)
    const result = await axios({
      method: 'get',
      url: 'http://localhost:3000/users/select',
    })
    console.log(result)
  },
  name: "Home",
  components: {}
};
</script>
