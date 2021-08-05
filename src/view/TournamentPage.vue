<template>
  <div>
    <template>
      <form class="form">
        <h1>Турнир</h1>
        <input class="input" placeholder="Количество участников" v-model.number="tournament.participantCount">
        <input class="input" placeholder="Количество очков за матч" v-model.number="tournament.numberOfGames">
        <button type="button" class="btn" @click.prevent="addTournament">Создать турнир</button>
      </form>
    </template>
    <template>
      <tournament-table/>
    </template>
  </div>
</template>

<script>
import {Tournament} from "@/classes/Tournament"
import TournamentTable from "@/view/TournamentTable"

import {mapActions} from "vuex"

export default {
  name: "TournamentPage",
  components: {TournamentTable},
  data() {
    return {
      tournament: new Tournament({
        participantCount: this.participantCount,
        numberOfGames: this.numberOfGames
      })
    }
  },
  methods: {
    ...mapActions([
      'createTournament'
    ]),
    addTournament() {
      this.createTournament(this.tournament)
          .then()
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.form {
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.input {
  width: 235px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #000;
  border-radius: 5px;

}

.input + .input {
  margin-top: 15px;
}

.input:focus {
  outline: none;
}

.btn {
  height: 45px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: #000000;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  background-color: #f1f2fa;
}

.btn:hover {
  background-color: #c2f8b3;
  color: black;
  transition: all .4s ease;

}
</style>