import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
  const matchedPermission = permissions.find(
    (permission) => permission.code === code
  );
  if (matchedPermission) return matchedPermission.label;

  const childrenPermissions = permissions
    .filter((permission) => permission.children.length)
    .map((permission) => {
      return permission.children;
    });
  const mergedPermissions = [].concat(...childrenPermissions);
  return findLabel(mergedPermissions, code);
}
