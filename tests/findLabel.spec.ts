import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1");
    });

    it("should be undefined", () => {
        expect(findLabel(mockPermissions, "code A-1")).toBeUndefined();
    });
});
