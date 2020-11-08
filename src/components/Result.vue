<template>
    <main class="bg-white max-w-2xl mx-auto p-8 md:p-12 rounded-lg shadow-2xl m-auto relative min-h-400">
        <section class="flex flex-col text-center">
                <div v-show="isLoading">
                  <h1>{{loadingPlaceholder.placeholder}}</h1>
                 <div class="spinner"></div>
                </div>
                <div v-show="!isLoading">
                  <h3>for <i>{{$store.state.question}}</i><br>{{loadingPlaceholder.responsible}} has decided</h3>
                  <h1><span class="animate-pulse">{{$store.state.response.toUpperCase()}}</span></h1>
                  <div>
                    <img :src="$store.state.image" :alt="$store.state.response" class="object-contain h-48 w-full m-auto" />
                  </div>

                </div>
        </section>
        <button v-if="!isLoading" @click="$store.commit('setQuestion', '')" class="bg-button text-white font-bold py-2 rounded-full shadow-lg hover:shadow-xl transition duration-200 restart-button">↻</button>
    </main>
</template>

<script>
export default {
  name: 'Result',
  data: function () {
    return {
      isLoading: true,
      audio: null,
      loadingPlaceholders: [
        {
          placeholder: 'Calculating possibilites...',
          responsible: 'The CPU'
        },
        {
          placeholder: 'Checking with the president...',
          responsible: 'The president'
        },
        {
          placeholder: 'Calling Alfred...',
          responsible: 'Alfred'
        },
        {
          placeholder: 'Praying to God...',
          responsible: 'God'
        },
        {
          placeholder: 'Checking the Cosmos...',
          responsible: 'Cosmos'
        }
      ]
    }
  },
  computed: {
    loadingPlaceholder: function () {
      const random = Math.floor(Math.random() * this.loadingPlaceholders.length)
      return this.loadingPlaceholders[random]
    }
  },
  mounted () {
    this.$store.dispatch('getResult').then(
      () => {
        setTimeout(() => {
          this.isLoading = false
          this.audio = new Audio(require('../assets/audio/' + this.$store.state.response + '.ogg'))
          this.audio.play()
        }, 5000)
      }
    )
  },
  unmounted () {
    this.audio.pause()
    this.audio.currentTime = 0
  },
  methods: {

  }
}
</script>
<style scoped>
* {
  color: #0F4C5C;
}
h1 {
  font-size: 2rem;

}
h1 span {
  color: #9A031E;
}
h3 {
  font-size: 1.5rem;
}
h3 i {
  color: #E36414;
}
.min-h-400 {
  min-height: 400px;
}
@keyframes spinner {
  to {transform: rotate(360deg);}
}
.bg-button{
  background-color: #FB8B24;
}
.bg-button:hover{
  background-color: #E36414;
}
.spinner:before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 6px solid transparent;
  border-top-color: #0F4C5C;
  border-bottom-color: #0F4C5C;
  animation: spinner .8s ease infinite;
}
.restart-button {
    font-size: 2rem;
    width: 4rem;
    height: 4rem;
    position: absolute;
    top: -2rem;
    right: -2rem;
    transform: rotate(90deg);
    transition: transform 2s;
}
.restart-button:hover {
    transform: rotate(180deg);
}
/* https://coolors.co/5f0f40-9a031e-fb8b24-e36414-0f4c5c */
</style>
