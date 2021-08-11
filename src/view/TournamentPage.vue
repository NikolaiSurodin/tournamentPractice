<template>
  <div>
    <template>
      <form class="form">
        <h1>Турнир</h1>
        <input class="input"
               placeholder="Количество участников"
               v-model.number="tournament.participantCount">
        <input class="input"
               placeholder="Количество очков за матч"
               @keydown.enter="addTournament"
               v-model.number="tournament.numberOfGames">
        <button type="button"
                class="btn"
                @click.prevent="addTournament"
                :disabled="!valid"
                :class="{disabled:!valid}">

          Создать турнир

        </button>
      </form>
    </template>

    <template>
      <div class="participant-name">
        <ul class="name-list">
          <draggable class="name-list" v-model="getNameList" group="people" @start="drag=true" @end="drag=false">
            <div class="name-item" v-for="(name, idx) in getNameList" :key="idx">{{ name }}</div>
          </draggable>
        </ul>
      </div>
    </template>

    <template>
      <div class="winner" v-if="winner">

        Победитель: {{ winner.name }}

      </div>
    </template>

    <template>
      <tournament-table :winner="winner"/>
    </template>
  </div>
</template>

<script>
import {Tournament} from "@/classes/Tournament"
import TournamentTable from "@/view/TournamentTable"
import draggable from 'vuedraggable'

import {mapActions} from "vuex"
import {mapGetters} from "vuex"

export default {
  name: "TournamentPage",
  components: { TournamentTable, draggable },
  data() {
    return {
      arr:['kolya', 'sasha'],
      tournament: new Tournament( {
        participantCount: this.participantCount,
        numberOfGames: this.numberOfGames
      } )
    }
  },
  methods: {
    ...mapActions( [
      'createTournament'
    ] ),
    addTournament() {
      this.createTournament( this.tournament )
          .then( (tournament) => {
            this.tournament = tournament
            this.tournament.participantCount = ''
            this.tournament.numberOfGames = ''
          } )
          .catch( err => console.log( err ) )
    }
  },
  computed: {
    ...mapGetters( [
      'getTournamentWinner',
      'getNameList'
    ] ),
    valid() {
      return this.tournament.participantCount && this.tournament.numberOfGames
    },
    winner() {
      return this.getTournamentWinner
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
  margin-top: 20px;
  background-color: #f1f2fa;
}

.btn.disabled {
  background-color: #ffffff;
  color: #e2e2e2;
}

.btn:hover {
  background-color: #c2f8b3;
  color: black;
  transition: all .4s ease;
  cursor: pointer;
}

.winner {
  width: 88px;
  background-color: #daff00;
  padding: 13px 84px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 -3px 6px 0;
  font-size: 20px;
  position: relative;
  margin: 16px auto;
}

.participant-name {
  width: 160px;
  position: absolute;
  top: 40px;
  left: 15px;
}

.name-list {
  line-height: 10px;
  list-style: none;
}

.name-item {
  border: 1px solid;
  padding: 5px 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 5px;
}

</style>