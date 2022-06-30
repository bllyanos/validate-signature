export function parse(querystring: string): Record<string, string> {
  const record: Record<string, string> = {};
  const url = new URLSearchParams(querystring);
  for (const [key, value] of url.entries()) {
    record[key] = value;
  }
  return record;
}
