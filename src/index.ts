export default function (i: number): number | string {

    let isThreeDivide: number = i % 3;
    let isFiveDivide: number = i % 5;

    if (!isThreeDivide && !isFiveDivide) {
        return "fizzbuzz";
    }
    if (!isThreeDivide) {
        return "fizz";
    }
    if (!isFiveDivide) {
        return "buzz";
    }

    return i;
}