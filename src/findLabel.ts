import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    const targetPermission = permissions.filter((p: Permission) => p.code === code)
    if (targetPermission.length === 1) {
        return targetPermission[0].label
    }
    const candidates = permissions.filter((p: Permission) => p.children.length > 0)
        .map((p) => p.children).reduce((accumulator, value) => accumulator.concat(value), []);
    if (candidates.length > 0) {
        return findLabel(candidates, code)
    }
    return null
}
