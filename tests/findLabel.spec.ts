import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code B")).toBe("label B");
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1");
        expect(findLabel(mockPermissions, "code B-2-2")).toBe(undefined);
        expect(findLabel([], "code A")).toBe(undefined);
    });
});
