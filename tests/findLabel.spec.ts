import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    test("should find proper to A", () => {
        expect(findLabel(mockPermissions, "code A")).toBe("label A");
    });

    test("should find proper to B", () => {
        expect(findLabel(mockPermissions, "code B")).toBe("label B");
    });

    test("should find proper to C", () => {
        expect(findLabel(mockPermissions, "code C")).toBe("label C");
    });

    test("should find proper to B-1", () => {
        expect(findLabel(mockPermissions, "code B-1")).toBe("label B-1");
    });

    test("should find proper to B-2", () => {
        expect(findLabel(mockPermissions, "code B-2")).toBe("label B-2");
    });

    test("should find proper to B-1-1", () => {
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1");
    });

    test("should find prppoer to empty string", () => {
        expect(findLabel(mockPermissions, "code B-3")).toBe("");
    });
});
