<template>
    <div>
        <div class="pub_container">
                <section class="pub_section">
                    <h2>alert</h2>
                    <div>
                        <div class="pub_view" style="position:relative; height:300px;">
                            <div id="alert1" class="alert" style="position:absolute; display:block;">
                                <div class="alert__container">
                                    <div class="alert__body">
                                        <p class="alert__message">default type alert</p>
                                    </div>
                                    <div class="alert__foot">
                                        <button type="button" class="alert__btn">확인</button>                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;div id="" class="alert"&gt;
    &lt;div class="alert__container"&gt;
        &lt;div class="alert__body"&gt;
            &lt;p class="alert__message"&gt;&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class="alert__foot"&gt;
            &lt;button type="button" class="alert__btn"&gt;확인&lt;/button&gt;                    
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>
                            </pre>
                        </div>
                    </div>
                </section>
                <section class="pub_section">
                    <h2>alert : dimmed</h2>
                    <div>
                        <div class="pub_view" style="position:relative; height:300px;">
                            <div id="alert2" class="alert alert--dimmed" style="position:absolute; display:block;">
                                <div class="alert__container">
                                    <div class="alert__body">
                                        <p class="alert__message">dimmed type alert</p>
                                    </div>
                                    <div class="alert__foot">
                                        <button type="button" class="alert__btn">확인</button>                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;div id="" class="alert alert--dimmed"&gt;
    &lt;div class="alert__container"&gt;
        &lt;div class="alert__body"&gt;
            &lt;p class="alert__message"&gt;&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class="alert__foot"&gt;
            &lt;button type="button" class="alert__btn"&gt;확인&lt;/button&gt;                    
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>
                            </pre>
                        </div>
                    </div>
                </section>
                <section class="pub_section">
                    <h2>alert : dimmed(우상단 닫기 버튼)</h2>
                    <div>
                        <div class="pub_view" style="position:relative; height:300px;">
                            <div id="alert2" class="alert alert--dimmed" style="position:absolute; display:block;">
                                <button type="button" class="alert__close"><span class="a11y">닫기</span></button>
                                <div class="alert__container">
                                    <div class="alert__body">
                                        <p class="alert__message">dimmed type alert</p>
                                    </div>
                                    <div class="alert__foot">
                                        <button type="button" class="alert__btn">확인</button>                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;div id="" class="alert alert--dimmed"&gt;
    &lt;button type="button" class="alert__close"&gt;&lt;span class="a11y"&gt;닫기&lt;/span&gt;&lt;/button&gt;
    &lt;div class="alert__container"&gt;
        &lt;div class="alert__body"&gt;
            &lt;p class="alert__message"&gt;&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class="alert__foot"&gt;
            &lt;button type="button" class="alert__btn"&gt;확인&lt;/button&gt;                    
        &lt;/div&gt;
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