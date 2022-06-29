export interface Signature {
  create(content: string): Promise<string>;
  validate(signature: string, content: string): Promise<boolean>;
}
