<template>
  <div class="hello">
    <mt-button type="primary" @click="login()">登录</mt-button>
    <mt-button type="primary" @click="redirect()">跳转</mt-button>
  </div>
</template>

<script>
import {login} from '@/service/login.js';

export default {
  name: 'HelloWorld',
  data () {
    return {
      list: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login() {
      login('1067418318', '123456').then(res => {
        console.log(res);
        if (res.status == 200) {
          this.$router.push({
            path: '/index'
          });
        } else {
          this.$router.push({
            path: '/index'
          });
        }
      }).catch(error => {
        console.log(error);
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
