namespace MyMath {
    const PI = 3.14;

    export namespace Circle {
        export function calculateCircumference(diameter: number) {
            return diameter * PI;
        }

        export function calculateRectangle(width: number, length: number) {
            return width * length;
        }
    }
}
