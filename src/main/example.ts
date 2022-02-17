export class Workshop {
    add(a: number, b: number) {
        return a + b;
    }

    fizzBuzz(a: number) {
        if (a === 3) return "Fizz";
        if (a === 5) return "Buzz";
        return a;
    }
}