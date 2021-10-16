import { Permission } from './types/Permission'

export function findLabel(permissions: Permission[], code: string): string {
	let result = null

	permissions.forEach((premission) => {
		if (premission.code === code) result = premission.label
		else if (premission.children.length > 0 && result === null) result = findLabel(premission.children, code)
	})

	return result
}
