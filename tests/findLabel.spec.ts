import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find nothing", () => {
        expect(findLabel(mockPermissions, "code D")).toBe("not found");
    });

    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code A")).toBe("label A");
    });

    it("should find deeper", () => {
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1");
    });
});
