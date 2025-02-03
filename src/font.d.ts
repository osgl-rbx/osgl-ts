import { Color, DrawableObject } from "./types";

export type Glyph = (number | buffer | number[])[];
export type Glyphs = { [key: string]: Glyph };

export type StoredFont = {
	version: string;
	letters: Glyphs;
};

export class FontObject {
	glyphs: Glyphs;

	spacing: number;
	linePadding: number;

	Draw: <T>(
		self: FontObject,
		object: DrawableObject<T>,
		text: string,
		x: number,
		y: number,
		color: Color,
	) => FontObject;
}

declare const Font: {
	Draw<T>(
        self: Font,
        object: DrawableObject<T>,
        text: string,
        x: number,
        y: number,
        color: Color,
    ): undefined;

	from(data: StoredFont): Font;
};
