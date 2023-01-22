import { describe, it, expect } from 'vitest';
import { formatDate } from '../format-date';

describe('format date util', () => {
  it('should return first date', () => {
    expect(formatDate(new Date('2022-01-06'), new Date('2022-01-07'))).toBe(
      '2022-01-06 00:00'
    );
  });
  it('should return how many time has passed', () => {
    expect(
      formatDate(new Date('2022-01-06 00:20'), new Date('2022-01-06 00:30'))
    ).toBe('10 minutes ago');
    expect(
      formatDate(new Date('2022-01-06 00:20'), new Date('2022-01-06 00:50'))
    ).toBe('30 minutes ago');
    expect(
      formatDate(new Date('2022-01-06 00:00'), new Date('2022-01-06 00:59'))
    ).toBe('59 minutes ago');
    expect(
      formatDate(new Date('2022-01-06 00:00'), new Date('2022-01-06 01:00'))
    ).toBe('hour ago');
    expect(
      formatDate(new Date('2022-01-06 00:00'), new Date('2022-01-06 02:00'))
    ).toBe('2 hours ago');
  });
});
