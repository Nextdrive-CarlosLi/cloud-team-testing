import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec test", () => {
    it("should return proper value", () => {
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1")
        expect(findLabel(mockPermissions, "code C-1")).toBe("label C-1")
        expect(findLabel(mockPermissions, "code A")).toBe("label A")
        expect(findLabel(mockPermissions, "code A")).not.toBe("label B-1-1")
    });
    it("should return null if label donnot exist", () => {
        expect(findLabel(mockPermissions, "code ZZ")).toBe(null)
    });
});
