<template>
    <div>
        <h2>{{this.getIndexed}}</h2>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            msg : "hi"
        }
    },
    computed : {
        ...mapGetters({getIndexed : 'getIndex'}),
        
    }
}
</script>

<style lang="scss">

</style>