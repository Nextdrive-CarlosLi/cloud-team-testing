import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    for (let i = 0; i < permissions.length; i++) {
        if (permissions[i].code === code) {
          return permissions[i].label;
        }
    
        if (permissions[i].children.length !== 0) {
          return findLabel(permissions[i].children, code);
        }
      }
      return undefined;
}
