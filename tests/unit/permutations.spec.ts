import { shallowMount } from "@vue/test-utils";
import PermutationsComponentVue from "@/components/PermutationsComponent.vue";

describe("SmileyFace", () => {
  const testCase = [
    { input: "a", result: ["a"] },
    { input: "ab", result: ["ab", "ba"] },
    { input: "abc", result: ["abc", "acb", "bac", "bca", "cab", "cba"] },
    {
      input: "aabb",
      result: ["aabb", "abab", "abba", "baab", "baba", "bbaa"],
    },
  ];
  test.each(testCase)(
    "should result permutation of string correctly",
    async ({ input, result }) => {
      const wrapper = shallowMount(PermutationsComponentVue);

      const inputElement = wrapper.find("input");
      await inputElement.setValue(input);

      expect(wrapper.find("div.result").text()).toContain(
        JSON.stringify(result.sort())
      );
    }
  );
});
