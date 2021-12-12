<template>
    <div>
        <div class="container-fluid">
            <div class="col-xl-3 xl-50 chart_data_right box-col-12">
                <px-card>
                    <div slot="with-padding">
                        <div class="media align-items-center">
                            <div class="media-body right-chart-content">
                            <h4>
                                INDEX PAGE!
                            </h4>
                            </div>
                        </div>
                    </div>
                </px-card>
            </div>
        </div>
    </div>
</template>

<script>
import PxCard from '../Pxcard.vue'
import Breadcrumbs from '../bread_crumbs.vue'
export default {
    components : {
        PxCard : PxCard,
        Breadcrumbs : Breadcrumbs
    }
  };
</script>

<style>

</style>