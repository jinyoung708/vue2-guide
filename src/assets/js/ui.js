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
    }
}

export default {
    install(Vue) {
        Vue.prototype.$_setListArray = methods._setListArray
        Vue.prototype.$moveScroll = methods.moveScroll
        Vue.prototype.$scrollEvent = methods.scrollEvent
        Vue.prototype.$fsBtnClick = methods.fsBtnClick
        Vue.prototype.$addColorMode = methods.addColorMode
        Vue.prototype.$addFsMode = methods.addFsMode
    }
}