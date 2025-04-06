import { Color, DrawableObject, Glyphs, StoredFont } from "./types";

export class FontObject {
    glyphs: Glyphs;

    spacing: number;
    linePadding: number;

    Draw: <T>(
        this: FontObject,
        object: DrawableObject<T>,
        text: string,
        x: number,
        y: number,
        color: Color,
    ) => FontObject;
}

declare const Font: {
    Draw<T>(
        this: Font,
        object: DrawableObject<T>,
        text: string,
        x: number,
        y: number,
        color: Color,
    ): undefined;

    from(data: StoredFont): Font;
};
