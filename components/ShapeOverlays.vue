<template>
  <svg class="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path class="shape-overlays__path" v-for="i in numPoints" :key="i" :d="pathData[i]"></path>
  </svg>
</template>

<script setup>
    const numPoints = 18;
    const duration = 600;
    const delayPointsMax = 300;
    const delayPerPath = 100;

    const isOpened = ref(false);
    const timeStart = ref(0);
    const pathData = ref([]);

    const delayPointsArray = computed(() => {
      const array = [];
      for (let i = 0; i < numPoints; i++) {
        const radian = i / (numPoints - 1) * Math.PI;
        array.push((Math.sin(-radian) + Math.sin(-radian * (4 * Math.random() + 6)) + 2) / 4 * delayPointsMax);
      }
      return array;
    });

    const ease = {
      cubicInOut: (t) => {
        return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
      },
    };

    const updatePath = (i, time) => {
      const points = [];
      for (let j = 0; j < numPoints + 1; j++) {
        points[j] = ease.cubicInOut(Math.min(Math.max(time - delayPointsArray.value[j], 0) / duration, 1)) * 100;
      }

      let str = '';
      str += isOpened.value ? `M 0 0 V ${points[i]} ` : `M 0 ${points[i]} `;
      for (let j = 0; j < numPoints - 1; j++) {
        const p = (j + 1) / (numPoints - 1) * 100;
        const cp = p - (1 / (numPoints - 1) * 100) / 2;
        str += `C ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]} `;
      }
      str += isOpened.value ? `V 0 H 0` : `V 100 H 0`;
      return str;
    };

    const render = () => {
      for (let i = 0; i < numPoints; i++) {
        const time = Date.now() - (timeStart.value + delayPerPath * (isOpened.value ? i : numPoints - i - 1));
        pathData.value[i] = updatePath(i, time);
      }
    };

    const renderLoop = () => {
      render();
      if (Date.now() - timeStart.value < duration + delayPerPath * (numPoints - 1) + delayPointsMax) {
        requestAnimationFrame(renderLoop);
      }
    };

    const toggle = () => {
      isOpened.value = !isOpened.value;
      timeStart.value = Date.now();
      renderLoop();
    };

    onMounted(() => {
      pathData.value = new Array(numPoints).fill('');
    });
</script>