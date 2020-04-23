import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1")
    });
});

describe("findLabel spec_return_string", () => {
    it("should return string", () => {
        expect(findLabel(mockPermissions, "code C")).toEqual(expect.any(String));
    });
});

describe("findLabel spec_toEqual", () => {
    it("should find Equal", () => {
        expect(findLabel(mockPermissions, "code C-1")).toEqual("label C-1")
    });
});

describe("findLabel spec_not_toBe", () => {
    it("not find proper", () => {
        expect(findLabel(mockPermissions, "code C-1-1")).not.toBe("label C-1-1")
    });
});

