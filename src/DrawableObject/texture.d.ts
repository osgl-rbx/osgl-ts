import { Result } from "../result";
import { BaseUnloadedTexture, DrawableObject, RawTexture } from "../types";

export declare const Texture: {
    fromChecked: (rawTexture: RawTexture) => Result<Texture, oEnum.TextureError>;
    fromUnchecked: (rawTexture: BaseUnloadedTexture) => Texture;
    fromAssetId: (assetId: string) => Result<Texture, oEnum.DrawableObjectError>;
    new: (width: number, height: number, bfr?: buffer) => Texture;

    serializeChecked: (
        rawTexture: RawTexture,
    ) => Result<[buffer, number, number], oEnum.TextureError>;

    serializeUnchecked: (rawTexture: BaseUnloadedTexture) => [buffer, number, number];

    drawChecked: <T>(
        object: DrawableObject<T>,
        texture: Texture,
        textureX: number,
        textureY: number,
        rotation?: number,
    ) => undefined;

    drawUnchecked: <T>(
        object: DrawableObject<T>,
        texture: Texture,
        textureX: number,
        textureY: number,
        rotation?: number,
    ) => undefined;
};
