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

    leapYear(y: number) {
        if (y % 4 === 0) {
            if (y % 100 === 0) {
                return false;
            }
            return true;
        } 
        return false;
    }
}