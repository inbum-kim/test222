/**
 * validate-password.ts
 *
 * 비밀번호 강도 검증 유틸리티
 * - 최소 8자
 * - 대문자, 소문자, 숫자, 특수문자 포함 여부 검사
 * - 추후 테스트 코드 연동 가능
 */

/**
 * Returns true if the password meets security requirements.
 * @param password User password input
 * @returns boolean
 */
export function validatePassword(password: string): boolean {
  const minLength = 8;
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/;

  return password.length >= minLength && pattern.test(password);
}

// ✅ Example test (lightweight inline test)
if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test("Valid password passes", () => {
    expect(validatePassword("P@ssw0rd!")).toBe(true);
  });

  test("Invalid password fails", () => {
    expect(validatePassword("123")).toBe(false);
  });
}
