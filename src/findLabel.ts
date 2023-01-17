import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {    
  const level: Array<string> = code.replace('code ', '').split('-');
  let current: Permission[] = permissions;
  let i = 0;
  let targetLabel = undefined;
  
  while (i < level.length) {
    const targetIndex = current.findIndex((item) => {
      return code.includes(item.code);
    });

    if (targetIndex === -1) {
      break;
    }

    if (current[targetIndex].code === code) {
      targetLabel = current[targetIndex].label;
      break;
    }

    current = current[targetIndex].children;
    i += 1;
  }

  
  return targetLabel;
}
