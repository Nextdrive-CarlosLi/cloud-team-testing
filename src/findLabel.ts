import { Permission } from "./types/Permission";
import { NOT_ALLOWED, CANT_FIND } from "./constant";
const ALLOW_CODE_SPLIT_LENGTH: number = 2;
export function findLabel(permissions: Permission[], code: string): string {
  const splitOriginCode: string[] = code.split(" ");
  if (splitOriginCode.length !== ALLOW_CODE_SPLIT_LENGTH) {
    return NOT_ALLOWED;
  }
  const originCode: string[] = splitOriginCode[1].split("-");
  const findTreeNode = (
    newPermissions: Permission[],
    treeNodeArr: string[],
    originNode: string
  ):string => {
    const findTreeLabel: Permission|undefined = newPermissions.find(
      permission => permission.code === `${splitOriginCode[0]} ${originNode}`
    );
    if (findTreeLabel && treeNodeArr.length > 1) {
      const newTreeNodeArr: string[] = treeNodeArr.filter((_, i) => i !== 0);
      return findTreeNode(
        findTreeLabel.children,
        newTreeNodeArr,
        `${originNode}-${newTreeNodeArr[0]}`
      );
    }
    return findTreeLabel ? findTreeLabel.label : CANT_FIND;
  };
  return findTreeNode(permissions, originCode, originCode[0]);
}
