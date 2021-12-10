<template>
  <div class="container">
        <div class="card mb-2">
            <div class="card-body">
            <h3 class="text-primary">stats API</h3>
            </div>
        </div>
        <div>{{stats}}</div>
  </div>
</template>

<script>
export default {
    created : function(){
        // const id = this.$route.params.id;
        this.$http.get('/api/stats').then((response)=>{
            console.log(response,"Stats.Vue");
            this.stats = response.data;
        }).catch(err=>{
            console.log(err);
        })
    },
    data : function(){
        return {
            stats : []
        }
    }
}
</script>

<style>

</style>