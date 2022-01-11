import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
  if (permissions.length === 0) {
    return null;
  }
  
  let result = null;
  for (let i = 0; i < permissions.length; i++) {
    const permission = permissions[i];
    // if match code then return
    if (permission.code === code) {
      return permission.label;
    }
    // check is Array then recursive children
    if (Array.isArray(permission.children)) {
        result = findLabel(permission.children, code);
    }
    // if find result break for loop
    if (!!result) {
      break;
    }
  }

  return result;
}
