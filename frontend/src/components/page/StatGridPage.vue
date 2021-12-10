<template>
    <div>
        <grid :data="gridProps.data" :columns="gridProps.columns" :columnOptions="gridProps.columnOptions"
            :pageOptions="gridProps.pageOptions" 
            @click="onClick">

        </grid>
        <div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters} from 'vuex'
import {
  Grid
} from '@toast-ui/vue-grid';
export default {
    components : {
        grid : Grid
    }, 
    computed : {
        ...mapGetters({getApiJuso : 'getApiJuso', getHeader : 'getHeader'})
    },
    methods : {
        onClick(ev){
            console.log("clicked!" , ev);
        }
    },
    created(){
        this.gridProps = {
            scrollX: true,
            scrollY: true,
            // minBodyHeight: 180,
            rowHeight: "auto",
            columnOptions: {
                resizable: true,
            },
            pageOptions: {
                perPage: 17,
            },
            data : {
                api: {
                    readData: {
                        url: this.getApiJuso + "/api/query/tui-grid/read/" + 46,
                        method: "GET",
                        headers: this.getHeader,
                        initParams: {
                            select: "*",
                            table: "db.mcrs_stat",
                            limit: `ORDER BY isrt_dt desc limit 100000;`
                        },
                    },
                }
            },
            columns : [
        // {name : "id",header:"id"},
                {
                    name: "isrt_dt",
                    header: "연산날짜",
                    whiteSpace: "pre-line",
                    minWidth: 130,
                },
                {
                    name: "cate",
                    header: "카테코드",
                    whiteSpace: "pre-line",
                    minWidth: 90,
                },
                {
                    name: "lcate",
                    header: "대카테",
                    whiteSpace: "pre-line",
                    minWidth: 90,
                },
                {
                    name: "mcate",
                    header: "중카테",
                    whiteSpace: "pre-line",
                    minWidth: 130,
                },
                {
                    name: "cnt",
                    header: "전체 상품 건수",
                    whiteSpace: "pre-line",
                    minWidth: 130
                },
                {
                    name: "total_error_cnt",
                    header: "전체 오매칭 건수",
                    whiteSpace: "pre-line",
                    minWidth: 130
                },
                {
                    name: "minprice_error_cnt",
                    header: "최저가 오매칭 건수",
                    whiteSpace: "pre-line",
                    minWidth: 130
                },
                {
                    name: "delete_error_cnt",
                    header: "번호0처리 건수",
                    whiteSpace: "pre-line",
                    minWidth: 130
                },
                {
                    name: "cnt",
                    header: "전체상품건수",
                    whiteSpace: "pre-line",
                    minWidth: 100
                },
            ],
    }
}
}
</script>

<style lang="scss">

</style>