import { Base } from "./DrawableObject/base";
import { WindowBase } from "./DrawableObject/windowBase";

type ImageBase = ImageLabel | ImageButton;
type TextureBase = Texture | Decal;
type Drawable = ImageBase | TextureBase | MeshPart;
type Color = number;

export interface DrawableObject<T> extends Base<T> {
    buffer: buffer;
    width: number;
    height: number;
    size: Vector2;
}

export interface DrawingContext<T> {
    Pixel(this: T, X: number, Y: number, Color: Color): undefined;
    //FIXME: pixel index
    Line(
        this: T,
        X1: number,
        Y1: number,
        X2: number,
        Y2: number,
        thickness: number,
        color?: Color,
    ): undefined;
    Rectangle(
        this: T,
        X: number,
        Y: number,
        width: number,
        height: number,
        fill?: Color,
        stroke?: Color,
        strokeThickness?: number,
        rotation?: number,
    ): undefined;
    Polygon(
        this: T,
        corners: number[][],
        fill: Color,
        strokeColor?: Color,
        strokeWidth?: number,
    ): undefined;
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
        strokeThickness?: number,
    ): undefined;
    Circle(
        this: T,
        centerX: number,
        centerY: number,
        radius: number,
        fill?: Color,
        stroke?: Color,
        strokeThickness?: number,
        rotation?: number,
    ): undefined;
    Buffer(
        this: T,
        buffer: buffer,
        width: number,
        height: number,
        X: number,
        Y: number,
    ): undefined;
    Clear(this: T, Color?: Color): undefined;
}

export interface OSGLWindow extends DrawableObject<OSGLWindow>, WindowBase<OSGLWindow> {
    surfaces: Drawable[];
    editableImage: EditableImage;
    targetFPS: number;
}

export interface BaseRawTexture<T = string> {
    version: T;
    width: number;
    height: number;
    pixels: buffer;
}

export type BaseUnloadedTexture = BaseRawTexture<"1.6b">;
export type Texture = DrawableObject<Texture>;
export type RawTexture = ModuleScript | BaseUnloadedTexture;

export interface OSGLBitmap {
    channels: number;
    width: number;
    height: number;
    buffer: buffer;
    Read: (this: OSGLBitmap, X: number, Y: number, channel?: number) => number;
    Write: (
        this: OSGLBitmap,
        X: number,
        Y: number,
        channel: number,
        value: number,
    ) => number;
}

export type Glyph = (number | buffer | number[])[];
export type Glyphs = { [key: string]: Glyph };

export type StoredFont = {
    version: string;
    letters: Glyphs;
};

export type OSGLVideo = {
    width: number;
    height: number;
    playbackFrame: number;
    frameRate: number;
    playing: boolean;
    loop: boolean;
    frames: buffer[];

    PlaySync: (
        this: OSGLVideo,
        callback: (width: number, height: number, buffer: buffer) => undefined,
    ) => OSGLVideo;

    PlayAsync: (
        this: OSGLVideo,
        callback: (width: number, height: number, buffer: buffer) => undefined,
    ) => OSGLVideo;

    Stop: (this: OSGLVideo) => OSGLVideo;

    GetFrame: (this: OSGLVideo, frame: number) => [buffer, number, number];
    GetBufferOfFrame: (this: OSGLVideo, frame: number) => buffer;

    Previous: (this: OSGLVideo) => OSGLVideo;
    Next: (this: OSGLVideo) => OSGLVideo;
};
