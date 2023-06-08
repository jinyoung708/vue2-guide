<template>
    <ul class="pub_index">
        <li v-for="(list,i) in listsArr" :key="i" :class="{'on': i === navNum}"><a @click="$moveScroll(i)">{{ list.title }}</a></li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            listsArr: [],
            navNum : 0,
        }
    },
    mounted() {
        this.$setListArray(this.listsArr);
        document.addEventListener('scroll', () => {
            this.navNum = this.$scrollEvent(this.navNum);
        });
    },
    beforeUnmount(){
        document.removeEventListener('scroll', () => {
            this.navNum = this.$scrollEvent(this.navNum);
        });
    },
    watch: {
        $route(){
            this.listsArr = [];
            window.scrollTo({top:0, behavior: 'smooth'});
            this.$setListArray(this.listsArr);
        }
    },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/guide/_pubIndex.scss";
</style>