export default function (i: number): number | string {

    let isThreeDivide: boolean = i % 3 == 0;
    let isFiveDivide: boolean = i % 5 == 0;

    if (isThreeDivide && isFiveDivide) {
        return "fizzbuzz";
    }
    if (isThreeDivide) {
        return "fizz";
    }
    if (isFiveDivide) {
        return "buzz";
    }

    return i;
}