<template>
<div id="app">
    <vheader :seller="seller"></vheader>
    <div class="tab border-1px">
     <div class="tab-item">
       <router-link to="/goods">商品</router-link>
     </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
  <keep-alive>
    <router-view :seller="seller"></router-view>
  </keep-alive>
</div>
</template>
<script type="text/ecmascript-6">
  import 'common/stylus/index.styl'
  import vheader from 'components/header/header.vue'
  import goods from 'components/goods/goods'
  import rate from 'components/ratings/rate'
  import seller from 'components/seller/seller'
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  Vue.use(VueRouter)
  const routes = [{ path: '/goods', component: goods }, { path: '/seller', component: seller }, { path: '/ratings', component: rate }]
  const router = new VueRouter({routes,
    linkActiveClass: 'active'
  })
  const  ERR_OK=0;
  router.push('/goods')
 export default {
   router,
   data() {
     return {
       seller:{}
     }
   },
   created(){
     this.$http.get('/api/seller').then((response)=>{
       response=response.body;
       if(response.errno==ERR_OK){
         console.log("请求失败")
       }
       else {
         this.seller=response.data
       }
     })
   },
   components:{
     vheader
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl";
#app
  .tab
   display:flex
   width:100%
   height:40px
   line-height:40px
   border-1px(rgba(7,17,27,0.1))
   .tab-item
    flex:1
    text-align:center
    & > a
      display:block
      color:rgb(77,85,93)
      &.active
        color:rgb(240,20,20)
</style>
