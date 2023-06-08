<template>
    <div>
        <div class="pub_container">
                <section class="pub_section">
                    <h2>empty section</h2>
                    <div>
                        <div class="pub_view">
                            <div class="emptySection">
                                <div class="emptySection__desc">로그인 후 프로그램을 즐겨찾기해보세요.</div>
                                <div class="emptySection__btnArea">
                                    <a href="#n" class="emptySection__btn">로그인</a>
                                </div>
                            </div>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;div class="emptySection"&gt;
    &lt;div class="emptySection__desc"&gt;로그인 후 프로그램을 즐겨찾기해보세요.&lt;/div&gt;
    &lt;div class="emptySection__btnArea"&gt;
        &lt;a href="#n" class="emptySection__btn"&gt;로그인&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>
                            </pre>
                        </div>
                    </div>
                </section>
                <section class="pub_section">
                    <h2>empty page</h2>
                    <div>
                        <div class="pub_view">
                            <div class="emptyPage">
                                <div class="emptyPage__cont">
                                    <!-- [P]이미지 기본 75px, 변형 시 inline style로 수정 -->
                                    <div class="emptyPage__img" style="width: 80px">
                                        <img src="@/assets/images/img/img_empty_comment.png" alt="">
                                    </div>
                                    <div class="emptyPage__txt">좋아하는 프로그램에 댓글을 남길 수 있어요.</div>
                                    <div class="emptyPage__btnArea">
                                        <a href="#n" class="emptyPage__btn">버튼</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;div class="emptyPage"&gt;
    &lt;div class="emptyPage__cont"&gt;
        &lt;!-- [P]이미지 기본 75px, 변형 시 inline style로 수정 --&gt;
        &lt;div&gt; class="emptyPage__img"&gt;
            &lt;img src="" alt=""&gt;
        &lt;/div&gt;
        &lt;div&gt; class="emptyPage__txt"&gt;좋아하는 프로그램에 댓글을 남길 수 있어요.&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>
                            </pre>
                        </div>
                    </div>
                </section>
            </div>
            <FsTest />
    </div>
</template>

<script>
import FsTest from '@/components/elements/FsTest.vue'
export default {
    components: {
        FsTest
    },
    mounted(){
        this.$addColorMode('dark');
        this.$addFsMode('md');
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/guide/_page.scss";
</style>