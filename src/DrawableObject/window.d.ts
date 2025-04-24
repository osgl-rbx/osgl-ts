import oEnum from "../enum";
import { Result } from "../result";
import { Drawable, OSGLWindow } from "../types";

export declare const Window: {
    new: (editableImage: EditableImage, renderers: Drawable[]) => OSGLWindow;

    from: (
        drawableObject: Drawable,
        width: number,
        height: number,
    ) => Result<OSGLWindow, oEnum.WindowError>;

    fromAssetId: (assetId: string) => Result<OSGLWindow, oEnum.WindowError>;

    fromBuffer: (
        buffer: buffer,
        width: number,
        height: number,
    ) => Result<OSGLWindow, oEnum.WindowError>;

    isDrawableInstance: (object: Instance) => boolean;
    getRenderingProperty: (object: Drawable) => "ImageContent" | "TextureContent" | "";
};
