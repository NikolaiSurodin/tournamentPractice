<template>
  <div class="page">
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
.page{
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>