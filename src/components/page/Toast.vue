<template>
    <div>
        <div class="pub_container">
                <section class="pub_section">
                    <h2>toast</h2>
                    <div>
                        <div class="pub_view" style="position:relative; height:300px;">
                            <div id="toast1" class="toast" style="position:absolute; z-index:10; display:block;">
                                <button type="button" class="toast__txt">새 이벤트가 등록됐어요. 누르면 새로고침 돼요!</button>
                            </div>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;div id="toast1" class="toast"&gt;
    &lt;button type="button" class="toast__txt"&gt;새 이벤트가 등록됐어요. 누르면 새로고침 돼요!&lt;/button&gt;
&lt;/div&gt;</code>
                            </pre>
                        </div>
                    </div>
                </section>
                <section class="pub_section">
                    <h2>toast - bottom</h2>
                    <div>
                        <div class="pub_view" style="position:relative; height:300px;">
                            <div id="toast1" class="toast toast--bottom" style="position:absolute; z-index:10; display:block;">
                                <span class="toast__txt">즐겨찾기 추가 완료!<br>
                                    마이페이지에서 관리할 수 있어요.</span>
                            </div>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;div id="toast1" class="toast toast--bottom"&gt;
    &lt;span class="toast__txt"&gt;즐겨찾기 추가 완료!&lt;br&gt; 마이페이지에서 관리할 수 있어요.&lt;/span&gt;
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