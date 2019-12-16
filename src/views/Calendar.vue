<template>
  <div class="text-center">
    <v-btn small @click="crearEvento">Send Reminder</v-btn>
  </div>
</template>

<script>
//import { listEvents } from 'index.js'

export default {
  
    name: 'Calendar',
    data() {
        return {
            }
    },
  methods: {
    crearEvento () {
      listEvents()
    }
  }
};
</script>