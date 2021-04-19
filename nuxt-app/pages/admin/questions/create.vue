<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs8>
        <v-card>
          <v-card-title>
            <h1 class="display-1">Add Questions</h1>
            <v-spacer></v-spacer>
            <v-btn small color="green darken-2" dark>All Questions</v-btn>
          </v-card-title>
          <v-card-text>
            <form>
              <v-text-field label="Question" solo></v-text-field>
              <v-text-field label="Option 1" solo></v-text-field>
              <v-text-field label="Option 2" solo></v-text-field>
              <v-text-field label="Option 3" solo></v-text-field>
              <v-text-field label="Option 4" solo></v-text-field>
            </form>
            <v-flex>
              <v-radio-group>
                <p>Choose Correct Answer</p>
                <v-radio></v-radio>
                <v-radio></v-radio>
                <v-radio></v-radio>
                <v-radio></v-radio>
              </v-radio-group>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>

<style></style>
