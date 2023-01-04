import { mockPermissions, mockPermissions2 } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find proper label label B-1-1", () => {
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1");
    });
});

describe("findLabel full test spec", () => {
    it("should find proper label A", () => {
        expect(findLabel(mockPermissions2, "code A")).toBe("label A");
    });

    it("should find proper label B", () => {
        expect(findLabel(mockPermissions2, "code B")).toBe("label B");
    });

    it("should find proper label B-1", () => {
        expect(findLabel(mockPermissions2, "code B-1")).toBe("label B-1");
    });

    it("should find proper label label B-1-1", () => {
        expect(findLabel(mockPermissions2, "code B-1-1")).toBe("label B-1-1");
    });

    it("should find proper label B-2", () => {
        expect(findLabel(mockPermissions2, "code B-2")).toBe("label B-2");
    });

    it("should find proper label C", () => {
        expect(findLabel(mockPermissions2, "code C")).toBe("label C");
    });

    it("should find proper label C-1", () => {
        expect(findLabel(mockPermissions2, "code C-1")).toBe("label C-1");
    });

    it("should not find proper label ZZZ", () => {
        expect(findLabel(mockPermissions2, "code ZZZ")).toBeNull();
    });
});


describe("findLabel Edge Test", () => {
    it("should find proper label label B-1-1", () => {
        expect(findLabel(mockPermissions2, "code B-1-1")).toBe("label B-1-1");
    });

    it("should find proper label T-3-2", () => {
        expect(findLabel(mockPermissions2, "code T-3-2")).toBe("label T-3-2");
    });

    it("should not find proper label J", () => {
        expect(findLabel(mockPermissions2, "code I")).toBe("label J");
    });

    it("should not find proper label XLIX-III-II", () => {
        expect(findLabel(mockPermissions2, "code IL-III-II")).toBe("label XLIX-III-II");
    });

    it("should not find proper label J", () => {
        expect(findLabel(mockPermissions2, "code W")).toBe("label W");
    });

    it("should not find proper label ZZZ", () => {
        expect(findLabel(mockPermissions2, "code ZZZ")).toBeNull();
    });
});