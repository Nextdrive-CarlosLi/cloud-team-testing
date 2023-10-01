import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find proper label A", () => {
        expect(findLabel(mockPermissions, "code A")).toBe("label A")
    });
    it("should find proper label B", () => {
        expect(findLabel(mockPermissions, "code B")).toBe("label B")
    });
    it("should find proper label B-1", () => {
        expect(findLabel(mockPermissions, "code B-1")).toBe("label B-1")
    });
    it("should find proper label B-1-1", () => {
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1")
    });
    it("should find proper label B-2", () => {
        expect(findLabel(mockPermissions, "code B-2")).toBe("label B-2")
    });
    it("should find proper label C", () => {
        expect(findLabel(mockPermissions, "code C")).toBe("label C")
    });
    it("should find proper label C-1", () => {
        expect(findLabel(mockPermissions, "code C")).toBe("label C-1")
    });
});
