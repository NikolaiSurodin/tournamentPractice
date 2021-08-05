<template>
  <div>
    <tournament/>
  </div>
</template>

<script>
import Tournament from "@/components/TournamentRound"

import {mapGetters} from "vuex"

export default {
  name: "TournamentTable",
  components: {Tournament},
  computed:{
    ...mapGetters([
        'getRoundList',
        'getMatchList'
    ])
  }
}
</script>

<style scoped>

</style>