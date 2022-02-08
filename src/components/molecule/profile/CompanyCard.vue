<template>
    <div
        @click="goToCompany"
        class="row cardR mobileCompany"
        style="
        margin: 5px;
        padding: 0;
        margin-bottom: 25px;
        background-color: #f6f6f6;
        cursor: pointer
        "
    >
        <div class="col-md-3 imgDiv">
        <img
            :src="company.logo"
            height="80"
            style="width: 80px; height: 80px; border-radius: 50%"
        />
        </div>
        <div class="col-md-9 vertical-container">
        <h3 class="h2 vertical-center mobileCompany">
            {{ company.name }}<span>(CompanyAdmin)</span>
        </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CompanyCard',
    methods: {
        goToCompany() {
            this.$router.push({name: 'Company', params:{companyId: this.company.id} })
        }
    },
    props: {
        company: {
            type: Object
        }
    }
}
</script>
