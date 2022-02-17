import {Workshop} from "../main/example";

describe('Workshop', () => {
    describe('Add', () => {
        it("should give sum of a + b when adding a and b", () => {
            let example: Workshop = new Workshop();
            expect(example.add(1, 2)).toBe(3);
        })
    })

describe('fizzBuzz', () => {
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
})