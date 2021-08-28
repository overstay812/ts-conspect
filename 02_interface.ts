interface IRect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    heigth: number;
  };
}

const rect: IRect = {
  id: "1234",
  size: {
    width: 10,
    heigth: 20,
  },
};

rect.color = "#ccc";

const rect2 = {} as IRect; // to ask Andry to explane this
const rect3 = <IRect>{};

// --------- extended ----------

interface RectWidthArea extends IRect {
  getArea: () => number;
}
const rect4: RectWidthArea = {
  id: "123",
  size: {
    width: 20,
    heigth: 30,
  },
  getArea(): number {
    return this.size.width * this.size.heigth;
  },
};

//  ------------ implements ------------

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// ----------------

interface IStyles {
  [key: string]: string;
}

const scss: IStyles = {
  border: "1px solid red",
  margin: "2px",
  borderRadius: "4px",
};
