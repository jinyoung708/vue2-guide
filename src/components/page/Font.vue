<template>
  <div>
    <div class="pub_container">
                <section class="pub_section">
                    <h2>폰트 종류</h2>
                    <div>
                        <h3>기본 사항</h3>
                        <ol class="pub_ol">
                            <li><b class="pub_b">Noto Sans KR</b>과 <b class="pub_b">Montserrat</b>폰트를 사용한다.</li>
                        </ol>
                        <div class="pub_view">
                            <p class="noto">Noto Sans KR - 다람쥐 헌 쳇바퀴에 타고파</p>
                            <p class="mont">Montserrat - The quick brown fox jumps over a lazy dog.</p>
                        </div>
                    </div>
                    <div>
                        <h3>font-weight</h3>
                        <ol class="pub_ol">
                            <li>아래와 같은 font-weight가 정의되어 있다.</li>
                        </ol>
                        <div class="pub_view">
                            <p class="noto" style="font-weight:100">Noto Sans KR 100 - 다람쥐 헌 쳇바퀴에 타고파</p>
                            <p class="noto" style="font-weight:300">Noto Sans KR 300 - 다람쥐 헌 쳇바퀴에 타고파</p>
                            <p class="noto" style="font-weight:400">Noto Sans KR 400 - 다람쥐 헌 쳇바퀴에 타고파</p>
                            <p class="noto" style="font-weight:500">Noto Sans KR 500 - 다람쥐 헌 쳇바퀴에 타고파</p>
                            <p class="noto" style="font-weight:700">Noto Sans KR 700 - 다람쥐 헌 쳇바퀴에 타고파</p>
                            <p class="noto" style="font-weight:900">Noto Sans KR 900 - 다람쥐 헌 쳇바퀴에 타고파</p>
                        </div>
                        <div class="pub_view">
                            <p class="mont" style="font-weight:100">Montserrat 100 - The quick brown fox jumps over a lazy dog.</p>
                            <p class="mont" style="font-weight:200">Montserrat 200 - The quick brown fox jumps over a lazy dog.</p>
                            <p class="mont" style="font-weight:300">Montserrat 300 - The quick brown fox jumps over a lazy dog.</p>
                            <p class="mont" style="font-weight:400">Montserrat 400 - The quick brown fox jumps over a lazy dog.</p>
                            <p class="mont" style="font-weight:500">Montserrat 500 - The quick brown fox jumps over a lazy dog.</p>
                            <p class="mont" style="font-weight:600">Montserrat 600 - The quick brown fox jumps over a lazy dog.</p>
                            <p class="mont" style="font-weight:700">Montserrat 700 - The quick brown fox jumps over a lazy dog.</p>
                            <p class="mont" style="font-weight:700; font-style: italic;">Montserrat 700italic - The quick brown fox jumps over a lazy dog.</p>
                            <p class="mont" style="font-weight:800">Montserrat 800 - The quick brown fox jumps over a lazy dog.</p>
                            <p class="mont" style="font-weight:900">Montserrat 900 - The quick brown fox jumps over a lazy dog.</p>
                        </div>
                    </div>
                </section>
                <section class="pub_section">
                    <h2>폰트 사이즈</h2>
                    <div>
                        <h3>기본 사항</h3>
                        <ol class="pub_ol">
                            <li>기본적으로 색상과 동일한 방법으로 정의한다.</li>
                            <li>폰트 사이즈 모드는 body의 data-fs-mode 속성에 따라 달라지며, 현재 md, lg 두 가지이다.</li>
                            <li>가장 작은 폰트 크기를 --fs-100, 가장 큰 크기를 --fs-900으로 정하여 변수로 사용한다.</li>
                            <li>사용시 <b>var(사이즈명)</b>형태로 사용한다.</li>
                            <li>폰트 사이즈가 가변이 아닌 요소는 변수를 사용하지 않고 px로 입력한다.</li>
                            
                        </ol>
                    </div>
                    <div>
                        <h3>폰트 사이즈 목록</h3>
                            <p>
                                <label>
                                    <input type="radio" name="fsMode" id="fsModeMD" value="md" checked>
                                    MD
                                </label>
                                <label>
                                    <input type="radio" name="fsMode" id="fsModeLG" value="lg">
                                    LG
                                </label>
                            </p>
                            <table class="pub_tbl" style="margin-top:10px">
                                <thead>
                                    <tr>
                                        <th>변수명</th>
                                        <th>용도</th>
                                        <th>MD</th>
                                        <th>LG</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span style="font-size:var(--fs-100)">--fs-100</span></td>
                                        <td>최소 크기</td>
                                        <td>10px</td>
                                        <td>12px</td>
                                    </tr>
                                    <tr>
                                        <td><span style="font-size:var(--fs-200)">--fs-200</span></td>
                                        <td>배지</td>
                                        <td>12px</td>
                                        <td>14px</td>
                                    </tr>
                                    <tr>
                                        <td><span style="font-size:var(--fs-300)">--fs-300</span></td>
                                        <td>기본 서브</td>
                                        <td>13px</td>
                                        <td>16px</td>
                                    </tr>
                                    <tr>
                                        <td><span style="font-size:var(--fs-400)">--fs-400</span></td>
                                        <td>기본</td>
                                        <td>14px</td>
                                        <td>17px</td>
                                    </tr>
                                    <tr>
                                        <td><span style="font-size:var(--fs-500)">--fs-500</span></td>
                                        <td>타이틀S</td>
                                        <td>17px</td>
                                        <td>20px</td>
                                    </tr>
                                    <tr>
                                        <td><span style="font-size:var(--fs-600)">--fs-600</span></td>
                                        <td>타이틀M</td>
                                        <td>19px</td>
                                        <td>24px</td>
                                    </tr>
                                    <tr>
                                        <td><span style="font-size:var(--fs-700)">--fs-700</span></td>
                                        <td>마이페이지 유저명?</td>
                                        <td>24px</td>
                                        <td>24px</td>
                                    </tr>
                                    <tr>
                                        <td><span style="font-size:var(--fs-800)">--fs-800</span></td>
                                        <td>타이틀L</td>
                                        <td>31px</td>
                                        <td>31px</td>
                                    </tr>
                                    <tr>
                                        <td><span style="font-size:var(--fs-900)">--fs-900</span></td>
                                        <td>특수용도</td>
                                        <td>60px</td>
                                        <td>60px</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </section>
            </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    mounted() {
        this.$addColorMode('dark');
        this.$addFsMode('md');
        const targets = document.querySelectorAll('input');
        for (const target of targets) {
            target.addEventListener('change', this.changeRadio);
        }
    },
    methods: {
        changeRadio(event){
            const value = event.target.value;
            var target = document.querySelector('body');
            target.setAttribute('data-fs-mode', value);
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/guide/_page.scss";
</style>