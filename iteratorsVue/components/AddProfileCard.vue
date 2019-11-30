<template>
  <v-card
    class="mx-auto rounded-corner"
    max-width="700"
    tile
    color="blue lighten-2"
  >
    <v-row align="end" class="fill-height">
      <v-col cols="4" sm="3" md="3" class="pa-10">
        <v-avatar class="profile" color="grey" size="90">
          <img src="Ebonom.jpg" alt="" />
        </v-avatar>
      </v-col>
      <v-col cols="4" sm="6" md="6" align-self="center">
        <v-list-item color="rgba(0, 0, 0, .4)" dark>
          <v-list-item-content>
            <v-list-item-title class="user-title title"
              >Ebonom Mfam</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="2" sm="3" md="3" align-self="center">
        <v-icon large>mdi-plus-circle</v-icon>
      </v-col>

      <v-row>
        <v-col class="py-0">
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="title">Position</v-list-item-title>
              <v-list-item-subtitle
                >Junior Front-end Developer</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col class="py-0">
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="title">Company</v-list-item-title>
              <v-list-item-subtitle>Iterators</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pa-10 py-0">
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-subtitle>Employee #:232564</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-icon color="white">mdi-dots-horizontal</v-icon>
        </v-col>
      </v-row>
    </v-row>
  </v-card>
</template>

<style scoped>
.rounded-corner {
  border-radius: 2rem;
}
.user-title {
  font-weight: bold;
}
</style>
