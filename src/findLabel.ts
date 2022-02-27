import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    let result = null;
    for(const { code: codeName, label, children } of permissions) {
        if(codeName === code) return label;
        result = findLabel(children, code);
        if(result) break;
    }
    return result;
}
