<template>
  <div>
    <tournament :match-list="getMatchList"
                :round-list="getRoundList"
                :winner="winner"
    />
  </div>
</template>

<script>
import Tournament from "@/components/Tournament";

import {mapGetters} from "vuex"

export default {
  name: "TournamentTable",
  components: {Tournament},
  props:{
    winner:{
      type:Object
    }
  },
  computed: {
    ...mapGetters([
      'getRoundList',
      'getMatchList'
    ])
  }
}
</script>

<style scoped>

</style>