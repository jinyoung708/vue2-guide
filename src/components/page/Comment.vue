<template>
    <div>
        <div class="pub_container">
                <section class="pub_section">
                    <h2>comment</h2>
                    <div>
                        <ol class="pub_ol">
                            <li>.commentList에 .js-setCommentColor 클래스 추가 시 닉네임 컬러 부여</li>
                        </ol>
                        <div class="pub_view" style="background-color: var(--color-canvas-default);">
                            <div class="sub__fullContainer">
                                <ul class="commentList js-setCommentColor">
                                    <li class="commentList__item">
                                        <div class="comment">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__best">BEST</span><span class="comment__name">작성자작성자작성자작성자작성자</span><span class="comment__date">작성시간</span><span class="comment__adopted">방송채택</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__txt js-limitLine">텍스트 내용 : 5줄 이상 시 더보기 버튼 노출<br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea libero, a amet quia doloremque dignissimos ex quas. Deserunt, adipisci. Tenetur cupiditate magnam maiores sequi? Nesciunt sapiente beatae eligendi temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea libero, a amet quia doloremque dignissimos ex quas. Deserunt, adipisci. Tenetur cupiditate magnam maiores sequi? Nesciunt sapiente beatae eligendi temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea libero, a amet quia doloremque dignissimos ex quas. Deserunt, adipisci. Tenetur cupiditate magnam maiores sequi? Nesciunt sapiente beatae eligendi temporibus.</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment active js-toggleChildComment">2</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="comment__child">
                                                <ul class="commentList">
                                                    <li class="commentList__item">
                                                        <div class="comment">
                                                            <div class="comment__body">
                                                                <div class="comment__info">
                                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                                </div>
                                                                <div class="comment__cont">
                                                                    <div class="comment__txt js-limitLine">대댓글</div>
                                                                </div>
                                                                <div class="comment__action">
                                                                    <div class="action">
                                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                                        <button type="button" class="action__btn action__btn--like">3</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="commentList__item">
                                                        <div class="comment">
                                                            <div class="comment__body">
                                                                <div class="comment__info">
                                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                                </div>
                                                                <div class="comment__cont">
                                                                    <div class="comment__txt js-limitLine">대댓글</div>
                                                                </div>
                                                                <div class="comment__action">
                                                                    <div class="action">
                                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="commentList__item">
                                                        <div class="commentList__more">
                                                            <button type="button" class="textBtn">답글 쓰기</button>
                                                            <button type="button" class="textBtn">답글 더보기</button>
                                                        </div>
                                                    </li>
                                                    <li class="commentList__item">
                                                        <div class="commentList__more">
                                                            <button type="button" class="textBtn">답글 쓰기</button>
                                                            <button type="button" class="textBtn js-closeChildComment">답글 닫기</button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__img">
                                                        <button type="button" class="comment__thumb">
                                                            <img src="@/assets/images/temp/@main_684x385.jpg" alt="">
                                                        </button>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">이미지 : 클릭 시 이미지 크게보기 팝업 노출</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__img">
                                                        <button type="button" class="comment__thumb">
                                                            <img src="@/assets/images/temp/@zoomImg_portrait.jpg" alt="">
                                                        </button>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">스크린 높이의 50%보다 긴 이미지 : 초과부분 생략</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__img">
                                                        <!-- [D] video 썸네일인 경우 comment__thumb--playable 추가 -->
                                                        <button type="button" class="comment__thumb comment__thumb--playable">
                                                            <img src="@/assets/images/temp/@main_684x385.jpg" alt="">
                                                        </button>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">video : .comment__thumb--playable 클래스 추가로 플레이 버튼 노출<br>video : 클릭시 비디오 보기 팝업 노출</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__img">
                                                        <!-- [D] gif 썸네일인 경우 comment__thumb--gif 추가 -->
                                                        <button type="button" class="comment__thumb comment__thumb--gif">
                                                            <img src="@/assets/images/temp/@main_684x385.jpg" alt="">
                                                        </button>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">gif : .comment__thumb--gif 클래스 추가로 gif 배지 노출<br>gif : 클릭시 해당 클래스 제거, 이미지 url 변경</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__emoji">
                                                        <lottie-player class="lottie_emoji_love" background="transparent"  speed="1" loop autoplay></lottie-player>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">lottie 이모지</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action">
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__tagList">
                                                        <span class="comment__tag">#태그</span>
                                                        <span class="comment__tag">#여덟글자길이태그</span>
                                                        <span class="comment__tag">#태그</span>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">태그</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__tagList">
                                                        <span class="comment__tag">#태그</span>
                                                        <span class="comment__tag">#여덟글자길이태그</span>
                                                        <span class="comment__tag">#태그</span>
                                                    </div>
                                                    <div class="comment__emoji">
                                                        <lottie-player class="lottie_emoji_love" background="transparent"  speed="1" loop autoplay></lottie-player>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">태그 + 이모지</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__tagList">
                                                        <span class="comment__tag">#태그</span>
                                                        <span class="comment__tag">#여덟글자길이태그</span>
                                                        <span class="comment__tag">#태그</span>
                                                    </div>
                                                    <div class="comment__img">
                                                        <button type="button" class="comment__thumb">
                                                            <img src="@/assets/images/temp/@main_684x385.jpg" alt="">
                                                        </button>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">태그 + 이미지</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name comment__name--blinded">뮤직뱅크</span><span class="comment__date">방금</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <!-- [D] 댓글 숨김 상태인 경우 blinded 클래스 추가 : .comment__toggle 이외 display none 처리 됨 -->
                                                <div class="comment__cont blinded">
                                                    <div class="comment__img">
                                                        <button type="button" class="comment__thumb">
                                                            <img src="@/assets/images/temp/@main_684x385.jpg" alt="">
                                                        </button>
                                                    </div>
                                                    <div class="comment__txt">신고 블라인드 댓글</div>
                                                    <button type="button" class="comment__toggle js-toggleComment">
                                                        <span class="comment__show">신고가 누적되어 숨겨진 댓글입니다. 클릭하시면 댓글을 보실 수 있습니다.(권장하지 않음)</span>
                                                        <span class="comment__hide">댓글 숨기기</span>
                                                    </button>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="commentList__spinner">
                                            <div class="spinner"></div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="commentList__end">댓글 전체 확인 시 텍스트</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;div class="sub__fullContainer"&gt;
    &lt;ul class="commentList"&gt;
        &lt;li class="commentList__item"&gt;
            &lt;div class="comment"&gt;
                &lt;div class="comment__body"&gt;
                    &lt;div class="comment__info"&gt;
                        &lt;span class="comment__name"&gt;작성자&lt;/span&gt;&lt;span class="comment__date"&gt;작성시간&lt;/span&gt;
                        &lt;button type="button" class="comment__more"&gt;&lt;span class="a11y"&gt;더보기&lt;/span&gt;&lt;/button&gt;
                    &lt;/div&gt;
                    &lt;div class="comment__cont"&gt;
                        &lt;div class="comment__txt js-limitLine"&gt;텍스트 내용&lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div class="comment__action"&gt;
                        &lt;div class="action"&gt;
                            &lt;!-- [D] active 클래스 부여 시 활성화 --&gt;
                            &lt;button type="button" class="action__btn action__btn--comment active js-toggleChildComment"&gt;2&lt;/button&gt;
                            &lt;button type="button" class="action__btn action__btn--like active"&gt;3&lt;/button&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="comment__child"&gt;
                    &lt;ul class="commentList"&gt;
                        ...
                        &lt;li class="commentList__item"&gt;
                            &lt;div class="commentList__more"&gt;
                                &lt;button type="button" class="textBtn"&gt;답글 쓰기&lt;/button&gt;
                                &lt;button type="button" class="textBtn js-closeChildComment"&gt;답글 더보기&lt;/button&gt;
                            &lt;/div&gt;
                        &lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code>
                            </pre>
                        </div>
                    </div>
                </section>
                <section class="pub_section">
                    <h2>comment - 2x</h2>
                    <div>
                        <ol class="pub_ol">
                            <li>BO용 2배 사이즈 comment</li>
                        </ol>
                        <div class="pub_view" style="background-color: var(--color-canvas-default);">
                            <div class="sub__fullContainer">
                                <ul class="commentList commentList--xl js-setCommentColor">
                                    <li class="commentList__item">
                                        <div class="comment comment--xl">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__txt js-limitLine">텍스트 내용 : 5줄 이상 시 더보기 버튼 노출<br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea libero, a amet quia doloremque dignissimos ex quas. Deserunt, adipisci. Tenetur cupiditate magnam maiores sequi? Nesciunt sapiente beatae eligendi temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea libero, a amet quia doloremque dignissimos ex quas. Deserunt, adipisci. Tenetur cupiditate magnam maiores sequi? Nesciunt sapiente beatae eligendi temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea libero, a amet quia doloremque dignissimos ex quas. Deserunt, adipisci. Tenetur cupiditate magnam maiores sequi? Nesciunt sapiente beatae eligendi temporibus.</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action action--xl">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment active js-toggleChildComment">2</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="comment__child">
                                                <ul class="commentList">
                                                    <li class="commentList__item">
                                                        <div class="comment">
                                                            <div class="comment__body">
                                                                <div class="comment__info">
                                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                                </div>
                                                                <div class="comment__cont">
                                                                    <div class="comment__txt js-limitLine">대댓글</div>
                                                                </div>
                                                                <div class="comment__action">
                                                                    <div class="action action--xl">
                                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                                        <button type="button" class="action__btn action__btn--like">3</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="commentList__item">
                                                        <div class="comment">
                                                            <div class="comment__body">
                                                                <div class="comment__info">
                                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                                </div>
                                                                <div class="comment__cont">
                                                                    <div class="comment__txt js-limitLine">대댓글</div>
                                                                </div>
                                                                <div class="comment__action">
                                                                    <div class="action action--xl">
                                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="commentList__item">
                                                        <div class="commentList__more">
                                                            <button type="button" class="textBtn">답글 쓰기</button>
                                                            <button type="button" class="textBtn">답글 더보기</button>
                                                        </div>
                                                    </li>
                                                    <li class="commentList__item">
                                                        <div class="commentList__more">
                                                            <button type="button" class="textBtn">답글 쓰기</button>
                                                            <button type="button" class="textBtn js-closeChildComment">답글 닫기</button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment comment--xl">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__img">
                                                        <button type="button" class="comment__thumb">
                                                            <img src="@/assets/images/temp/@main_684x385.jpg" alt="">
                                                        </button>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">이미지 : 클릭 시 이미지 크게보기 팝업 노출</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action action--xl">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment comment--xl">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__img">
                                                        <button type="button" class="comment__thumb">
                                                            <img src="@/assets/images/temp/@zoomImg_portrait.jpg" alt="">
                                                        </button>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">270px보다 긴 이미지 : 리사이징</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action action--xl">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment comment--xl">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__img">
                                                        <!-- [D] video 썸네일인 경우 comment__thumb--playable 추가 -->
                                                        <button type="button" class="comment__thumb comment__thumb--playable">
                                                            <img src="@/assets/images/temp/@main_684x385.jpg" alt="">
                                                        </button>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">video : .comment__thumb--playable 클래스 추가로 플레이 버튼 노출<br>video : 클릭시 비디오 보기 팝업 노출</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action action--xl">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment comment--xl">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__img">
                                                        <!-- [D] gif 썸네일인 경우 comment__thumb--gif 추가 -->
                                                        <button type="button" class="comment__thumb comment__thumb--gif">
                                                            <img src="@/assets/images/temp/@main_684x385.jpg" alt="">
                                                        </button>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">gif : .comment__thumb--gif 클래스 추가로 gif 배지 노출<br>gif : 클릭시 해당 클래스 제거, 이미지 url 변경</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action action--xl">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment comment--xl">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__emoji">
                                                        <lottie-player class="lottie_emoji_love" background="transparent"  speed="1" loop autoplay></lottie-player>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">lottie 이모지</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action action--xl">
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment comment--xl">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__tagList">
                                                        <span class="comment__tag">#태그</span>
                                                        <span class="comment__tag">#여덟글자길이태그</span>
                                                        <span class="comment__tag">#태그</span>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">태그</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action action--xl">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment comment--xl">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__tagList">
                                                        <span class="comment__tag">#태그</span>
                                                        <span class="comment__tag">#여덟글자길이태그</span>
                                                        <span class="comment__tag">#태그</span>
                                                    </div>
                                                    <div class="comment__emoji">
                                                        <lottie-player class="lottie_emoji_love" background="transparent"  speed="1" loop autoplay></lottie-player>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">태그 + 이모지</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action action--xl">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment comment--xl">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name">작성자</span><span class="comment__date">작성시간</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <div class="comment__cont">
                                                    <div class="comment__tagList">
                                                        <span class="comment__tag">#태그</span>
                                                        <span class="comment__tag">#여덟글자길이태그</span>
                                                        <span class="comment__tag">#태그</span>
                                                    </div>
                                                    <div class="comment__img">
                                                        <button type="button" class="comment__thumb">
                                                            <img src="@/assets/images/temp/@main_684x385.jpg" alt="">
                                                        </button>
                                                    </div>
                                                    <div class="comment__txt js-limitLine">태그 + 이미지</div>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action action--xl">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="comment comment--xl">
                                            <div class="comment__body">
                                                <div class="comment__info">
                                                    <span class="comment__name comment__name--blinded">뮤직뱅크</span><span class="comment__date">방금</span>
                                                    <button type="button" class="comment__more"><span class="a11y">더보기</span></button>
                                                </div>
                                                <!-- [D] 댓글 숨김 상태인 경우 blinded 클래스 추가 : .comment__toggle 이외 display none 처리 됨 -->
                                                <div class="comment__cont blinded">
                                                    <div class="comment__img">
                                                        <button type="button" class="comment__thumb">
                                                            <img src="@/assets/images/temp/@main_684x385.jpg" alt="">
                                                        </button>
                                                    </div>
                                                    <div class="comment__txt">신고 블라인드 댓글</div>
                                                    <button type="button" class="comment__toggle js-toggleComment">
                                                        <span class="comment__show">신고가 누적되어 숨겨진 댓글입니다. 클릭하시면 댓글을 보실 수 있습니다.(권장하지 않음)</span>
                                                        <span class="comment__hide">댓글 숨기기</span>
                                                    </button>
                                                </div>
                                                <div class="comment__action">
                                                    <div class="action action--xl">
                                                        <!-- [D] active 클래스 부여 시 활성화 -->
                                                        <button type="button" class="action__btn action__btn--comment js-toggleChildComment">0</button>
                                                        <button type="button" class="action__btn action__btn--like active">3</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="commentList__spinner">
                                            <div class="spinner"></div>
                                        </div>
                                    </li>
                                    <li class="commentList__item">
                                        <div class="commentList__end">댓글 전체 확인 시 텍스트</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="pub_markup">
                            <pre v-highlightjs>
                                <code class="html">&lt;div class="sub__fullContainer"&gt;
    &lt;ul class="commentList commentList--xl"&gt;
        &lt;li class="commentList__item"&gt;
            &lt;div class="comment comment--xl"&gt;
                &lt;div class="comment__body"&gt;
                    &lt;div class="comment__info"&gt;
                        &lt;span class="comment__name"&gt;작성자&lt;/span&gt;&lt;span class="comment__date"&gt;작성시간&lt;/span&gt;
                        &lt;button type="button" class="comment__more"&gt;&lt;span class="a11y"&gt;더보기&lt;/span&gt;&lt;/button&gt;
                    &lt;/div&gt;
                    &lt;div class="comment__cont"&gt;
                        &lt;div class="comment__txt js-limitLine"&gt;텍스트 내용&lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div class="comment__action"&gt;
                        &lt;div class="action action--xl"&gt;
                            &lt;!-- [D] active 클래스 부여 시 활성화 --&gt;
                            &lt;button type="button" class="action__btn action__btn--comment active js-toggleChildComment"&gt;2&lt;/button&gt;
                            &lt;button type="button" class="action__btn action__btn--like active"&gt;3&lt;/button&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="comment__child"&gt;
                    &lt;ul class="commentList"&gt;
                        ...
                        &lt;li class="commentList__item"&gt;
                            &lt;div class="commentList__more"&gt;
                                &lt;button type="button" class="textBtn js-closeChildComment"&gt;답글 닫기&lt;/button&gt;
                            &lt;/div&gt;
                        &lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
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
        this._setCommentColor(); // _setCommentColor 함수 실행
        this.$_setlottieLoad(); // Lottie 애니메이션
    },
    methods: {
        _setCommentColor() {
            const colorClass = ['comment__name--colorA','comment__name--colorB','comment__name--colorC'];
            const comment = document.querySelectorAll('.js-setCommentColor > .commentList__item > .comment > .comment__body > .comment__info > .comment__name');
            var i = 0;
            comment.forEach(function(value){
                if(i > 2){
                    i = 0;
                }
                value.classList.add(colorClass[i]);
                i++;
            });
        },
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/guide/_page.scss";
</style>