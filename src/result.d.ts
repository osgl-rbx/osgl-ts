export interface Result<T, E> {
    isOk: boolean;
    value: T | E;

    Unwrap: (this: Result<T, E>) => T;
    Expect: (this: Result<T, E>, message: string) => T;

    UnwrapErr: (this: Result<T, E>) => E;
    ExpectErr: (this: Result<T, E>, message: string) => E;

    UnwrapOr: (this: Result<T, E>, value: T) => T;
    Or: (this: Result<T, E>, value: Result<T, E>) => Result<T, E>;
}
