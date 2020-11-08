<template>
    <footer class="max-w-lg mx-auto flex justify-center text-white">
        <a href="#" @click="goHome">Home</a>
        <span class="mx-3">•</span>
        <router-link to="/about">About</router-link>
    </footer>
</template>
<style scoped>
footer {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
}
</style>
<script>
export default {
  name: 'Footer',
  methods: {
    goHome: function (e) {
      e.preventDefault()
      this.$store.commit('setQuestion', '')
      this.$router.push('/')
    }
  }
}
</script>
