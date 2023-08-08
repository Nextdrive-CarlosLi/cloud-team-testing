import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    for (var permission of permissions) {
        if (permission.code === code) {
            return permission.label;
        } else {
            if (permission.children.length > 0) {
             findLabel(permission.children, code);
            }
        }
    }
    return 'not found';
}
