import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    // arrange
    const testCases = ["A", "B-1-1", "C-1"];
    for (let i = 0; i < testCases.length; i++) {
        // action
        const ret = findLabel(mockPermissions, `code ${testCases[i]}`);
        it(`should find code ${testCases[i]}`, () => {
            // assert
            expect(ret).toBe(`label ${testCases[i]}`);
        });
    }

    it("should not find C-1-1", () => {
        // arrange
        const code = "code C-1-1";
        // action
        const ret = findLabel(mockPermissions, code);
        // assert
        expect(ret).toBe(undefined);
    });
});
