const strip = (x: string | number) => {
  if (typeof x === "string") {
    return x.trim();
  }
  if (typeof x === "number") {
    return x.toFixed(2);
  }
};

// -------------

class MyResponse {
  header = "response header";
  result = "response result";
}

class MyError {
  header = "error header";
  message = "error message";
}

const hendle = (res: MyResponse | MyError) => {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    };
  }
  if (res instanceof MyError) {
    return {
      info: res.header + res.message,
    };
  }
};

//----------

type AlertType = "succsess" | "danger" | "warning";

const setAlertType = (type: AlertType): void => console.log(type);
// setAlertType("warning");
// setAlertType("succsess");
// setAlertType("default");    //will get error
