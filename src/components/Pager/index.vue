<template>
    <div class="pager-container" v-if="maxPage > 1">
        <a href="" :class="{disabled: current === 1}" @click="ChangePage(1, $event)">|&lt;&lt;</a>
        <a href="" :class="{disabled: current === 1}" @click="ChangePage(current-1>0?current-1:1, $event)">&lt;</a>
        <a href="" v-for="page in visiblePage" :key="page" @click="ChangePage(page, $event)" :class="{active: page === currentPage}">{{ page }}</a>
        <a href="" :class="{disabled: current === maxPage}" @click="ChangePage(current+1<maxPage?current+1:maxPage, $event)">&gt;</a>
        <a href="" :class="{disabled: current === maxPage}" @click="ChangePage(maxPage, $event)">&gt;&gt;|</a>
    </div>
</template>

<script>
export default {
    props: {
        current: {
            type: Number,
            default: 1
        },
        // 所有项
        total: {
            type: Number,
            default: 0
        },
        // 每页多少项
        limit: {
            type: Number,
            default: 10
        },
        // 显示多少页
        visibleNumber: {
            type: Number,
            default: 10
        }
    },
    computed: {
        maxPage(){
            return Math.ceil(this.total / this.limit);
        },
        currentPage(){
            const current = this.current
            const maxPage = this.maxPage
            if (current < 1)
                return 1
            if (current > maxPage)
                return maxPage
            return current
        },
        visibleMin() {
            const visibleNumber = this.visibleNumber;
            const currentPage = this.currentPage
            let min = currentPage - Math.floor(visibleNumber / 2)
            return min < 1 ? 1 : min
        },
        visibleMax() {
            const visibleNumber = this.visibleNumber;
            const visibleMin = this.visibleMin;
            const maxPage = this.maxPage;
            let max = visibleMin + visibleNumber - 1;
            return max > maxPage ? maxPage : max
        },
        visiblePage() {
            const arr = [];
            for (let i = this.visibleMin; i <= this.visibleMax; i++) {
                arr.push(i)
            }
            return arr;
        },
    },
    methods: {
        ChangePage(newPage, e) {
            e.preventDefault();
            if(newPage === this.current)
                return
            this.$emit("pageChange", newPage)
        },
    },
}
</script>

<style lang="less" scopd>
@import "../../styles/var.less";

.pager-container{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a {
        color: @primary;
        margin: 0 6px;
        &.disabled {
            color: @gray;
            cursor: not-allowed;
        }
        &.active {
            color: @words;
            font-weight: bold;
            cursor: text;
        }
    }
}
</style>