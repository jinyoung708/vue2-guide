<template>
    <div>
        <div class="pub_container">
            <section class="pub_section">
                <h2>Lottie 애니메이션</h2>
                <div>
                    <h3>Lottie란</h3>
                    <ol class="pub_ol">
                        <li>gif, apng 등 보다 효율적으로 애니메이션을 구현 할 수 있는 라이브러리</li>
                        <li>Adobe After Effect로 제작된 애니메이션을 JSON 형태로 내보내, 웹 상에서 구현한다.</li>
                        <li>아래 예시의 경우 CORS 에러를 일으키므로 일반 로컬 환경에서는 확인 할 수 없다.</li>
                    </ol>
                    <div class="pub_view">
                        <div style="width:300px; height:300px"><lottie-player src="@/assets/images/lottie/lottie_accomplished.json" background="transparent" speed="1" loop autoplay></lottie-player></div>
                    </div>
                    <div class="pub_markup">
                        <pre v-highlightjs>
                        <code class="html">&lt;lottie-player src="../assets/images/lottie/lottie_accomplished.json" background="transparent" speed="1" loop autoplay&gt;&lt;/lottie-player&gt;</code>
                        </pre>
                    </div>
                </div>
            </section>
            <section class="pub_section">
                <h2>Lottie 목록</h2>
                <div>
                    <h3>댓글 이모지</h3>
                    <div class="pub_view" style="display: flex; gap: 20px; align-items: center;">
                        <!-- 사랑 -->
                        <lottie-player src="@/assets/images/lottie/lottie_emoji_love.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        <!-- 웃음 -->
                        <lottie-player src="@/assets/images/lottie/lottie_emoji_yep.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        <!-- 부정 -->
                        <lottie-player src="@/assets/images/lottie/lottie_emoji_no.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        <!-- 화남 -->
                        <lottie-player src="@/assets/images/lottie/lottie_emoji_angry.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        <!-- 슬픔 -->
                        <lottie-player src="@/assets/images/lottie/lottie_emoji_sad.json" background="transparent" speed="1" loop autoplay></lottie-player>
                    </div>
                    <div class="pub_markup">
                        <pre v-highlightjs>
                        <code class="html">&lt;!-- 사랑 --&gt;
&lt;lottie-player src="../assets/images/lottie/lottie_emoji_love.json" background="transparent" speed="1" loop autoplay&gt;&lt;/lottie-player&gt;
&lt;!-- 웃음 --&gt;
&lt;lottie-player src="../assets/images/lottie/lottie_emoji_yep.json" background="transparent" speed="1" loop autoplay&gt;&lt;/lottie-player&gt;
&lt;!-- 부정 --&gt;
&lt;lottie-player src="../assets/images/lottie/lottie_emoji_no.json" background="transparent" speed="1" loop autoplay&gt;&lt;/lottie-player&gt;
&lt;!-- 화남 --&gt;
&lt;lottie-player src="../assets/images/lottie/lottie_emoji_angry.json" background="transparent" speed="1" loop autoplay&gt;&lt;/lottie-player&gt;
&lt;!-- 슬픔 --&gt;
&lt;lottie-player src="../assets/images/lottie/lottie_emoji_sad.json" background="transparent" speed="1" loop autoplay&gt;&lt;/lottie-player&gt;</code>
                        </pre>
                    </div>
                </div>
                <div>
                    <h3>Modal 내 애니메이션</h3>
                    <div class="pub_view" style="display: flex; gap: 20px; align-items: center;">
                        <!-- 즐겨찾기 완료 -->
                        <lottie-player src="@/assets/images/lottie/lottie_fav.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        <!-- 이벤트 정답 -->
                        <lottie-player src="@/assets/images/lottie/lottie_clap.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        <!-- 이벤트 오답 -->
                        <lottie-player src="@/assets/images/lottie/lottie_rising_stars.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        <!-- 이벤트 참여완료 -->
                        <lottie-player src="@/assets/images/lottie/lottie_accomplished.json" background="transparent" speed="1" loop autoplay></lottie-player>
                    </div>
                    <div class="pub_markup">
                        <pre v-highlightjs>
                        <code class="html">&lt;!-- 즐겨찾기 완료 --&gt;
&lt;lottie-player src="../assets/images/lottie/lottie_fav.json" background="transparent" speed="1" loop autoplay&gt;&lt;/lottie-player&gt;
&lt;!-- 이벤트 정답 --&gt;
&lt;lottie-player src="../assets/images/lottie/lottie_clap.json" background="transparent" speed="1" loop autoplay&gt;&lt;/lottie-player&gt;
&lt;!-- 이벤트 오답 --&gt;
&lt;lottie-player src="../assets/images/lottie/lottie_rising_stars.json" background="transparent" speed="1" loop autoplay&gt;&lt;/lottie-player&gt;
&lt;!-- 이벤트 참여완료 --&gt;
&lt;lottie-player src="../assets/images/lottie/lottie_accomplished.json" background="transparent" speed="1" loop autoplay&gt;&lt;/lottie-player&gt;</code>
                        </pre>
                    </div>
                </div>
            </section>
        </div>
        <FsTest />
    </div>
</template>

<script>
import Vue from 'vue'
import FsTest from '@/components/elements/FsTest.vue'
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";
Vue.use(LottieVuePlayer);

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