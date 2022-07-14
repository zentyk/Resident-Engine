<script lang="ts">
import App from './Framework/App';
import {onMounted, ref} from 'vue';

export default {
  name: "BabylonScene",
  setup() {
    const canvas = ref<HTMLCanvasElement | null>(null);

    onMounted(() => {
      if (canvas.value) {
        let game = new App(canvas.value);
        game.Run();
      }
    });

    return {
      canvas,
    };
  },
};
</script>

<template>
  <canvas ref="canvas"></canvas>
</template>

<style scoped>
  canvas {
    width: 100%;
    height: 100%;
  }
</style>