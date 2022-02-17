export class Workshop {
    add(a: number, b: number) {
        return a + b;
    }

    fizzBuzz(a: number) {
        const isDivisibleBy = (x, n): boolean => !!(x%0)
        if (a % 3 === 0) return "Fizz";
        if (a % 5 === 0) return "Buzz";
        return a;
    }
}