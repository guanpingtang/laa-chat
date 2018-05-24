<template>
  <div class="hello">
    <mt-button type="primary" @click="login()">登录</mt-button>
    <mt-button type="primary" @click="redirect()">跳转</mt-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login() {
      this.$axios.get('http://111.231.64.142:8080/auth/login', {
        params: {
          userAccount: "lvzhen",
          password: "lvzhen"
        }
      }).then(res => {
        if (res.status == 200) {
          this.$router.push({
            path: '/index'
          });
        } else {
          this.$router.push({
            path: '/index'
          });
        }
      })
    },
    redirect() {
      this.$router.push({
        path: '/index'
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
