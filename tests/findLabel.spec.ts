import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code B-1")).toBe("label B-1")
    });
});

describe("findLabel spec retrun type", () => {
    it("Find proper, should return string", () => {
        expect(findLabel(mockPermissions, "code B-1")).toEqual(expect.any(String));
    });
    it("Not find proper, should return string", () => {
        expect(findLabel(mockPermissions, "code C-1-1")).toEqual(expect.any(String));
    });
});

describe("findLabel spec not toBe", () => {
    it("not find proper", () => {
        expect(findLabel(mockPermissions, "code B-3")).not.toBe("label B-3")
    });
});
