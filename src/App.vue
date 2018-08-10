<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="goback()">后退</button>
    <button @click="gofont()">前进</button>
    <button @click="goHome()">返回首页</button>
    <!--<router-link :to="/">首页</router-link>-->
    <router-link to="/">index</router-link>
    <router-link to="/work/198/'hello world'">work</router-link>
    <router-link to="/goHome">重定向</router-link>

    <router-link to="/goParams/100/hello">参数</router-link>
    <router-link to="/hi1">hi1</router-link>
    <router-link to="/jq">jq</router-link>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>


  </div>
</template>

<script>
  export default {
    name: 'App',
    methods:{
      goback()
      {
        this.$router.go(-1)
      },
      gofont()
      {
        this.$router.go(1)
      },
      goHome()
      {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }
</style>
