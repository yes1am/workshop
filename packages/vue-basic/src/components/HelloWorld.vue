<template>
  <div>
    {{"Hello World" + msg}}
  </div>
</template>

<script>
export default {
  props: ['msg'],
  methods: {
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
</style>