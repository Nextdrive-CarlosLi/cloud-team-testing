import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find first", () => {
        expect(findLabel(mockPermissions, "code A")).toBe("label A")
    });
    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1")
    });
    it("should find last", () => {
        expect(findLabel(mockPermissions, "code C-1")).toBe("label C-1")
    });
});

describe("not findLabel spec", () => {
    it("should not find label with code B-1-2", () => {
        expect(findLabel(mockPermissions, "code B-1-2")).not.toBe("code B-1-2")
    });
    it("should not find label with code lalala", () => {
        expect(findLabel(mockPermissions, "code lalala")).not.toBe("code lalala")
    });
});
