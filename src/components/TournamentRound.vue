<template>

  <div class="round-item">
    <span class="round-number-item">
      Round {{ round.numberRound }}
    </span>
    <ul class="round-item">

      <li class="match-item"
          v-for="match in matchList.filter( match => match.numberRound === round.numberRound )" :key="match.id">

        <tournament-match :match="match"
                          :last-match="match === matchList[matchList.length - 1]"
                          :winner="winner"/>
      </li>
    </ul>
  </div>
</template>

<script>
import TournamentMatch from "@/components/TournamentMatch"
export default {
  name: "TournamentRound",
  components: { TournamentMatch },
  data() {
    return {}
  },
  props: {
    round: {
      type: Object,
      required: true,
      default: null
    },
    matchList: {
      type: Array,
      required: true,
      default: null
    },
    winner: {
      type: Object
    }
  }
}
</script>

<style scoped>
.round-number-item {
  width: 88px;
  background-color: #bff1bf;
  padding: 13px 84px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 -3px 6px 0;
  font-size: 20px;
}

.round-item {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 3px 10px;
}

.match-item {
  display: flex;
  flex: 0 1 auto;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
</style>