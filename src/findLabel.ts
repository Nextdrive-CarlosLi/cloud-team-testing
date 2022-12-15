import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    let res: string;

    for (let i = 0; i < permissions.length; i++) {
        if (permissions[i].code === code) return permissions[i].label;
        if (permissions[i].children && permissions[i].children.length > 0) {
            const ret = findLabel(permissions[i].children, code);
            if (ret) res = ret;
        }
    }

    return res;
}
