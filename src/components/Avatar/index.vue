<template>
    <img :src="url" :style="{
        width: size + 'px', 
        height: size + 'px'
    }" class="avatar-container" />
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 150
        }
    }
}
</script>

<style scoped>
.avatar-img{
    border-radius: 50%;
    object-fit: cover;
    display: block;
}
</style>
