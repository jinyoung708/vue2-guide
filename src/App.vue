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
      snbShow: true,
    }
  },
  methods: {
    snbToggle(event){
      this.snbShow = event;
    }
  }
}
</script>

<style lang="scss">

</style>