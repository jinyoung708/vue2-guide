<template>
    <div>
        <div class="pub_container">
                <section class="pub_section">
                    <h2>form</h2>
                    <div>
                        <div class="pub_view">
                            <div class="form">
                                <span class="form__info" aria-hidden="true">필수입력</span>
                                <div class="form__item">
                                    <label for="ipt1" class="form__label form__label--required">이메일<span class="a11y">필수입력</span></label>
                                    <div class="form__cont">
                                        <div class="inp inp--hasUtil1">
                                            <input type="text" id="ipt1" class="inp__input" placeholder="이메일 입력">
                                            <div class="inp__utilArea">
                                                <button type="button" class="inp__erase js-eraseInput"><span class="a11y">지우기</span></button>
                                            </div>
                                        </div>
                                        <p class="form__error">올바른 이메일을 입력하세요.</p>
                                    </div>
                                </div>
                                <div class="form__item">
                                    <label for="ipt2" class="form__label form__label--required">닉네임<span class="a11y">필수입력</span></label>
                                    <div class="form__cont">
                                        <div class="inp inp--hasUtil1">
                                            <input type="text" id="ipt2" class="inp__input" placeholder="닉네임 입력">
                                            <div class="inp__utilArea">
                                                <button type="button" class="inp__erase js-eraseInput"><span class="a11y">지우기</span></button>
                                            </div>
                                        </div>
                                        <ul class="form__feedback">
                                            <li class="form__alert form__alert--confirm">1-8자 이내</li>
                                            <li class="form__alert form__alert--confirm">한글/영문/숫자/특수문자 가능</li>
                                            <li class="form__alert form__alert--confirm">띄어쓰기 불가능</li>
                                            <li class="form__alert">다른 회원이 사용하지 않음</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="form__item">
                                    <p class="form__label">결혼 여부</p>
                                    <div class="form__cont">
                                        <div class="inputList inputList--col2">
                                            <div class="inputList__item inputBtn">
                                                <input type="radio" id="rdo1" class="inputBtn__input" name="rdo-group" data-uncheck-radio="true">
                                                <label for="rdo1" class="inputBtn__label">미혼</label>
                                            </div>
                                            <div class="inputList__item inputBtn">
                                                <input type="radio" id="rdo2" class="inputBtn__input" name="rdo-group" data-uncheck-radio="true">
                                                <label for="rdo2" class="inputBtn__label">기혼</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form__item">
                                    <p class="form__label">거주 지역</p>
                                    <div class="form__cont">
                                        <div class="inputList inputList--col2">
                                            <select class="inputList__item selectbox" name="slt1" aria-label="거주지역 시/도 단위">
                                                <option value="0">시/도</option>
                                            </select>
                                            <select class="inputList__item selectbox" name="slt2" aria-label="거주지역 시/군/구 단위">
                                                <option value="0">시/군/구</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form__item">
                                    <p class="form__label">주요 관심사(최대 3개)</p>
                                    <div class="form__cont">
                                        <div class="inputList inputList--col3">
                                            <div class="inputList__item inputBtn">
                                                <input type="checkbox" id="chk1" class="inputBtn__input" name="chk-group">
                                                <label for="chk1" class="inputBtn__label">정치</label>
                                            </div>
                                            <div class="inputList__item inputBtn">
                                                <input type="checkbox" id="chk2" class="inputBtn__input" name="chk-group">
                                                <label for="chk2" class="inputBtn__label">사회</label>
                                            </div>
                                            <div class="inputList__item inputBtn">
                                                <input type="checkbox" id="chk3" class="inputBtn__input" name="chk-group">
                                                <label for="chk3" class="inputBtn__label">경제</label>
                                            </div>
                                            <div class="inputList__item inputBtn">
                                                <input type="checkbox" id="chk4" class="inputBtn__input" name="chk-group">
                                                <label for="chk4" class="inputBtn__label">예능</label>
                                            </div>
                                            <div class="inputList__item inputBtn">
                                                <input type="checkbox" id="chk5" class="inputBtn__input" name="chk-group">
                                                <label for="chk5" class="inputBtn__label">다큐</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;div class="form"&gt;
    &lt;span class="form__info" aria-hidden="true"&gt;필수입력&lt;/span&gt;
    &lt;div class="form__item"&gt;
        &lt;label for="" class="form__label form__label--required"&gt;&lt;span class="a11y"&gt;필수입력&lt;/span&gt;&lt;/label&gt;
        &lt;p class="form__label"&gt;&lt;/p&gt;
        &lt;div class="form__cont"&gt;
            &lt;div class="inp inp--hasUtil1"&gt;
                &lt;input type="text" id="" class="inp__input" placeholder=""&gt;
                &lt;div class="inp__utilArea"&gt;
                    &lt;button type="button" class="inp__erase js-eraseInput"&gt;&lt;span class="a11y"&gt;지우기&lt;/span&gt;&lt;/button&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;p class="form__error"&gt;에러메시지&lt;/p&gt;
            &lt;ul class="form__feedback"&gt;
                &lt;li class="form__alert form__alert--confirm"&gt;입력 유효값 기준 통과&lt;/li&gt;
                &lt;li class="form__alert"&gt;입력 유효값 기준&lt;/li&gt;
            &lt;/ul&gt;
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