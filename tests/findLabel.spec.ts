import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should validate input code", () => {
        let expected = new Error("invalid code.");
        expect(() => { findLabel(mockPermissions, "label A"); }).toThrowError(expected)
        expect(() => { findLabel(mockPermissions, "code A-"); }).toThrowError(expected)
        expect(() => { findLabel(mockPermissions, "code 0-1"); }).toThrowError(expected)
        expect(() => { findLabel(mockPermissions, "code A-1."); }).toThrowError(expected)
        expect(() => { findLabel(mockPermissions, "codeA-1-1"); }).toThrowError(expected)
        expect(() => { findLabel(mockPermissions, "code A?1?2"); }).toThrowError(expected)
        expect(() => { findLabel(mockPermissions, ""); }).toThrowError(expected)
        expect(() => { findLabel(mockPermissions, "!*#&(!^%"); }).toThrowError(expected)

        expect(() => { findLabel(mockPermissions, "code A"); }).not.toThrowError(expected)
        expect(() => { findLabel(mockPermissions, "code AA"); }).not.toThrowError(expected)
        expect(() => { findLabel(mockPermissions, "code A-1"); }).not.toThrowError(expected)
        expect(() => { findLabel(mockPermissions, "code A-1-1"); }).not.toThrowError(expected)
        expect(() => { findLabel(mockPermissions, "Code A"); }).not.toThrowError(expected)
        expect(() => { findLabel(mockPermissions, "CODE A"); }).not.toThrowError(expected)
        expect(() => { findLabel(mockPermissions, "code a"); }).not.toThrowError(expected)
        expect(() => { findLabel(mockPermissions, "CoDe A"); }).not.toThrowError(expected)
    });

    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code A")).toBe("label A")
        expect(findLabel(mockPermissions, "code B-1")).toBe("label B-1")
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1")
    });

    it("should NOT find proper", () => {
        expect(findLabel(mockPermissions, "code AA")).toBe(null)
        expect(findLabel(mockPermissions, "code B-3")).toBe(null)
        expect(findLabel(mockPermissions, "code B-1-2")).toBe(null)
        expect(findLabel(mockPermissions, "code D")).toBe(null)
    });
});
