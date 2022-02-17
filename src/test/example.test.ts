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
})
})