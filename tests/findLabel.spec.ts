import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1")
		});
		it("empty permissions should be not found", () => {
				expect(findLabel([], "code B")).toBe("Not Found")
		});
		it("empty code should be not found", () => {
				expect(findLabel(mockPermissions, "")).toBe("Not Found")
		});
});
