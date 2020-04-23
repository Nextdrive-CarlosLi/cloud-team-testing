import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
			//假如在第一層就找到 直接return label
	       const targetPermission = permissions.find(permission=>permission.code ===code)
	       if(targetPermission)  return targetPermission.label
           
           //攤平一個多維陣列(相加)
	       const childrenPermission =permissions.map(permission=>permission.children).reduce((x,y)=>x.concat(y))
	       //console.log(childrenPermission)
           
           //假如陣列維空 則回傳null
	       if(childrenPermission.length==0) return null
	       else return findLabel(childrenPermission,code)  //不為空就遞迴
	  
}
