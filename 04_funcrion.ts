const add = (a: number, b: number): number => a + b;

const toUpperCase = (str: string): string => str.toUpperCase();
// toUpperCase('hellow world')

// ---------- function overloading -----------

interface IMyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface IMyPositionWithDefault extends IMyPosition {
  default: string;
}

function position(): IMyPosition;
function position(a: number): IMyPositionWithDefault;
function position(a: number, b: number): IMyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }
  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() };
  }
  if (a && b) {
    return { x: a, y: b };
  }
}
console.log("empty: ", position());
console.log("One param: ", position(10));
console.log("two params: ", position(10, 20));
