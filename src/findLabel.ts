import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    const [type, levels] = code.split(" ");
    if (!type || !levels) return "";
    const levelList = levels.split("-");
    let currentKey = type;

    return levelList.reduce(({ permissions }, level, index) => {
        currentKey += index === 0 ? ` ${level}` : `-${level}`;
        const target = permissions.find(permission => permission.code === currentKey);

        return {
            permissions: target?.children ?? [],
            label: target?.label ?? "",
        };
    }, { permissions, label: "" }).label;
}
