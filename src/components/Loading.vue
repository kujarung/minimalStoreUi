<template>
  <div class="text-center">
    <v-overlay z-index="1000">
      <div class="text-center">
        <v-progress-circular
          indeterminate
          color="#7749C2"
        ></v-progress-circular>
      </div>
    </v-overlay>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  data: () => ({}),
}
</script>
