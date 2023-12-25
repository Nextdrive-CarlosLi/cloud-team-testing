import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    for (const { code: codeValue, children, label } of permissions) {
        if (codeValue === code) {
            return label
        }

        if (children && children.length > 0) {
            const result = findLabel(children, code)

            if (result) {
                return result
            }
        }
    }
    return null
}
