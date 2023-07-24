import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
  for (const permission of permissions) {
    if (permission.code === code) {
      return permission.label;
    }
    //check if the current permission has children or not
    if (permission.children.length > 0) {
      return findLabel(permission.children, code);
    }
  }
  //after traverse, still cannot find the matching permission
  return undefined;
}
