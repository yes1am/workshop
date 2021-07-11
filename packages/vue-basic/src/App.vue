<template>
  <div id="app">
    <div>{{msg}}</div>
    <HelloWorld msg="JavaScript" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: 'hello world'
    }
  },
  methods: {
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
