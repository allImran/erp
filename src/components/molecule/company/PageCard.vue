<template>
    <div style="cursor: pointer" class="card text-center">
        <div class="card-body">
            <div class="avatar bg-light-info p-50 mb-1">
                <div class="avatar-content">
                    <img :src="page.icon" alt="" width="20">
                </div>
            </div>
            <!-- <h2 class="fw-bolder">{{ page.status }}</h2> -->
            <p style="height: 25px;" class="card-text">{{ page.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageCard',
    props: ['page']
}
</script>
