<template>
   <div class="pub_snb" :class="{on : snbShow}">
      <ol>
         <li class="on"><a href="guide.html">규칙</a></li>
      </ol>
      <ul>
         <li v-for="(snb,i) in snbs" :key="i">
            <router-link :to="snb.filepath" ><span class="addedEmoji"></span>{{snb.name}}</router-link>
         </li>
      </ul>
   </div>
</template>

<script>
   export default {
      props: {
         snbShow: Boolean
      },
      data() {
         return {
            snbs: [{
               name: '기본정책/HTML',
               filepath: '/'
            }, {
               name: 'CSS 작성',
               filepath: '/css'
            }, {
               name: '컬러',
               filepath: '/color'
            }, {
               name: '폰트',
               filepath: '/font'
            }, {
               name: '제스처',
               filepath: '/touch'
            }, {
               name: 'INPUT',
               filepath: '/input'
            }, {
               name: 'FORM',
               filepath: '/form'
            }, {
               name: 'BUTTON',
               filepath: '/button'
            }, {
               name: 'ALERT',
               filepath: '/alert'
            }, {
               name: 'MODAL',
               filepath: '/modal'
            }, {
               name: 'TOAST',
               filepath: '/toast'
            }, {
               name: '빈 페이지/섹션',
               filepath: '/empty'
            }, {
               name: '댓글',
               filepath: '/comment'
            }, {
               name: 'Lottie 애니메이션',
               filepath: '/lottie'
            }, ],
            emojis: [
               '😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👅', '👄', '👍', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '🙆', '🙅', '💁', '🙋', '💆', '💇', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝'
            ],
         }
      },
      mounted() {
         this.prependRandomEmoji();
      },
      methods: {
         prependRandomEmoji(){
            const addEmojiTarget = document.querySelector("ul").children;
            var getRandomEmoji;
            var randomEmoji;
            for(var i=0; i<addEmojiTarget.length; i++){
               randomEmoji = Math.random() * this.emojis.length;
               getRandomEmoji =  this.emojis[Math.floor(randomEmoji)];
               addEmojiTarget[i].querySelector('.addedEmoji').innerHTML = "";
               addEmojiTarget[i].querySelector('.addedEmoji').prepend(getRandomEmoji);
            }
         },
         
      },
      watch: {
         $route(){
            this.prependRandomEmoji();
         }
      },
   } 
</script>

<style scoped lang="scss">
@import "@/assets/scss/guide/_snb.scss";
</style>