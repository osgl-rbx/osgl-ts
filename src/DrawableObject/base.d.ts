import { Result } from "../result";
import { Color, DrawableObject, DrawingContext } from "../types";

type BaseInner<T> = {
    Resize(
        self: DrawableObject<T>,
        width?: number,
        height?: number,
    ): Result<undefined, oEnum.DrawableObjectError>;

    Serialize(self: DrawableObject<T>): [buffer, number, number];

    Deserialize(
        self: DrawableObject<T>,
        buff: buffer,
        width: number,
        height: number,
    ): Result<undefined, oEnum.DrawableObjectError>;

    ReadPixelChecked(
        self: DrawableObject<T>,
        x: number,
        y: number,
    ): Result<Color, oEnum.DrawableObjectError>;

    ReadPixelUnchecked(self: DrawableObject<T>, x: number, y: number): Color;

    TintRegionChecked(
        self: DrawableObject<T>,
        tint: Color,
        factor: number,
        x: number,
        y: number,
        width: number,
        height: number,
    ): undefined;

    TintRegionUnchecked(
        self: DrawableObject<T>,
        tint: Color,
        factor: number,
        x: number,
        y: number,
        width: number,
        height: number,
    ): undefined;

    Tint(self: DrawableObject<T>, tint: number, factor: number): undefined;

    Resample(self: DrawableObject<T>, scale?: number): undefined;
};

export type Base<T> = BaseInner<T> & DrawingContext<T>;
