<script>
export default {
  data() {},
};
</script>

<template>
  <main>
    <div><h1>Gato</h1></div>

    <div>
      <div id="container">
        <div class="d-grid"><b-button id="1" data-x="0" data-y="0" variant="outline-dark" size="lg">X</b-button></div>
        <div class="d-grid"><b-button id="2" data-x="1" data-y="0" variant="outline-dark" size="lg">X</b-button></div>
        <div class="d-grid"><b-button id="3" data-x="2" data-y="0" variant="outline-dark" size="lg">O</b-button></div>
        <div class="d-grid"><b-button id="4" data-x="0" data-y="1" variant="outline-dark" size="lg">O</b-button></div>
        <div class="d-grid"><b-button id="5" data-x="1" data-y="1" variant="outline-dark" size="lg">O</b-button></div>
        <div class="d-grid"><b-button id="6" data-x="2" data-y="1" variant="outline-dark" size="lg">X</b-button></div>
        <div class="d-grid"><b-button id="7" data-x="0" data-y="2" variant="outline-dark" size="lg">X</b-button></div>
        <div class="d-grid"><b-button id="8" data-x="1" data-y="2" variant="outline-dark" size="lg">X</b-button></div>
        <div class="d-grid"><b-button id="9" data-x="2" data-y="2" variant="outline-dark" size="lg">O</b-button></div>
      </div>
    </div>
  </main>
</template>

<style>
main {
  display: flex;
  flex-flow: column  wrap;
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
</style>