<template>
  <v-card class="mx-auto rounded-corner" max-width="800" tile>
    <v-img height="300" width="auto" src="/temple.jpg">
      <!-- <v-btn rounded color="primary" large> {{ text }} </v-btn> -->
      <div class="bla">
        <v-btn class="bla2" rounded color="primary" large> {{ text }} </v-btn>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      text: 'DOWNLOAD ITINERARY'
    }
  }
}
</script>

<style scoped>
.rounded-corner {
  border-radius: 2rem;
}

.bla {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
}

.bla2 {
  margin: 30px;
}
</style>
