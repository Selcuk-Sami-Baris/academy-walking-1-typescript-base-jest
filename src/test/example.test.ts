import {Workshop} from "../main/example";

describe('Workshop', () => {
    describe('Add', () => {
        it("should give sum of a + b when adding a and b", () => {
            let example: Workshop = new Workshop();
            expect(example.add(1, 2)).toBe(3);
        })
    })

})