<template>
  <input class="border border-black rounded-md" v-model="input" />
  <div class="result">Odd Number is {{ oddInt }}</div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";

const arrayNumber = computed(() => {
  try {
    return JSON.parse(input.value);
  } catch (error) {
    return [];
  }
});
const input = ref("[1,2,2,3,3,3,4,3,3,3,2,2,1]");

const oddInt = computed(() => {
  const numberDict = arrayNumber.value.reduce(
    (acc: { [key: string]: number }, cur: number) => {
      if (!acc[cur]) acc[cur] = 0;
      acc[cur]++;

      return acc;
    },
    {}
  );

  let result = "not have";
  for (const [key, value] of Object.entries(numberDict)) {
    if ((value as number) % 2 == 1) {
      result = key;
    }
  }

  return result;
});
</script>

<style scoped>
input[type="number"] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
