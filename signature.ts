export interface Signature {
  create(content: string): string;
  validate(signature: string, content: string): boolean;
}
