import { Permission } from './types/Permission';

// dfs
// n = maximum number of permissions
// Time: O(n)
// Space: O(n)
export function findLabel(
  permissions: Permission[],
  code: string
): string | null {
  if (permissions.length === 0) {
    return null;
  }

  for (const permission of permissions) {
    const label = dfs(permission, code);
    if (label) {
      return label;
    }
  }

  return null;
}

function dfs(permission: Permission, code: string): string | null {
  if (permission.code === code) {
    return permission.label;
  }

  for (const child of permission.children) {
    const label = dfs(child, code);
    if (label) {
      return label;
    }
  }

  return null;
}

// bfs
// n = maximum number of permissions
// Time: O(n)
// Technically, time complexity is O(n^2), because time complexity of shift method in js is O(n)
// Space: O(n)
// export function findLabel(
//   permissions: Permission[],
//   code: string
// ): string | null {
//   if (permissions.length === 0) {
//     return null;
//   }

//   const queue = [];
//   for (const permission of permissions) {
//     queue.push(permission);
//   }

//   while (queue.length > 0) {
//     const current = queue.shift();

//     if (current.code === code) {
//       return current.label;
//     }

//     for (const child of current.children) {
//       queue.push(child);
//     }
//   }

//   return null;
// }
