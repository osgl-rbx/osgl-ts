import { DrawableObjectError, TextureError, WindowError } from "./enum";
import { Result } from "./result";
import {
    BaseUnloadedTexture,
    Drawable,
    DrawableObject,
    OSGLBitmap,
    OSGLWindow,
    RawTexture,
} from "./types";

export declare const Window: {
    new: (editableImage: EditableImage, renderers: Drawable[]) => OSGLWindow;
    from: (
        drawableObject: Drawable,
        width: number,
        height: number,
    ) => Result<OSGLWindow, WindowError>;
    fromAssetId: (assetId: string) => Result<OSGLWindow, WindowError>;
    fromBuffer: (
        buffer: buffer,
        width: number,
        height: number,
    ) => Result<OSGLWindow, WindowError>;

    isDrawableInstance: (object: Instance) => boolean;
    getRenderingProperty: (object: Drawable) => "ImageContent" | "TextureContent" | "";
};

export declare const Texture: {
    fromChecked: (rawTexture: RawTexture) => Result<Texture, TextureError>;
    fromUnchecked: (rawTexture: BaseUnloadedTexture) => Texture;
    fromAssetId: (assetId: string) => Result<Texture, DrawableObjectError>;
    new: (width: number, height: number, bfr?: buffer) => Texture;

    serializeChecked: (
        rawTexture: RawTexture,
    ) => Result<[buffer, number, number], TextureError>;
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

export declare const Bitmap: {
    fromChecked: (rawBitmap: RawTexture) => Result<OSGLBitmap, TextureError>;
    fromUnchecked: (rawBitmap: BaseUnloadedTexture) => OSGLBitmap;
};
