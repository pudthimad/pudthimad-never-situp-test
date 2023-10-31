import { shallowMount } from "@vue/test-utils";
import OddIntComponentVue from "@/components/OddIntComponent.vue";

describe("SmileyFace", () => {
  const testCase = [
    { input: "[7]", result: 7 },
    { input: "[0]", result: 0 },
    { input: "[1,1,2]", result: 2 },
    { input: "[0,1,0,1,0]", result: 0 },
    { input: "[1,2,2,3,3,3,4,3,3,3,2,2,1]", result: 4 },
  ];
  test.each(testCase)(
    "should result odd int of int array correctly",
    async ({ input, result }) => {
      const wrapper = shallowMount(OddIntComponentVue);

      const inputElement = wrapper.find("input");
      await inputElement.setValue(input);

      expect(wrapper.find("div.result").text()).toBe(`Odd Number is ${result}`);
    }
  );
});
