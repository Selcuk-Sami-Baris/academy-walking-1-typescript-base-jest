import {Workshop} from "../main/example";

describe('Workshop', () => {
    describe.skip('Add', () => {
        it("should give sum of a + b when adding a and b", () => {
            let example: Workshop = new Workshop();
            expect(example.add(1, 2)).toBe(3);
        })
    })

describe.skip('fizzBuzz', () => {
    it("Given one return one" , () => {
        let example: Workshop = new Workshop();
        expect(example.fizzBuzz(1)).toBe(1);
    })

    it("Given two return two" , () => {
        let example: Workshop = new Workshop();
        expect(example.fizzBuzz(2)).toBe(2);
    })

    it("Given three return Fizz" , () => {
        let example: Workshop = new Workshop();
        expect(example.fizzBuzz(3)).toBe("Fizz");
    })

    // as this passed without any new code being added, was this test worth adding?
    it("Given four return four", () => {
        let example: Workshop = new Workshop();
        expect(example.fizzBuzz(4)).toBe(4);
    })

    it("Given five return Buzz", () => {
        let example: Workshop = new Workshop();
        expect(example.fizzBuzz(5)).toBe("Buzz");
    })

    it("Given six return Fizz", () => {
        let example: Workshop = new Workshop();
        expect(example.fizzBuzz(6)).toBe("Fizz");
    })

    it("Given 10 return Buzz", () => {
        let example: Workshop = new Workshop();
        expect(example.fizzBuzz(10)).toBe("Buzz");
    })

    it("Given 15 return FizzBuzz", () => {
        let example: Workshop = new Workshop();
        expect(example.fizzBuzz(15)).toBe("FizzBuzz");
    })
})
/**
 * Write a function that returns true or false depending on whether its input integer is a leap year or not. 
A leap year is defined as one that is divisible by 4, but is not otherwise divisible by 100 unless it is also divisible by 400. 
For example, 2001 is a typical common year and 1996 is a typical leap year, whereas 1900 is an atypical common year and 2000 is an atypical leap year.

Notes: We will try a MOB programming session where we’ll be all coding on one station at a time, handing over the code. Let’s try to setup https://github.com/remotemobprogramming/mob so we can make this easier
 */

    describe('leapYear', () => {
        it('Given 1996 return true', () => {
            let example: Workshop = new Workshop();
            expect(example.leapYear(1996)).toBe(true);
        })
    })
})