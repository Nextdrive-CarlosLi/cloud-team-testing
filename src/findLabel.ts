import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    const NOT_FOUND = 'not found';
    const arrayFromCode = code.split(' ');
    const arrCommend = arrayFromCode[1].split('-');

    let currentNode: Permission;
    let currentPermissions: Permission[];
    let currentCode = arrayFromCode[0];
    let strCurrentResult = NOT_FOUND;

    arrCommend.forEach((commend, index) => {
        if (index === 0) {
            // 組第一次不用 - 也不用抓 children
            currentPermissions = [...permissions];
            currentCode = `${currentCode} ${commend}`;
        } else if (currentNode.children && currentNode.children.length > 0) {
            currentPermissions = [...currentNode.children];
            currentCode = `${currentCode}-${commend}`;
        }
        currentNode = currentPermissions.find((node) => node.code === currentCode);
        if (currentNode.label) strCurrentResult = currentNode.label;
    });

    return strCurrentResult;
}
