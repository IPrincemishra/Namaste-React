import { Sum } from "../Sum"


test("sum fnc should calculate the sum  of two numbers", () => {

    const res = Sum(5, 4);

    // Asseration
    expect(res).toBe(9);
})