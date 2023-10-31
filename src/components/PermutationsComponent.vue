<template>
  <div>
    <input class="border border-black rounded-md" type="text" v-model="input" />
  </div>
  <div class="result">
    Unique Permutations of '{{ input }}' is {{ permutations }}
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";

const input = ref("aabb");

const permutations = computed(() => {
  const initialPermutations = new Set([""]);

  const result = input.value.split("").reduce((permutations, currentChar) => {
    const newPermutations = new Set<string>([]);

    permutations.forEach((permutation) => {
      for (let i = 0; i <= permutation.length; i++) {
        const newPermutation =
          permutation.slice(0, i) + currentChar + permutation.slice(i);
        newPermutations.add(newPermutation);
      }
    });

    return newPermutations;
  }, initialPermutations);

  return JSON.stringify(Array.from(result).sort());
  // return result;
});
</script>
