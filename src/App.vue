<template>
  <div id="app" class="pub">
    <Header :snbShow=snbShow @snbToggle="snbToggle($event)"></Header>
    <Snb :snbShow=snbShow></Snb>
    <PubIndex></PubIndex>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue'
import Snb from './components/layouts/Snb.vue'
import PubIndex from '@/components/layouts/PubIndex.vue'

export default {
  name: 'App',
  components: {
    Header,
    Snb,
    PubIndex,
  },
  data(){
    return{
      snbShow: true, // snb 노출 여부 체크
    }
  },
  methods: {
    snbToggle(event){
      this.snbShow = event; // header 클릭 이벤트에 따라 snb 노출 여부 변경
    }
  }
}
</script>

<style>
</style>