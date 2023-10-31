<template>
  <input class="border border-black rounded-md" v-model="input" />
  <div class="result">Total Smiley Face is {{ totalSmile }}</div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

const input = ref("[':)', ';(', ';}', ':-D']");

const smileArray = computed(() => {
  try {
    return JSON.parse(input.value.replaceAll("'", '"'));
  } catch (error) {
    return [];
  }
});

const checkSmileyFace = (face: string) => {
  let eye = face[0];
  let nose = face.length == 2 ? null : face[1];
  let mouth = face.length == 3 ? face[2] : face[1];

  let eyeValid = false;
  let noseValid = nose ? false : true;
  let mouthValid = false;

  if ([";", ":"].includes(eye)) {
    eyeValid = true;
  }

  if (nose && ["-", "~"].includes(nose)) {
    noseValid = true;
  }

  if ([")", "D"].includes(mouth)) {
    mouthValid = true;
  }

  return eyeValid && noseValid && mouthValid;
};

const totalSmile = computed(() => {
  return smileArray.value.filter(checkSmileyFace).length;
});
</script>
