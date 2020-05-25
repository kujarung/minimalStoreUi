<template>
  <div class="home">
    <header class="main-header">
      <ul>
        <li>Books</li>
        <li>Item</li>
        <li>Interior Goods</li>
        <li>Life Style</li>
      </ul>
    </header>
    <section>
      <p class="main-copy">
        하루에 한개,
        <br />무엇이든 판매해보세요.
      </p>
      <p class="sub-copy">
        첫날에 하나, 둘째 날에 두개, 셋째날에 세개<br/>
        미니멀리즘을 실천해보세요
      </p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import minimalStoreApi from "@/api";
import axios from "axios";

export default {
  async created (){ 
    const {users} = await minimalStoreApi('get',"/users/select")
    console.log(users)
    const {data :{ users} } = await axios(
      {
        method: 'get',
        url: 'http://localhost:3000/users/select',
        data : {
          aaa : "bbb",
          ccc : "ddd"
        }
      })
    console.log(result)
    this.userInfo = users
  },
  data() {
    return {
      userInfo: {}
    }
  },
  methods: {
    name() {
      
    }
  },
  name: "Home",
  components: {}
};
</script>
