<template>
    <main class="bg-white max-w-2xl mx-auto p-8 md:p-12 rounded-lg shadow-2xl m-auto min-h-400">
        <section class="flex flex-col">
                <div class="mb-6 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="concern">Your concern</label>
                    <input type="text" id="concern"
                    class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 input-concern transition duration-500 px-3 pb-3"
                    :placeholder="placeholder" v-model="question" @keyup.enter="submit"
                    >
                </div>
                <button :disabled="question.length === 0" :class="question.length === 0 ? 'opacity-50 cursor-not-allowed' : ''" class="bg-button text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="button" @click="submit">Decide</button>
                <p class="text-gray-700 mt-6 help">a very sophiticated tool that take over your decision and make your life more comfortable and exciting</p>
        </section>
    </main>
</template>

<script>
export default {
  name: 'Generator',
  data: function () {
    return {
      placeholder: '',
      question: '',
      placeholders: [
        'break up with my girlfriend',
        'ask her number',
        'order a pizza',
        'go for a run',
        'fart in public',
        'do my homework',
        'wash the dishes',
        'call my mother',
        'change my job',
        'go for it'
      ]
    }
  },
  mounted () {
    let random = 0
    let chosenOne = this.placeholders[0]
    let i = 0
    const waitingcylces = 15
    setInterval(() => {
      if (this.placeholder !== chosenOne) { this.placeholder += chosenOne[this.placeholder.length] } else if (this.placeholder === chosenOne && i < waitingcylces) {
        i++
      } else {
        i = 0
        random = Math.floor(Math.random() * this.placeholders.length)
        chosenOne = this.placeholders[random]
        this.placeholder = ''
      }
    }, 200)
  },
  methods: {
    submit () {
      this.$store.commit('setQuestion', this.question)
    }
  }
}
</script>
<style scoped>
.bg-button{
  background-color: #FB8B24;
}
.bg-button:hover{
  background-color: #E36414;
}
.input-concern:focus {
    --border-opacity: 1;
    border-color: #E36414;
}
.help {
    font-size: 15px;
    opacity: 0.8;
}
/* https://coolors.co/5f0f40-9a031e-fb8b24-e36414-0f4c5c */
</style>
