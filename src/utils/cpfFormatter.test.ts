import { cpfFormatter } from './cpfFormatter';

describe('cpfFormatter', () => {
  it('should remove dots and dashes from a CPF', () => {
    expect(cpfFormatter('123.456.789-01')).toBe('12345678901');
    expect(cpfFormatter('111.222.333-44')).toBe('11122233344');
  });

  it('should handle CPF without any dots or dashes', () => {
    expect(cpfFormatter('12345678901')).toBe('12345678901');
  });

  it('should handle CPF with only dots', () => {
    expect(cpfFormatter('123.456.789.01')).toBe('12345678901');
  });

  it('should handle CPF with only dashes', () => {
    expect(cpfFormatter('123-456-789-01')).toBe('12345678901');
  });

  it('should handle empty input', () => {
    expect(cpfFormatter('')).toBe('');
  });

  it('should handle CPF with mixed characters', () => {
    expect(cpfFormatter('123.-456.-789-01')).toBe('12345678901');
  });
});