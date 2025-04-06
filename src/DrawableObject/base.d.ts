import { Result } from "../result";
import { Color, DrawableObject, DrawingContext } from "../types";

type BaseInner<T> = {
    Resize(
        this: DrawableObject<T>,
        width?: number,
        height?: number,
    ): Result<undefined, oEnum.DrawableObjectError>;

    Serialize(this: DrawableObject<T>): [buffer, number, number];

    Deserialize(
        this: DrawableObject<T>,
        buff: buffer,
        width: number,
        height: number,
    ): Result<undefined, oEnum.DrawableObjectError>;

    ReadPixelChecked(
        this: DrawableObject<T>,
        x: number,
        y: number,
    ): Result<Color, oEnum.DrawableObjectError>;

    ReadPixelUnchecked(this: DrawableObject<T>, x: number, y: number): Color;

    TintRegionChecked(
        this: DrawableObject<T>,
        tint: Color,
        factor: number,
        x: number,
        y: number,
        width: number,
        height: number,
    ): undefined;

    TintRegionUnchecked(
        this: DrawableObject<T>,
        tint: Color,
        factor: number,
        x: number,
        y: number,
        width: number,
        height: number,
    ): undefined;

    Tint(this: DrawableObject<T>, tint: number, factor: number): undefined;

    Resample(this: DrawableObject<T>, scale?: number): undefined;
};

export type Base<T> = BaseInner<T> & DrawingContext<T>;
