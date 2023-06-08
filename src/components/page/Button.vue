<template>
    <div>
        <div class="pub_container">
                <section class="pub_section">
                    <h2>Button : style</h2>
                    <div>
                        <div class="pub_view">
                            <button type="button" class="btn btn--default btn--md">default</button><br>
                            <button type="button" class="btn btn--gradient btn--md">gradient</button><br>
                            <button type="button" class="btn btn--emphasis btn--md">emphasis</button><br>
                            <button type="button" class="btn btn--emphasisOnOverlay btn--md">emphasisOnOverlay</button><br>
                            <button type="button" class="btn btn--neutral btn--md">neutral</button><br>
                            <button type="button" class="btn btn--neutralOnOverlay btn--md">neutralOnOverlay</button><br>
                            <button type="button" class="btn btn--default btn--md" disabled>default : disabled</button>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;button type="button" class="btn btn--default"&gt;default&lt;/button&gt;
&lt;button type="button" class="btn btn--gradient"&gt;gradient&lt;/button&gt;
&lt;button type="button" class="btn btn--emphasis"&gt;emphasis&lt;/button&gt;
&lt;button type="button" class="btn btn--emphasisOnOverlay"&gt;emphasisOnOverlay&lt;/button&gt;
&lt;button type="button" class="btn btn--neutral"&gt;neutral&lt;/button&gt;
&lt;button type="button" class="btn btn--neutralOnOverlay"&gt;neutralOnOverlay&lt;/button&gt;
&lt;button type="button" class="btn btn--default btn--md" disabled&gt;default : disabled&lt;/button&gt;</code>
                            </pre>
                        </div>
                    </div>
                </section>
                <section class="pub_section">
                    <h2>Button : size</h2>
                    <div>
                        <div class="pub_view">
                            <button type="button" class="btn btn--default btn--sm">sm : 45px</button><br>
                            <button type="button" class="btn btn--default btn--md">md : 50px</button><br>
                            <button type="button" class="btn btn--default btn--lg">lg : 60px</button><br>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;button type="button" class="btn btn--sm"&gt;&lt;/button&gt;
&lt;button type="button" class="btn btn--md"&gt;&lt;/button&gt;
&lt;button type="button" class="btn btn--lg"&gt;&lt;/button&gt;</code>
                            </pre>
                        </div>
                    </div>
                </section>
                <section class="pub_section">
                    <h2>Button : text type</h2>
                    <div>
                        <div class="pub_view">
                            <button type="button" class="textBtn">비회원으로 둘러보기</button><br>
                            <button type="button" class="textBtn textBtn--block">비회원으로 둘러보기</button>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;button type="button" class="textBtn"&gt;&lt;/button&gt;
&lt;button type="button" class="textBtn textBtn--block"&gt;&lt;/button&gt;</code>
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