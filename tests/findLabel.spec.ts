import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1")
        expect(findLabel(mockPermissions, "code A")).toBe("label A")
        expect(findLabel(mockPermissions, "code B-2")).toBe("label B-2")
        expect(findLabel(mockPermissions, "code C")).toBe("label C")
    });

    it("should return null ", () => {
        expect(findLabel(mockPermissions, "code b-1")).toBe(null)
        expect(findLabel(mockPermissions, "code")).toBe(null)
    });
});
