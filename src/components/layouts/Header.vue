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
        snbShow: Boolean
    },
    data(){
        return {
            width: 0,
        }
    },
    mounted(){
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy(){
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        snbToggle(){
            this.$emit('snbToggle', !this.snbShow);
        },
        handleResize() {
            this.width = window.innerWidth;
            if(this.width <= 1700) {
                this.$emit('snbToggle', false);
            }
            else {
                this.$emit('snbToggle', true);
            }
            
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/guide/_header.scss";
</style>