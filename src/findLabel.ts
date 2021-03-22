import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    for (let permission of permissions) {
        if (permission.code === code) return permission.label;
        if (permission.children.length > 0) return findLabel(permission.children, code)
    }
}
