<template>
  <div class="match">
    <div class="participant-container">
      <span class="participant-avatar">
        <img src="../assets/logo.png" width="40" height="40"/>
      </span>
      <p>Player1</p>
      <p>-</p>
      <p>Player2</p>
      <span class="participant-avatar">
        <img src="../assets/logo.png" width="40" height="40"/>
      </span>
    </div>
    <div class="score">
      0 - 0
    </div>
    <div class="score">
      05.08.2021
    </div>
  </div>
</template>

<script>
export default {
  name: "TournamentMatch",
  data() {
    return {}
  }
}
</script>

<style scoped>
.match {
  height: 101px;
  width: 255px;
  background-color: #c0c5ff;
  border: 2px solid #000000;
  border-radius: 10px;
  justify-content: space-between;

}

.participant-container {
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 0 6px;
  max-width: 300px;
}

.score {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.participant-avatar {
  border-radius: 50%;
  height: 40px;
  width: 40px;
}

.participant-avatar:hover {
  transform: scale(1.3, 1.3);
  -webkit-transform: scale(1.3, 1.3);
  cursor: pointer;
}
</style>