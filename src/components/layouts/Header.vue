<template>
    <header class="pub_header">
        <h1>KBS TVUT 퍼블리싱 가이드</h1>
        <div class="pub_toggle">
            <a class="menuTrigger js-menuTrigger" :class="{on : snbShow}" @click="snbToggle">
                <span></span>
                <span></span>
            </a>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        snbShow: Boolean // 부모에게 받은 데이터
    },
    data(){
        return {
            width: 0, // 창 사이즈
        }
    },
    mounted(){
        // 반응형 이벤트 추가
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy(){
        // 반응형 이벤트 제거
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        snbToggle(){
            this.$emit('snbToggle', !this.snbShow); // 부모(App.vue)로 데이터 전달
        },
        handleResize() {
            this.width = window.innerWidth;
            this.width <= 1700 ? this.$emit('snbToggle', false) : this.$emit('snbToggle', true);
            
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/guide/_header.scss";
</style>