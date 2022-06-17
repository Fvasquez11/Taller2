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
        ],
      disabled : [false,false,false,false,false,false,false,false,false]
    }
  },
  

  actions: {
    changeState(x,y){
      this.matrixState[x][y] = this.currentFigure
      this.currentFigure === "O" ? this.currentFigure = "X" : this.currentFigure = "O"
    },
    reset(){
      this.disabled = [false,false,false,false,false,false,false,false,false]
      for(let i = 0; i < this.matrixState.length; i++){
        for(let j = 0; j < this.matrixState[i].length; j++){
          this.matrixState[i][j] = ""
        }
      }
      this.currentFigure = "X"
    }
  },
})
