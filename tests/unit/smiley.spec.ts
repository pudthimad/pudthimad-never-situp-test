import { shallowMount } from "@vue/test-utils";
import SmileyFaceComponentVue from "@/components/SmileyFaceComponent.vue";

describe("SmileyFace", () => {
  const testCase = [
    { input: "[':)', ';(', ';}', ':-D']", result: 2 },
    { input: "[';D', ':-(', ':-)', ';~)']", result: 3 },
    { input: "[';]', ':[', ';*', ':$', ';-D']", result: 1 },
  ];
  test.each(testCase)(
    "should count smileys correctly",
    async ({ input, result }) => {
      const wrapper = shallowMount(SmileyFaceComponentVue);

      const inputElement = wrapper.find("input");
      await inputElement.setValue(input);

      expect(wrapper.find("div.result").text()).toBe(
        `Total Smiley Face is ${result}`
      );
    }
  );
});
