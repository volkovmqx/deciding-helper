<template>
  <div class="About">
    <main class="bg-white max-w-2xl mx-auto p-8 md:p-12 rounded-lg shadow-2xl m-auto min-h-400">
        <section class="flex flex-col">
              <p>
                Disclaimer: this is a fun project and not to be used on serious decisions, use at your own responsibility.
                And, to be fully transparent, we are using an external Service to help us decide for you, which is available at https://yesno.wtf/api
              </p>
        </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  components: {
    Footer
  }
}
</script>
