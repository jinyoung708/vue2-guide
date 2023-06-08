<template>
  <div>
    <div class="pub_container">
                <section class="pub_section">
                    <h2>jQuery.touchSwipe</h2>
                    <div>
                        <h3>기본 사항</h3>
                        <ol class="pub_ol">
                            <li>터치 동작 감지용 라이브러리</li>
                            <li>지정한 영역에서 클릭, 더블탭, 홀드, 롱탭, 핀치, 스와이프 등 다양한 동작 감지가 가능하다.</li>
                            <li>excludedElements: "button, input, select, textarea, a, .noSwipe" 와 같은 형식으로 제외할 요소를 추가 할 수 있다.</li>
                            <li>서브페이지의 제스처 뒤로가기 함수에서 "button, input, select, textarea, a, .noSwipe, .swiper"를 제외하고 있다.</li>
                            <li><a class="pub_a" href="http://labs.rampinteractive.co.uk/touchSwipe/docs/index.html">API 문서</a></li>
                        </ol>
                    </div>
                    <div>
                        <div class="pub_view">
                            <div id="test" style="display:flex; flex-direction: column; align-items: center; justify-content: center; width:100%; height:300px;">
                                <p id="testTxt">touch here</p>
                                <button class="btn btn--sm btn--default" style="margin-top:10px; width:200px">Button</button>
                                <div class="noSwipe" style="width:30%; height:100px; background: #010409; text-align: center; line-height: 100px; margin-top: 10px;">.noSwipe</div>
                            </div>
                        </div>
                        <div class='pub_markup'>
                            <pre v-highlightjs>
                                <code class="javascript">$('#test').swipe( {
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        $('#testTxt').text('swipe ' + direction );  
    },
    click:function(event,target) {
        $('#testTxt').text('click');  
    },
    hold:function(event,target) {
        $('#testTxt').text('hold');  
    },
    excludedElements: "button, input, select, textarea, a, .noSwipe"
});</code>
                            </pre>
                        </div>
                    </div>
                </section>
            </div>
  </div>
</template>

<script>
import $ from 'jquery';
import "jquery-touchswipe";

export default {
    mounted(){
        this.$addColorMode('dark');
        $('#test').swipe( {
            swipe:function(event, direction, distance, duration, fingerCount, fingerData) { // eslint-disable-line no-unused-vars
                $('#testTxt').text('swipe ' + direction );  
            },
            click:function(event,target) { // eslint-disable-line no-unused-vars
                $('#testTxt').text('click');  
            },
            hold:function(event,target) { // eslint-disable-line no-unused-vars
                $('#testTxt').text('hold');  
            },
            excludedElements: "button, input, select, textarea, a, .noSwipe"
        });
    },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/guide/_page.scss";
</style>