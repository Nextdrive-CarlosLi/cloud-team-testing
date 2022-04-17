import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    let newPermissions: Permission[] = permissions;
    let resultLabel: string = '';

    for(let i: number = 0 ; i < newPermissions.length ; i ++){
        if(newPermissions[i]['code'] == code){
            resultLabel = newPermissions[i]['label'];
        }else if(!!newPermissions[i]['children'] && newPermissions[i]['children'].length > 0){
            newPermissions = [].concat(newPermissions, newPermissions[i]['children']);
        }
    }

    return resultLabel;
}
