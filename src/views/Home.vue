<template>
  <div class="home">
    <Result v-if="$store.state.question" />
    <Generator v-else />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Generator from '@/components/Generator.vue'
import Result from '@/components/Result.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Generator,
    Result,
    Footer
  }
}
</script>
