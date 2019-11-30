<template>
  <v-layout col justify-center align-center>
    <v-flex xs6 sm6 md6>
      <div class="text-center">
        <AddProfileCard />
        <br />
        <beijing />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AddProfileCard from '~/components/AddProfileCard.vue'
import Beijing from '~/components/Beijing.vue'

export default {
  components: {
    AddProfileCard,
    Beijing
  }
}
</script>
