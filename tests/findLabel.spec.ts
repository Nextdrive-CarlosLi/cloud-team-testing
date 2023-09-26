import { mockPermissions } from '../dummies/mockPermissions';
import { findLabel } from '../src/findLabel';

describe('findLabel spec', () => {
  it('should find improperly due to empty permissions', () => {
    expect(findLabel([], 'code B-1-1')).toBeNull();
  });

  it('should find properly', () => {
    expect(findLabel(mockPermissions, 'code B-1-1')).toBe('label B-1-1');
  });

  it('should find improperly', () => {
    expect(findLabel(mockPermissions, 'code Z')).toBeNull();
  });
});
