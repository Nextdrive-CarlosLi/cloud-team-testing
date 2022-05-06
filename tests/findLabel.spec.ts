import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1")
    });
    it("should return null if there is no such Permission found", () => {
        expect(findLabel(mockPermissions, "code no")).toBe(null)
    });
});
