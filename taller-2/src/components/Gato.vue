<script>
import { useGatoStore } from "@/stores/GatoStore"

export default {
  data() {
    return {

    }
  },
  setup() {
    const gatoStore = useGatoStore()
    return {
      gatoStore,
    }
  },
  methods: {
    changeState: function (x, y, id) {
      this.gatoStore.changeState(x, y)
      this.gatoStore.disabled[id] = true
    },
    reset: function () {
      this.gatoStore.reset()
    }
  },
};
</script>

<template>
  <main>
    <div>
      <h1>Gato</h1>
      <b-button @click="reset" variant="outline-dark" size="lg">Reset</b-button>
    </div>
    <div class="container" style="width: 15%;">
      <div class="row">
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(0, 0, 0)" :disabled="gatoStore.disabled[0]" variant="outline-dark" size="lg">
            {{ gatoStore.matrixState[0][0] }}</b-button>
        </div>
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(0, 1, 1)" :disabled="gatoStore.disabled[1]" variant="outline-dark" size="lg">
            {{ gatoStore.matrixState[0][1] }}</b-button>
        </div>
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(0, 2, 2)" :disabled="gatoStore.disabled[2]" variant="outline-dark" size="lg">
            {{ gatoStore.matrixState[0][2] }}</b-button>
        </div>
      </div>
      <div class="row">
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(1, 0, 3)" :disabled="gatoStore.disabled[3]" variant="outline-dark" size="lg">
            {{ gatoStore.matrixState[1][0] }}</b-button>
        </div>
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(1, 1, 4)" :disabled="gatoStore.disabled[4]" variant="outline-dark" size="lg">
            {{ gatoStore.matrixState[1][1] }}</b-button>
        </div>
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(1, 2, 5)" :disabled="gatoStore.disabled[5]" variant="outline-dark" size="lg">
            {{ gatoStore.matrixState[1][2] }}</b-button>
        </div>
      </div>
      <div class="row">
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(2, 0, 6)" :disabled="gatoStore.disabled[6]" variant="outline-dark" size="lg">
            {{ gatoStore.matrixState[2][0] }}</b-button>
        </div>
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(2, 1, 7)" :disabled="gatoStore.disabled[7]" variant="outline-dark" size="lg">
            {{ gatoStore.matrixState[2][1] }}</b-button>
        </div>
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(2, 2, 8)" :disabled="gatoStore.disabled[8]" variant="outline-dark" size="lg">
            {{ gatoStore.matrixState[2][2] }}</b-button>
        </div>
      </div>
    </div>
  </main>
</template>

<!-- <style>
main {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

#container {
  margin-top: 30%;
  justify-content: space-evenly;
  display: grid;
  grid-template-columns: auto auto auto;
}

.button {
  display: flex;
  flex-grow: 1;
}

b-button {
  border-bottom: cornflowerblue;
}
</style> -->