export type Color = number;
type Image = ImageLabel | ImageButton

export interface WindowConfiguration {
    sizeX: number | undefined,
    sizeY: number | undefined,
}

export class DrawableObject<T> {
    buffer: buffer;
    sizeX: number;
    sizeY: number;
    size: Vector2;

    Draw: (this: DrawableObject<T>) => DrawingContext<T>;
    ReadPixel: (this: DrawableObject<T>, x: number, y: number) => Color;
    TintRegion: (this: DrawableObject<T>, tint: Color, factor: number, x: number, y: number, width: number, height: number) =>  T;
    Serialize: (this: DrawableObject<T>) => [buffer, number, number];
}

export class Window extends DrawableObject<Window> {
    editableImage: EditableImage;
    targetFPS: number;
    lastRenderTime: number;
    renderers: Image[];

    Render: (this: Window) => Window;
    Clear: (this: Window, color: Color) => Window;
    Resize: (this: Window, newWidth: number, newHeight: number) => Window;

    WritePixel: (this: Window, x: number, y: number, color: Color) => Window;

    AddRenderer: (this: Window, ...renderers: Image[]) => Window;
    RemoveRenderer: (this: Window, ...renderers: Image[]) => Window;

    Deserialize: (this: Window, bfr: buffer, width: number, height: number) => Window;

    GetRelativeMouseToRenderer: (this: Window, image: Image[]) => [boolean, number, number]
}

export class DrawingContext<V> {
    Pixel: (this: DrawingContext<V>, x: number, y: number, color: Color) => DrawingContext<V>;
    Line: (this: DrawingContext<V>, startX: number, startY: number, stopX: number, stopY: number, thickness: number, color: Color) => DrawingContext<V>;
    Rectangle: (this: DrawingContext<V>, xPos: number, yPos: number, width: number, height: number, fill: number | undefined, stroke: number | undefined, strokeThickness: number | undefined, rotation: number | undefined) => DrawingContext<V>;
    Circle: (this: DrawingContext<V>, centerX: number, centerY: number, radius: number, fill: number | undefined, stroke: number | undefined, strokeThickness: number | undefined, rotation: number | undefined) => DrawingContext<V>;
    Triangle: (this: DrawingContext<V>, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, fill: number | undefined, stroke: number | undefined, strokeThickness: number | undefined) => DrawingContext<V>;
    Polygon: (this: DrawingContext<V>, corners: number[][], fill: Color) => DrawingContext<V>;
    FloodFill: (this: DrawingContext<V>, x: number, y: number, fill: Color) => DrawingContext<V>;

    StopDrawing: (this: DrawingContext<V>) => V;
}

type PixelFlag = number | string
export interface FlagTexture {
    width: number,
    height: number,
    pixels: PixelFlag[],
}

export type Glyph = (number | buffer | number[])[];
export type Glyphs = { [key: string]: Glyph };

export type StoredFont = {
	version: string;
	letters: Glyphs;
};
