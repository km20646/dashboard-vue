<template>
    <div>
        <grid :data="gridProps.data" :columns="gridProps.columns" :rowHeaders="gridProps.rowHeaders" :columnOptions="gridProps.columnOptions"
            @click="onClick">

        </grid>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {
  Grid
} from '@toast-ui/vue-grid';
export default {
    components : {
        grid : Grid
    },
    data(){
        return {
            msg : "hi"
        }
    },
    computed : {
        ...mapGetters({getIndexed : 'getIndex'}),
    },
    methods : {
        onClick(ev){
            console.log("clicked!" , ev);
        }
    },
    created(){
        this.gridProps = {
            data : [
                {name: "sss", artist : "birdy"},
                {name: "punk", artist : "daft"}
            ],
            columns : [
                {header : 'Name', name : 'name'},
                {header: 'Name', name : 'name'}
            ]
        }
    }
}
</script>

<style lang="scss">

</style>