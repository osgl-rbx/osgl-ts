import { DrawableObjectError } from "./enum";
import { Result } from "./result";

type ImageBase = ImageLabel | ImageButton;
type TextureBase = Texture | Decal;
type Drawable = ImageBase | TextureBase | MeshPart;
type Color = number;

export interface DrawableObject<T> extends DrawingContext<DrawableObject<T>> {
    buffer: buffer,
    width: number,
    height: number,
    size: Vector2,

    Resize(this: DrawableObject<T>, width: number, height: number): Result<null, DrawableObjectError>;
    Serialize(this: DrawableObject<T>): [buffer, number, number];
    Deserialize(this: DrawableObject<T>, buffer: buffer, width: number, height: number): Result<null, DrawableObjectError>;
    ReadPixelChecked(this: DrawableObject<T>, X: number, Y: number): Result<Color, DrawableObjectError>;
    ReadPixelUnchecked(this: DrawableObject<T>, X: number, Y: number): Color;
    TintRegionChecked(
        this: DrawableObject<T>,
        tint: Color,
        factor: number,
        X: number,
        Y: number,
        width: number,
        height: number
    ): Result<null, DrawableObjectError>;
    TintRegionUnchecked(
        this: DrawableObject<T>,
        tint: Color,
        factor: number,
        X: number,
        Y: number,
        width: number,
        height: number
    ): null;
    Tint(this: DrawableObject<T>, tint: Color, factor: number): null;
    Resample(this: DrawableObject<T>, scale?: number): null;
}

export interface DrawingContext<T> {
    Pixel(this: T, X: number, Y: number, Color: Color): null;
    Line(
        this: T,
        X1: number,
        Y1: number,
        X2: number,
        Y2: number,
        thickness: number,
        color?: Color
    ): null;
    Rectangle(
        this: T,
        X: number,
        Y: number,
        width: number,
        height: number,
        fill?: Color,
        stroke?: Color,
        strokeThickness?: number,
        rotation?: number
    ): null;
    Polygon(
        this: T,
        corners: number[][],
        fill: Color,
        strokeColor?: Color,
        strokeWidth?: number
    ): null;
    Triangle(
        this: T,
        X1: number,
        Y1: number,
        X2: number,
        Y2: number,
        X3: number,
        Y3: number,
        fill?: Color,
        stroke?: Color,
        strokeThickness?: number
    ): null;
    Circle(
        this: T,
        centerX: number,
        centerY: number,
        radius: number,
        fill?: Color,
        stroke?: Color,
        strokeThickness?: number,
        rotation?: number
    ): null;
    Buffer(
        this: T,
        buffer: buffer,
        width: number,
        height: number,
        X: number,
        Y: number
    ): null;
    Clear(this: T, Color?: Color): null;
}

export interface OSGLWindow extends DrawableObject<OSGLWindow> {
    surfaces: Drawable[],
    editableImage: EditableImage,
    targetFPS: number,

    Render: (this: OSGLWindow) => null,
    RenderTargetFPS: (this: OSGLWindow) => null,
    AddRenderers: (this: OSGLWindow, ...renderers: Drawable[]) => null,
    RemoveRenderers: (this: OSGLWindow, ...renderers: Drawable[]) => null,
    GetRelativeMousePosition: (this: OSGLWindow, image: ImageBase) => [boolean, number, number],
}

export interface BaseRawTexture<T = string> {
    version: T,
    width: number,
    height: number,
    pixels: buffer,
}

export type BaseUnloadedTexture = BaseRawTexture<"1.6b">
export type Texture = DrawableObject<Texture>
export type RawTexture = ModuleScript | BaseUnloadedTexture

export interface OSGLBitmap {
    channels: number,
    width: number,
    height: number,
    buffer: buffer,
    Read: (this: OSGLBitmap, X: number, Y: number, channel?: number) => number,
    Write: (this: OSGLBitmap, X: number, Y: number, channel: number, value: number) => number,
}

export type Glyph = (number | buffer | number[])[];
export type Glyphs = { [key: string]: Glyph };

export type StoredFont = {
	version: string;
	letters: Glyphs;
};