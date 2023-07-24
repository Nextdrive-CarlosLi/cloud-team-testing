import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel } from "../src/findLabel";

describe("findLabel spec", () => {
  //correct matching
  it("should find proper", () => {
    expect(findLabel(mockPermissions, "code B-1")).toBe("label B-1");
    expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1");
  });
  //not matching or empty array
  it("should return undefined for non-existing code or empty array", () => {
    expect(findLabel(mockPermissions, "code A-1")).toBe(undefined);
    expect(findLabel([], "code C")).toBe(undefined);
  });
});
