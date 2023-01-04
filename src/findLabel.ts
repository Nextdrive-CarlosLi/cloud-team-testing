import { Permission } from "./types/Permission";

function findLabel(permissions: Permission[], code: string): string {
    let result = null;

    const nodeSearch = (obj) => {
        if (result || !obj || typeof obj !== 'object') {
            return;
        };

        if (typeof obj.code === 'string' && obj.code === code) {
            result = obj;
        };

        (obj.children || []).forEach((childrenObj) => {
            nodeSearch(childrenObj);
        });
    }
    
    for(const permission of permissions) {
        nodeSearch(permission);
    }

    return result?.label || null;
}

export { findLabel };