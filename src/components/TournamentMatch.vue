<template>
  <div class="match"
       :class="{
    twoMatchLine:match.numberMatch % 2 === 0,
    first:match.numberRound===1,
    last:lastMatch,
    completed:match.completed
  }"

  >
    <div class="participant-container">
      <span class="participant-avatar">
        <img src="../assets/logo.png" width="40" height="40" @click="incrementParticipantScore(0)"/>
      </span>
      <p>{{ match.participantList[0].name }}</p>
      <p>-</p>
      <p>{{ match.participantList[1].name }}</p>
      <span class="participant-avatar">
        <img src="../assets/logo.png" width="40" height="40" @click="incrementParticipantScore(1)"/>
      </span>
    </div>
    <div class="score" v-if="match.played">
      {{ match.participantList[0].score }} - {{ match.participantList[1].score }}
    </div>
    <div class="score">
      {{ match.date }}
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"

export default {
  name: "TournamentMatch",
  data() {
    return {}
  },
  props: {
    match: {
      type: Object
    },
    lastMatch: {
      type: Boolean
    },
    winner: {
      type: Object
    }
  },
  methods: {
    ...mapActions([
      'addPoint',
      'createTournamentWinner'
    ]),
    incrementParticipantScore(i) {
      let participant = this.match.participantList[i]
      let participantList = this.match.participantList
      let match = this.match
      if (this.match.played) {
        this.addPoint({
          participant: participant,
          match: match,
          participantList: participantList
        })
      }
      if (this.lastMatch) {
        this.createTournamentWinner()
      }
    }
  }
}
</script>

<style scoped>
.match {
  height: 100px;
  width: 255px;
  background-color: #f1f2ff;
  border: 2px solid #000000;
  border-radius: 10px;
  justify-content: space-between;
  font-weight: bold;
}

.match::after {
  content: '';
  border-color: black;
  border-width: 1px;
  position: absolute;
  display: block;
  width: 5px;
  right: -7px;
  border-right-style: solid;
  border-bottom-style: solid;
  top: 50%;
}

.match::before {
  content: "";
  border-top: 1px solid #00195f;
  position: absolute;
  width: 33px;
  left: -33px;
  top: 50%;
}

.match.first::before {
  display: none;
}

.match.last::after {
  display: none;
}

.match.last::after {
  display: none;
}

.match.completed {
  background-color: #ccfcd9;
  box-shadow: 0 1px 6px 0;
  color: #000000;
}

.twoMatchLine::after {
  content: '';
  height: 100%;
  top: -50%;
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