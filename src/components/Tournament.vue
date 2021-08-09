<template>
  <div class="tournament">

    <div class="round"
         v-for="round in roundList" :key="round.numberRound"
    >

      <tournament-round :match-list="matchList"
                        :round="round"
                        :winner="winner"
      />

    </div>


  </div>
</template>

<script>
import TournamentRound from "@/components/TournamentRound";

export default {
  name: "Tournament",
  components: {TournamentRound},
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

  }
}
</script>

<style scoped>

.tournament {
  display: flex;
  margin: 50px 0;
  max-width: 0;
}
</style>