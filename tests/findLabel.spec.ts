import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find proper", () => {
        const testPermissions = [
            { code: "code A", label: "label A" },
            { code: "code B-1-1", label: "label B-1-1" },
            { code: "code B-2", label: "label B-2" },
            { code: "code C-1", label: "label C-1" },
            { code: "code D", label: "" },
            { code: "test E", label: "" },
            { code: "", label: "" },
        ];

        testPermissions.forEach(({ code, label }) => {
            expect(findLabel(mockPermissions, code)).toBe(label);
        });
    });
});
