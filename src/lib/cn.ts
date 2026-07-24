// Minimal className joiner — filters falsy values and joins with spaces.
// No dependency; sufficient for our conditional-class needs.
export type ClassValue = string | number | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
