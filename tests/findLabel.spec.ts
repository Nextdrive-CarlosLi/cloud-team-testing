import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code A")).toBe("label A")
    });
    it("should Not find proper", () => {
        expect(findLabel(mockPermissions, "code A-1-1")).toBe('not found')
        expect(findLabel([], "code B-1-1")).toBe('not found')
    });
});
