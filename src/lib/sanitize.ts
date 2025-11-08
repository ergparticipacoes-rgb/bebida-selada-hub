export function sanitizeInput(value: string): string {
  return value
    .replace(/[<>]/g, "")
    .replace(/["']/g, "")
    .trim()
    .substring(0, 255);
}


