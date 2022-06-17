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
      disabled: [false, false, false, false, false, false, false, false, false]
    }
  },


  actions: {
    changeState(x, y) {
      this.matrixState[x][y] = this.currentFigure
      this.currentFigure === "O" ? this.currentFigure = "X" : this.currentFigure = "O"
    },
    reset() {
      this.disabled = [false, false, false, false, false, false, false, false, false]
      for (let i = 0; i < this.matrixState.length; i++) {
        for (let j = 0; j < this.matrixState[i].length; j++) {
          this.matrixState[i][j] = ""
        }
      }
      this.currentFigure = "X"
    },
    checkWinner() {
      let counter = 0
      let currentStateTemp = ""
      let places = [["", ""],
                    ["", ""],
                    ["", ""]]
      for (let x = 0; x < 3; x++) {
        counter = 0;
        currentStateTemp = this.matrixState[x][0];
        if (currentStateTemp != "") {
          for (let y = 0; y < 3; y++) {
            if (this.matrixState[x][y] == currentStateTemp) {
              counter++
              places[y][0] = x
              places[y][1] = y
            }
            if (counter == 3) {
              this.currentFigure === "O" ? this.currentFigure = "X" : this.currentFigure = "O"
              return (places)
            }
          }
        }
      }
      for (let y = 0; y < 3; y++) {
        let counter = 0;
        let currentStateTemp = this.matrixState[0][y];
        if (currentStateTemp != "") {
          for (let x = 0; x < 3; x++) {
            if (this.matrixState[x][y] == currentStateTemp) {
              places[x][0] = x
              places[x][1] = y
              counter++
            }
            if (counter == 3) {
              this.currentFigure === "O" ? this.currentFigure = "X" : this.currentFigure = "O"
              return (places)
            }
          }
        }
      }
      counter = 0;
      currentStateTemp = this.matrixState[0][0];
      for (let x = 0; x < 3; x++) {
        if (this.matrixState[x][x] == currentStateTemp && this.matrixState[x][x] != "") {
          places[x][0] = x
          places[x][1] = x
          counter++
          if (counter == 3) {
            this.currentFigure === "O" ? this.currentFigure = "X" : this.currentFigure = "O"
            return (places)
          }
        }
      }
      counter = 0;
      currentStateTemp = this.matrixState[0][2];
      for (let x = 0; x < 3; x++) {
        if (this.matrixState[x][2 - x] == currentStateTemp && this.matrixState[x][2 - x] != "") {
          places[x][0] = x
          places[x][1] = 2-x
          counter++
          if (counter == 3) {
            this.currentFigure === "O" ? this.currentFigure = "X" : this.currentFigure = "O"
            return (places)
          }
        }
      }
      return
    }
  },
})
