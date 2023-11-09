import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
	let ret = "Not Found";
	const dfs = (permissions: Permission[], code: string) => {
		for (const permission of permissions)
		{
			if (code === permission.code)
			{
				ret = permission.label;
				return true;
			}
			if (permission.children.length === 0) continue;
			if (dfs(permission.children, code)) return true;
		}
		return false;
	}
	dfs(permissions, code);
	return ret;
}
