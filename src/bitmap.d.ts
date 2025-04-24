import oEnum from "./enum";
import { Result } from "./result";
import { RawTexture, OSGLBitmap, BaseUnloadedTexture } from "./types";

export declare const Bitmap: {
    fromChecked: (rawBitmap: RawTexture) => Result<OSGLBitmap, oEnum.TextureError>;
    fromUnchecked: (rawBitmap: BaseUnloadedTexture) => OSGLBitmap;
};
