<template>
    <a @click="handleClick(item.id)" class="d-flex align-items-center">
        <!-- <i :data-feather="item.icon"></i> -->
        <img :src="item.icon" width="25" alt="" class="mr-2">
        <span class="menu-item text-truncate" data-i18n="List">{{ item.name }}</span>
    </a>
</template>

<script>
export default {
    name: 'menuItem',
    props: {
        item: {
            required: true
        }
    },
    methods: {
        handleClick(id) {
            this.$router.push({name: 'CompanySubmenu', params:{menuId: id} })
        }
    }
}
</script>
