<template>
  <div>
    <p>{{msg}}</p>
    <!--<p>{{$route.name}}</p>-->
    <!--<p>{{$route.params.id}}</p>-->
    <a href="#box">点击</a>
    <div id="box" style="width: 200px;
    height:100px;border:1px solid #ff0000;margin-top: 200px" >到我</div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name:'hi1',
    data(){
      return{
        msg:'i am hi1 page'
      }
    }
  }
</script>
