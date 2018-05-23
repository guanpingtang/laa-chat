<template>
  <div class="hello">
    <mt-button type="primary" @click="test()">primary</mt-button>
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
    test() {
      this.$messagebox('提示', '操作成功');
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
