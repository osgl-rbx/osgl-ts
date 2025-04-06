import { Color } from "./types";

declare const color: {
    new: (r?: number, g?: number, b?: number, a?: number) => Color
    newRGB: (r?: number | undefined, g?: number | undefined, b?: number | undefined) => Color
    fromColor3: (color3: Color3) => Color,

    setR: (c: Color, r: number) => Color
    setG: (c: Color, g: number) => Color
    setB: (c: Color, b: number) => Color
    setA: (c: Color, a: number) => Color

    read: (c: Color) => [number, number, number, number]

    r: (c: Color) => number
    g: (c: Color) => number
    b: (c: Color) => number
    a: (c: Color) => number

    tint: (color1: Color, color2: Color, factor: number) => Color

    RED: Color;
    GREEN: Color;
    BLUE: Color;
    WHITE: Color;
    BLACK: Color;
    YELLOW: Color;
    MAGENTA: Color;
    CYAN: Color;
    TRANSPARENT: Color;
}