import { Service } from "../../src/service/Service";

describe("Service Tests", () => {
  test("returnFive actually returns 5", () => {
    const result = Service.returnFive();

    expect(result).toEqual(5);
    expect(typeof result).toEqual("number");
  });
});
