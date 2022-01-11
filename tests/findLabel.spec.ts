import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
  describe("should find proper", () => {
    test.each([
      ["code A", "label A"],
      ["code B", "label B"],
      ["code B-1", "label B-1"],
      ["code B-1-1", "label B-1-1"],
      ["code B-2", "label B-2"],
      ["code C", "label C"],
      ["code C-1", "label C-1"],
    ])("given %p as arguments, returns %p", (code, label) => {
      const result = findLabel(mockPermissions, code);
      expect(result).toEqual(label);
    });
  });

  describe("should find null", () => {
    test.each([
      ["code D", null],
      ["", null],
      [null, null],
    ])("given %p as arguments, returns %p", (code, label) => {
      const result = findLabel(mockPermissions, code);
      expect(result).toEqual(label);
    });
  });
});
