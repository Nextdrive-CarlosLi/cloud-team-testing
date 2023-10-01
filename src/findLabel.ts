import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    let resultLabel = "";
    const findMathedLabel = function (obj: Permission, code: string) {
        if (!obj) {
            return;
        }
        else if (obj?.code === code) {
            return obj?.label;
        }
        else {
            for (let i = 0; i < obj.children.length; i++) {
                const matchedLabel = findMathedLabel(obj.children[i], code);
                if (matchedLabel) {
                    return matchedLabel;
                }
            }
        }
    }

    for (let i = 0; i < permissions.length; i++) {
        const matchedLabel = findMathedLabel(permissions[i], code)
        if (matchedLabel) {
            resultLabel = matchedLabel;
            break
        }
    }

    return resultLabel;
}
