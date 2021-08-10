<template>
  <div>
    <div class="tournament" v-if="!checkedName">
      <div class="round"
           v-for="round in roundList" :key="round.numberRound">
        <tournament-round
            :match-list="matchList"
            :round="round"
            :winner="winner"/>
      </div>
    </div>
    <div v-else>
      Не хватает свободных имен
    </div>
  </div>
</template>

<script>
import TournamentRound from "@/components/TournamentRound";

export default {
  name: "Tournament",
  components: { TournamentRound },
  data() {
    return {}
  },
  props: {
    matchList: {
      type: Array
    },
    roundList: {
      type: Array
    },
    winner: {
      type: Object
    }
  },
  computed: {
    checkedName() {
      for (let match of this.matchList) {
        for (let participant of match.participantList) {
          if ( participant.name === 'NO NAME' ) {
            return true
          }
        }
      }
      return false
    }
  },

}
</script>

<style scoped>

.tournament {
  display: flex;
  margin: auto 16%;
  flex-direction: row;
  max-width: 20%;
  min-height: 50%;
  margin-top: 20px;
}

</style>