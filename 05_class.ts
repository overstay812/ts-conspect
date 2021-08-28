class TypeScript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }
  info(name: string): string {
    return `${name}: Typescript version is ${this.version}`;
  }
}

class Car {
  readonly model: string;
  readonly numberOfWeels: number = 4;

  constructor(theModel: string) {
    this.model = theModel; // can wrigth the readonly property only inside constructor
  }
}

// class Car2 {
//   readonly numberOfWeels: number = 4;
//   constructor(readonly model: string) {}
// }

//---------------

class Animal {
  protected voice: string = "";
  public color: string = "black";

  constructor() {
    let someVar = this.go; // can use this ptivate go() only in this constructor
    someVar();
  }

  private go() {
    console.log("go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice; // can chachge protected property only in this method
  }
}

const cat = new Cat();
cat.setVoice("meow meow");
const dog = new Animal();

// --------------

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("render done!");
  }
  info(): string {
    return "this is info";
  }
}
