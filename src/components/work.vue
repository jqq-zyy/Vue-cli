<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>新闻Id:{{$route.params.newsId}}</p>
    <p>新闻标题:{{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'params page'
      }
    },
//    beforeRouteEnter: (to, from, next) => {
//      console.log("准备进入路由模板");
//      next();
//    },
//    beforeRouteLeave: (to, from, next) =>
//    {
//      console.log("准备离开路由模板");
//      next();
//    }
  }
</script>

