import { cpfMask } from './cpfMask';

describe('cpfMask', () => {
  it('should format CPF correctly with dots and dashes', () => {
    expect(cpfMask('12345678901')).toBe('123.456.789-01');
    expect(cpfMask('11122233344')).toBe('111.222.333-44');
  });

  it('should handle incomplete CPF input gracefully', () => {
    expect(cpfMask('123')).toBe('123');
    expect(cpfMask('1234')).toBe('123.4');
    expect(cpfMask('12345')).toBe('123.45');
    expect(cpfMask('123456')).toBe('123.456');
    expect(cpfMask('1234567')).toBe('123.456.7');
    expect(cpfMask('12345678')).toBe('123.456.78');
    expect(cpfMask('123456789')).toBe('123.456.789');
    expect(cpfMask('1234567890')).toBe('123.456.789-0');
  });

  it('should remove non-digit characters', () => {
    expect(cpfMask('123.456.789-01')).toBe('123.456.789-01');
    expect(cpfMask('abc123def456ghi78901jkl')).toBe('123.456.789-01');
  });

  it('should handle empty input', () => {
    expect(cpfMask('')).toBe('');
  });
});