<template>
    <ul class="pub_index">
        <li v-for="(list,i) in listsArr" :key="i" :class="{'on': i === navNum}"><a @click="$moveScroll(i)">{{ list.title }}</a></li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            listsArr: [], // list를 담을 배열
            navNum : 0, // 숫자
        }
    },
    mounted() {
        this.$_setListArray(this.listsArr); // list 생성
        // 스크롤 이벤트 생성
        document.addEventListener('scroll', () => { 
            this.navNum = this.$scrollEvent(this.navNum);
        });
    },
    beforeUnmount(){
        // 스크롤 이벤트 제거
        document.removeEventListener('scroll', () => {
            this.navNum = this.$scrollEvent(this.navNum);
        });
    },
    watch: {
        // 라우터 이동 시 list 초기화/재호출, 스크롤 초기화
        $route(){
            this.listsArr = [];
            window.scrollTo({top:0, behavior: 'smooth'});
            this.$_setListArray(this.listsArr);
        }
    },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/guide/_pubIndex.scss";
</style>