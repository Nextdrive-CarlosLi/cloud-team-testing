import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code A")).toBe("label A")
    });

    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code B")).toBe("label B")
    });

    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code B-1")).toBe("label B-1")
    });

    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code C-1")).toBe("label C-1")
    });

    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1")
    });
});
