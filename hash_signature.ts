import { Signature } from "./signature.ts";
import { crypto } from "crypto/mod.ts";

import { decoder, encoder } from "./common/encoding/mod.ts";

export class HashSignature implements Signature {
  constructor(private readonly key: string) {}

  private mixContentWithKey(content: string) {
    return content + this.key;
  }

  private readonly algorithm = "SHA-256";

  private async hash(content: string): Promise<string> {
    const mixedContent = this.mixContentWithKey(content);
    const encodedContent = encoder.encode(mixedContent);
    const bufferArrayResult = await crypto.subtle.digest(
      this.algorithm,
      encodedContent
    );
    const uintArrayResult = new Uint8Array(bufferArrayResult);
    const decodedResult = decoder.decode(uintArrayResult);
    return decodedResult;
  }

  async create(content: string): Promise<string> {
    return await this.hash(content);
  }
  async validate(signature: string, content: string): Promise<boolean> {
    const hashedContent = await this.hash(content);
    const isSignatureValid = signature === hashedContent;
    return isSignatureValid;
  }
}
