import { defineStore } from 'pinia'

export const useGatoStore = defineStore('Gato', {
  state: () => {
    return {
      //true es circulo, false es equis 
      currentFigure: "X",
      matrixState:
        [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ],
    }
  },

  actions: {
    changeState(x,y){
      this.matrixState[x][y] = currentFigure
      currentFigure = "O"
    },
  },
})
