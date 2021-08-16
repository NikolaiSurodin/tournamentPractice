<template>
  <div class="match"
       :class="{
    twoMatchLine:match.numberMatch % 2 === 0,
    first:match.numberRound === 1,
    last:lastMatch,
    completed:match.completed
  }">

    <div class="participant-container">
      <span class="participant-avatar">
        <img class="logo" src="../assets/avatar.png" alt="logo"
             @click="incrementParticipantScore(match.participantList[0].id)"/>
      </span>

      <p @drop='onDrop($event,match.participantList[0].id)'
         @dragover.prevent
         @dragenter.prevent>{{ match.participantList[0].name }}</p>

      <p>-</p>

      <p @drop='onDrop($event, match.participantList[1].id)'
         @dragover.prevent
         @dragenter.prevent>{{ match.participantList[1].name }}</p>

      <span class="participant-avatar">
        <img class="logo" src="../assets/avatar.png" alt="logo"
             @click="incrementParticipantScore(match.participantList[1].id)"/>
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
    onDrop(evt, id) {
      if ( this.match.numberRound === 1 && this.match.random !== true ) {
        let name = evt.dataTransfer.getData( 'name' )
        let matchId = this.match.id
        this.createNameForPlayer( { name, id, matchId } )
        this.filterNameList( name )
      }
    },
    ...mapActions( [
      'addPoint',
      'createTournamentWinner',
      'createNameForPlayer',
      'filterNameList'
    ] ),
    incrementParticipantScore(id) {
      if ( this.match.played ) {
        let match = this.match
        this.addPoint( { match, participantId: id } )
      }
      if ( this.lastMatch && !this.winner ) {
        this.createTournamentWinner()
      }
    }
  }

}
</script>

<style scoped>
.draggable {
  height: 20px;
}

.match {
  height: 114px;
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
  width: 10px;
  right: -10px;
  border-right-style: solid;
  border-bottom-style: solid;
  top: 50%;
}

.match::before {
  content: "";
  border-top: 1px solid #00195f;
  position: absolute;
  width: 31px;
  left: -31px;
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
  background-color: #defce6;
  box-shadow: 0 1px 6px 0;
  color: #000000;
}

.match.completed:after {
  border-color: #00ff05;
  border-width: 2px;
  position: absolute;
  display: block;
  width: 10px;
  right: -10px;
}

.match.completed.last:after {
  display: none;
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

.participant-container p {
  border-bottom: 1px solid;
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

.logo {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.participant-avatar:hover {
  transform: scale(1.3, 1.3);
  -webkit-transform: scale(1.3, 1.3);
  cursor: pointer;
}
</style>