import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";
import {NOT_ALLOWED,CANT_FIND} from '../src/constant';
describe("findLabel spec", () => {
    it("should find A", () => {
        expect(findLabel(mockPermissions, mockPermissions[0].code)).toBe(mockPermissions[0].label)
    });
    it("should find B-1", () => {
        expect(findLabel(mockPermissions, mockPermissions[1].children[0].code)).toBe(mockPermissions[1].children[0].label)
    });
    it("should find B-1-1", () => {
        expect(findLabel(mockPermissions, mockPermissions[1].children[0].children[0].code)).toBe(mockPermissions[1].children[0].children[0].label)
    });
    it("should be not allowed", () => {
        expect(findLabel(mockPermissions,"code")).toBe(NOT_ALLOWED)
    })
    it("should be can't find", () => {
        expect(findLabel(mockPermissions,"coDe B-01")).toBe(CANT_FIND)
    })
});
