const lottieList = {
    lottie_accomplished : require('@/assets/images/lottie/lottie_accomplished.json'),
    lottie_emoji_love: require('@/assets/images/lottie/lottie_emoji_love.json'),
    lottie_emoji_yep: require('@/assets/images/lottie/lottie_emoji_yep.json'),
    lottie_emoji_no: require('@/assets/images/lottie/lottie_emoji_no.json'),
    lottie_emoji_angry: require('@/assets/images/lottie/lottie_emoji_angry.json'),
    lottie_emoji_sad: require('@/assets/images/lottie/lottie_emoji_sad.json'),
    lottie_fav: require('@/assets/images/lottie/lottie_fav.json'),
    lottie_clap: require('@/assets/images/lottie/lottie_clap.json'),
    lottie_rising_stars: require('@/assets/images/lottie/lottie_rising_stars.json'),
}

const methods = {
    _setListArray: (value) => {
        const target = document.querySelectorAll('.pub_section')
        for(var i=0; i<target.length; i++){
            const list = [];
            var title = target[i].querySelector('h2').innerText;
            list.title = title;
            list.num = i;
            value.push(list);
        }
    },
    moveScroll: (event) => {
        const target = document.querySelectorAll('.pub_section');
        var goPos = target[event].offsetTop - (window.outerHeight * 0.09);
        window.scrollTo({top:goPos, behavior: 'smooth'});
    },
    scrollEvent: (active) => {
        const target = document.querySelectorAll('.pub_section');
        target.forEach(function(value, index){
            var viewTop = document.documentElement.scrollTop + (window.outerHeight * 0.09);
            var elTop = value.offsetTop;
            var elBot = elTop + value.clientHeight;
            if((elTop <= viewTop) && (elBot >= viewTop)){
                active = index;
            }
        });
        return active;
    },
    fsBtnClick: (event) => {
        var fsMode;
        const targets = document.querySelectorAll('.fs-test button');
        for(const target of targets) {
            target.classList.remove('active');
        }
        event.target.classList.add('active');
        event.target.classList.contains('fs-lg') ? fsMode = 'lg' : fsMode = 'md';
        document.querySelector('body').setAttribute('data-fs-mode', fsMode);
    },
    addColorMode: (value) => {
        document.querySelector('body').setAttribute('data-color-mode', value);
    },
    addFsMode: (value) => {
        document.querySelector('body').setAttribute('data-fs-mode', value);
    },
    _setLottieLoad: () => {
        const target = document.querySelectorAll('lottie-player');
        for(var i=0; i<target.length; i++){
            target[i].addEventListener('rendered', (e) => {
                var data = methods.lottieType(e.target.className);
                e.target.load(data);
            });
        }
    },
    lottieType: (value) => {
        switch(value){
            case 'lottie_accomplished':
                return lottieList.lottie_accomplished;
            case 'lottie_emoji_love':
                return lottieList.lottie_emoji_love;
            case 'lottie_emoji_yep':
                return lottieList.lottie_emoji_yep;
            case 'lottie_emoji_no':
                return lottieList.lottie_emoji_no;
            case 'lottie_emoji_angry':
                return lottieList.lottie_emoji_angry;
            case 'lottie_emoji_sad':
                return lottieList.lottie_emoji_sad;
            case 'lottie_fav':
                return lottieList.lottie_fav;
            case 'lottie_clap':
                return lottieList.lottie_clap;
            case 'lottie_rising_stars':
                return lottieList.lottie_rising_stars;
            default:
                break;
        }
    },
}

export default {
    install(Vue) {
        Vue.prototype.$_setListArray = methods._setListArray
        Vue.prototype.$moveScroll = methods.moveScroll
        Vue.prototype.$scrollEvent = methods.scrollEvent
        Vue.prototype.$fsBtnClick = methods.fsBtnClick
        Vue.prototype.$addColorMode = methods.addColorMode
        Vue.prototype.$addFsMode = methods.addFsMode
        Vue.prototype.$_setlottieLoad = methods._setLottieLoad
    }
}