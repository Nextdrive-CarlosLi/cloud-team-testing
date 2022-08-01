import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    const thisLevel = permissions.find(permission => {
        return permission.code === code 
    })
    if(thisLevel) return thisLevel.label
    // 以上可以找到所在的層
    // 如果裡面的children.length > 0 表示還不是最後一層，再跑一次
    let innerLevel = []
    permissions.forEach(permission => {
    const permissions = permission.children
    if (permissions && permissions.length > 0){
        innerLevel.push(findLabel(permissions, code))
        }
    })  
    return innerLevel[0]
}

