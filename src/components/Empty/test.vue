<template>
    <div class="app">
        <p>123</p>
        <Empty />
    </div>
</template>

<script>
import Empty from "./";

export default {
    components: {
        Empty
    },
}
</script>

<style>
.app {
    width: 300px;
    height: 400px;
    background-color: aquamarine;
    margin: auto;
    position: relative;
}

</style>