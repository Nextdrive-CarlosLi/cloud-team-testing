import { mockPermissions } from '../dummies/mockPermissions'
import { findLabel } from '../src/findLabel'

describe('findLabel spec', () => {
	it('should found', () => {
		expect(findLabel(mockPermissions, 'code A')).toBe('label A')
	})
	it('should found', () => {
		expect(findLabel(mockPermissions, 'code B')).toBe('label B')
	})
	it('should found', () => {
		expect(findLabel(mockPermissions, 'code B-1')).toBe('label B-1')
	})
	it('should found', () => {
		expect(findLabel(mockPermissions, 'code B-1-1')).toBe('label B-1-1')
	})
	it('should found', () => {
		expect(findLabel(mockPermissions, 'code B-2')).toBe('label B-2')
	})
	it('should found', () => {
		expect(findLabel(mockPermissions, 'code C')).toBe('label C')
	})
	it('should found', () => {
		expect(findLabel(mockPermissions, 'code C-1')).toBe('label C-1')
	})
})

describe('findLabel fail case', () => {
	it('should be null', () => {
		expect(findLabel(mockPermissions, 'lable B')).toBeNull()
	})
	it('should be null', () => {
		expect(findLabel(mockPermissions, 'lable B-1')).toBeNull()
	})
	it('should be null', () => {
		expect(findLabel(mockPermissions, 'code A-1')).toBeNull()
	})
	it('should be null', () => {
		expect(findLabel(mockPermissions, 'code B-1-2')).toBeNull()
	})
	it('should be null', () => {
		expect(findLabel(mockPermissions, 'code B-2-1')).toBeNull()
	})
	it('should be null', () => {
		expect(findLabel(mockPermissions, 'code B-3')).toBeNull()
	})
	it('should be null', () => {
		expect(findLabel(mockPermissions, 'code C-2')).toBeNull()
	})
	it('should be null', () => {
		expect(findLabel(mockPermissions, 'code D')).toBeNull()
	})
	it('should be null', () => {
		expect(findLabel(mockPermissions, 'code E-1')).toBeNull()
	})
	it('should be null', () => {
		expect(findLabel(mockPermissions, 'hello world')).toBeNull()
	})
})
