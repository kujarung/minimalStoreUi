const common = {
  data() {
    return {
      // 파일 패스 잡는 부분
      path : process.env.NODE_ENV === "development" ? "http://localhost:8080" : '',
    }
  },
  methods: {
    // 3자리 콤마 (ex. 1000 => 1,000)
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
}

export default common