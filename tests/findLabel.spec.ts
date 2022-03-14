import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1")
        expect(findLabel(mockPermissions, "code A-1-1")).toBe("ERROR INPUT")
        expect(findLabel(mockPermissions, "code A")).toBe("label A")
        expect(findLabel(mockPermissions, "code B-2-2-1")).toBe("ERROR INPUT")
        expect(findLabel(mockPermissions, "code ")).toBe("ERROR INPUT")
        expect(findLabel(mockPermissions, "code C")).toBe("label C")

    });
});

