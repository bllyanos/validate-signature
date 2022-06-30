export function create(object: Record<string, string>): string {
  const url = new URLSearchParams();
  for (const key in object) {
    const value = object[key];
    url.set(key, String(value));
  }
  return url.toString();
}
