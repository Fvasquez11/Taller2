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
      this.gatoStore.checkWinner()
    },
    reset: function () {
      this.gatoStore.reset()
    },
  },
};
</script>

<template>
  <main>
    <div class="container d-flex flex-column mb-3 mt-5">
      <h1 class="text-center">Gato</h1>
      <b-button class="w-25 mx-auto" @click="reset" variant="outline-dark" size="lg">Reset</b-button>
    </div>
    <div class="container w-25 mb-2">
      <b-card v-bind:title="this.gatoStore.title" class="text-center">
        <b-form-input class="text-center" v-model="this.gatoStore.currentFigure" disabled></b-form-input>
      </b-card>
    </div>
    <div class="container" style="width: 15%;">
      <div class="row" style="height: 10vh;">
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(0, 0, 0)" :disabled="gatoStore.disabled[0]"
            v-bind:variant="gatoStore.matrixColor[0][0]" size="lg">
            {{ gatoStore.matrixState[0][0] }}</b-button>
        </div>
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(0, 1, 1)" :disabled="gatoStore.disabled[1]"
            v-bind:variant="gatoStore.matrixColor[0][1]" size="lg">
            {{ gatoStore.matrixState[0][1] }}</b-button>
        </div>
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(0, 2, 2)" :disabled="gatoStore.disabled[2]"
            v-bind:variant="gatoStore.matrixColor[0][2]" size="lg">
            {{ gatoStore.matrixState[0][2] }}</b-button>
        </div>
      </div>
      <div class="row" style="height: 10vh;">
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(1, 0, 3)" :disabled="gatoStore.disabled[3]"
            v-bind:variant="gatoStore.matrixColor[1][0]" size="lg">
            {{ gatoStore.matrixState[1][0] }}</b-button>
        </div>
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(1, 1, 4)" :disabled="gatoStore.disabled[4]"
            v-bind:variant="gatoStore.matrixColor[1][1]" size="lg">
            {{ gatoStore.matrixState[1][1] }}</b-button>
        </div>
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(1, 2, 5)" :disabled="gatoStore.disabled[5]"
            v-bind:variant="gatoStore.matrixColor[1][2]" size="lg">
            {{ gatoStore.matrixState[1][2] }}</b-button>
        </div>
      </div>
      <div class="row" style="height: 10vh;">
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(2, 0, 6)" :disabled="gatoStore.disabled[6]"
            v-bind:variant="gatoStore.matrixColor[2][0]" size="lg">
            {{ gatoStore.matrixState[2][0] }}</b-button>
        </div>
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(2, 1, 7)" :disabled="gatoStore.disabled[7]"
            v-bind:variant="gatoStore.matrixColor[2][1]" size="lg">
            {{ gatoStore.matrixState[2][1] }}</b-button>
        </div>
        <div class="col-4 p-0">
          <b-button class="w-100 h-100" @click="changeState(2, 2, 8)" :disabled="gatoStore.disabled[8]"
            v-bind:variant="gatoStore.matrixColor[2][2]" size="lg">
            {{ gatoStore.matrixState[2][2] }}</b-button>
        </div>
      </div>
    </div>
  </main>
</template>