<template>
    <div>
        <div class="pub_container">
                <section class="pub_section">
                    <h2>modal : default</h2>
                    <div>
                        <h3>기본 사항</h3>
                        <ol class="pub_ol">
                            <li>설계서상 별도의 디스크립션이 없을 경우(default)</li>
                            <li>디자인상 딤드처리 되어보이지 않음 + 바닥 컨텐츠 컨트롤 불가 + 팝업 컨텐츠 영역 외 클릭 시 팝업 닫기</li>
                        </ol>
                    </div>
                    <div>
                        <div class="pub_view" style="position:relative; height:300px;">
                            <div id="modal1" class="modal" style="position:absolute; z-index:10; display:block;">
                                <div class="modal__dimmed"></div>
                                <div class="modal__container">
                                    <div class="modal__body">
                                        <p class="modal__message">default type modal</p>
                                    </div>
                                    <div class="modal__foot">
                                        <button type="button" class="btn btn--sm btn--neutralOnOverlay modal__btn">서브버튼</button>     
                                        <button type="button" class="btn btn--sm btn--emphasisOnOverlay modal__btn">주버튼</button>     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;div id="" class="modal"&gt;
    &lt;div class="modal__dimmed"&gt;&lt;/div&gt;&lt;!-- 클릭 시 팝업 닫기 기능 추가할 DOM --&gt;
    &lt;div class="modal__container"&gt;
        &lt;div class="modal__body"&gt;
            &lt;p class="modal__message"&gt;TEXT MESSAGE&lt;/p&gt;
            CONTENTS DOM
        &lt;/div&gt;
        &lt;div class="modal__foot"&gt;
            &lt;button type="button" class="btn btn--sm btn--neutralOnOverlay modal__btn"&gt;서브버튼&lt;/button&gt;     
            &lt;button type="button" class="btn btn--sm btn--emphasisOnOverlay modal__btn"&gt;주버튼&lt;/button&gt;     
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>
                            </pre>
                        </div>
                    </div>
                </section>
                <section class="pub_section">
                    <h2>modal : 예외처리</h2>
                    <div>
                        <h3>기본 사항</h3>
                        <ol class="pub_ol">
                            <li>설계서상 팝업 예외처리 디스크립션 있을 경우</li>
                            <li>디자인상 딤드처리 되어보임 + 바닥 컨텐츠 컨트롤 불가 + 팝업 컨텐츠 영역 외 클릭 시 팝업 닫히지 않음</li>
                        </ol>
                    </div>
                    <div>
                        <div class="pub_view" style="position:relative; height:300px;">
                            <div id="modal2" class="modal modal--dimmed" style="position:absolute; z-index:10; display:block;">
                                <div class="modal__container">
                                    <div class="modal__body">
                                        <p class="modal__message">dimmed type modal</p>
                                    </div>
                                    <div class="modal__foot">   
                                        <button type="button" class="btn btn--sm btn--neutralOnOverlay modal__btn">버튼</button>     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;div id="" class="modal modal--dimmed"&gt;&lt;!-- .modal--dimmed 클래스 추가 + .modal__dimmed DOM 없음 --&gt;
    &lt;div class="modal__container"&gt;
        &lt;div class="modal__body"&gt;
            &lt;p class="modal__message"&gt;TEXT MESSAGE&lt;/p&gt;
            CONTENTS DOM
        &lt;/div&gt;
        &lt;div class="modal__foot"&gt;
            &lt;button type="button" class="btn btn--sm btn--neutralOnOverlay modal__btn"&gt;취소&lt;/button&gt;     
            &lt;button type="button" class="btn btn--sm btn--emphasisOnOverlay modal__btn"&gt;뒤로가기&lt;/button&gt;     
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>
                            </pre>
                        </div>
                    </div>
                </section>
                <section class="pub_section">
                    <h2>full modal</h2>
                    <div>
                        <div class="pub_view" style="position:relative; height:300px;">
                            <div class="fullModal" style="position:absolute; display:block; z-index:10;">
                                <div class="fullModal__head">
                                    <h2 class="fullModal__tit">풀팝업 타이틀</h2>
                                    <button type="button" class="fullModal__close"><span class="a11y">팝업 닫기</span></button>
                                </div>
                                <div class="fullModal__body">
                                    풀팝업 컨텐츠 영역
                                </div>
                            </div>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;div id="" class="fullModal"&gt;
    &lt;div class="fullModal__head"&gt;
        &lt;h2 class="fullModal__tit"&gt;&lt;/h2&gt;
        &lt;button type="button" class="fullModal__close"&gt;&lt;span class="a11y"&gt;팝업 닫기&lt;/span&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="fullModal__body"&gt;
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
        this.$addColorMode('dark'); // 컬러 dark
        this.$addFsMode('md'); // 폰트사이즈 md
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/guide/_page.scss";
</style>