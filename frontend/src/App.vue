<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
//   computed : {
//       ...mapState(['page']),
//       pageComp(){
//           const pages = {
//               index : () => import('./components/page/IndexPage.vue'),
//               login : () => import('./components/page/LoginPage.vue')
//           }
//           return pages[this.page]
//       }
//   }
}
</script>

<style>

</style>
