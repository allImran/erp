<template>
    <div>
        <div v-if="!submenus.length">No item found</div>
        <SubmenuCard
            v-for="(item, index) in submenus"
            :key="index"
            :item="item"
        /> 
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

import SubmenuCard from '@/components/molecule/company/SubmenuCard'

export default {
    name: 'SubmenuPage',

    components: {
        SubmenuCard
    },

    computed: {
        ...mapGetters({
            sidebar: 'company/getSidebar'
        }),

        selectedSidebar() {
            return this.sidebar.find(i => i.id == this.$route.params.menuId)
        },

        submenus() {
            return this.selectedSidebar?.submenus ? this.selectedSidebar.submenus : []
        }
    }
}
</script>


