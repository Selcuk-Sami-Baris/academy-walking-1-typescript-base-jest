export class Workshop {
    add(a: number, b: number) {
        return a + b;
    }

    fizzBuzz(a: number) {
        const isDivisibleByThree = a % 3 === 0;
        const isDivisibleByFive = a % 5 === 0;
        if (isDivisibleByThree && isDivisibleByFive) return "FizzBuzz";
        if (isDivisibleByThree) return "Fizz";
        if (isDivisibleByFive) return "Buzz";
        return a;
    }
}