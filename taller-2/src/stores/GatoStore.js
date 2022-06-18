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
      matrixColor:
        [
          ["outline-dark", "outline-dark", "outline-dark"],
          ["outline-dark", "outline-dark", "outline-dark"],
          ["outline-dark", "outline-dark", "outline-dark"],
        ],
      disabled: [false, false, false, false, false, false, false, false, false],
      title: "Turno del jugador"
    }
  },


  actions: {
    changeState(x, y) {
      this.matrixState[x][y] = this.currentFigure
      this.currentFigure === "O" ? this.currentFigure = "X" : this.currentFigure = "O"
      if (this.checkWinner()) {
        this.setWinner(this.checkWinner())
        this.disabled = [true, true, true, true, true, true, true, true, true]
        this.title = "Ha ganado el jugador:"
      }
    },
    reset() {
      this.disabled = [false, false, false, false, false, false, false, false, false]
      this.matrixColor = [
        ["outline-dark", "outline-dark", "outline-dark"],
        ["outline-dark", "outline-dark", "outline-dark"],
        ["outline-dark", "outline-dark", "outline-dark"],
      ]
      for (let i = 0; i < this.matrixState.length; i++) {
        for (let j = 0; j < this.matrixState[i].length; j++) {
          this.matrixState[i][j] = ""
        }
      }
      this.currentFigure = "X"
      this.title = "Turno del jugador"
    },
    setWinner(positions) {
      for (let i = 0; i < positions.length; i++) {
        this.matrixColor[positions[i][0]][positions[i][1]] = "success"
      }
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
          places[x][1] = 2 - x
          counter++
          if (counter == 3) {
            this.currentFigure === "O" ? this.currentFigure = "X" : this.currentFigure = "O"
            return (places)
          }
        }
      }
      return false
    }
  },
})
