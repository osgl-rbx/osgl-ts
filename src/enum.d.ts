declare namespace oEnum {
    export enum WindowError {
        InvalidCreationInstance = 0,
        WindowDimensionsOutOfBounds = 1,
        APINotEnabled = 8,
    }

    export enum DrawableObjectError {
        NotEnoughMemory = 2,
        ResizeOutOfBounds = 3,
        BadBufferSize = 4,
        OutOfBounds = 5,
    }

    export enum TextureError {
        BadInput = 6,
    }

    export enum FontError {
        BadInput = 7,
    }
}
