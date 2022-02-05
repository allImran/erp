<template>
    <a @click="handleClick(item.routeName)" class="d-flex align-items-center">
        <i :data-feather="item.icon"></i>
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
        handleClick(routeName) {
            if(routeName) this.$router.push({name: routeName})
        }
    }
}
</script>
