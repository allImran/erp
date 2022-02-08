<template>
    <div style="background: #dfdfdf" class="card">
        <div class="card-body d-flex bg-white align-items-center">
            <img width="25" :src="item.icon" alt="" class="me-2">
            <h4 class="card-title mb-0">{{ item.name }}</h4>
            <!-- <h6 class="card-subtitle text-muted">Support card subtitle</h6> -->
        </div>
        <!-- <img class="img-fluid" src="../../../app-assets/images/slider/03.jpg" alt="Card image cap"> -->
        <div class="card-body">
            <div class="row">
                <template v-for="(page, index) in item.pages" :key="index">
                    <div class="col-xl-2 col-md-4 col-sm-6">
                        <PageCard 
                            :page="page"
                        />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import PageCard from '@/components/molecule/company/PageCard'

export default {
    name: 'SubmenuCard',
    components: {
        PageCard
    },
    props: {
        item: {
            required: true
        }
    }
}
</script>
