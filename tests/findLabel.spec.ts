import { mockPermissions } from "../dummies/mockPermissions";
import findLabelObject from "../src/findLabel"

describe("findLabel spec", () => {
    it("spy recursively on the findLabel fn", () => {
        const spy = jest.spyOn(findLabelObject, 'findLabel'); // track the call of recursive function
        expect(findLabelObject.findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1");
        expect(spy).toHaveBeenCalled();
        expect(findLabelObject.findLabel).toHaveBeenCalledTimes(3); //get the number of times that recursive function is called
    });
    it("should find proper", () => {
        expect(findLabelObject.findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1")
        expect(findLabelObject.findLabel(mockPermissions, "code C-1")).toBe("label C-1")
        expect(findLabelObject.findLabel(mockPermissions, "code B-2")).toBe("label B-2")
        expect(findLabelObject.findLabel(mockPermissions, "code B-1")).toBe("label B-1")
        expect(findLabelObject.findLabel(mockPermissions, "code A")).toBe("label A")
        expect(findLabelObject.findLabel(mockPermissions, "code C")).toBe("label C")
    });
    it("should to be null", () => {
        expect(findLabelObject.findLabel(mockPermissions, "code")).toBeNull;
        expect(findLabelObject.findLabel(mockPermissions, "code C-1-1")).toBeNull;
    });
});
