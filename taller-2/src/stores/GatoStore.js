import { defineStore } from 'pinia'

export const useGatoStore = defineStore('useGatoStore', {
  state: () => {
    return {
      currentFigure: "X",
      matrixState:
        [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ],
      disabled : [false,false,false,false,false,false,false,false,false]
    }
  },
  

  actions: {
    changeState(x,y){
      this.matrixState[x][y] = this.currentFigure
      this.currentFigure === "O" ? this.currentFigure = "X" : this.currentFigure = "O"
    },
  },
})
