import Service from './service.js';

class Requests {
  constructor(conn) {
    this.ser = new Service(conn);
    this.method = this.getRequestMethod();
    this.GETdata = this.getQueryParams();
    this.POSTdata = this.getPostData();
    
    const cmd = this.GETdata.cmd || "";
    this.controler(cmd);
  }

  getRequestMethod() {
    return window.location.method; // Adjust as necessary for your environment
  }

  getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const data = {};
    for (const [key, value] of params.entries()) {
      data[key] = value;
    }
    return data;
  }

  getPostData() {
    // This function needs to be implemented based on how you handle POST data in your JavaScript environment
    return {}; // Placeholder for actual POST data handling
  }

  controler(cmd) {
    cmd = cmd.replace("cmd/", "");
    switch (cmd) {
      case "getPeopleList":
        this.output(this.ser.getPeopleList());
        break;
      case "getTypesList":
        this.output(this.ser.getTypesList());
        break;
      case "saveDrinks":
        this.output(this.ser.saveDrinks(this.POSTdata));
        break;
      case "listCmd":
        this.output(["getPeopleList", "getTypesList", "saveDrinks", "getSummaryOfDrinks"]);
        break;
      case "getSummaryOfDrinks":
        this.output(this.ser.getSummaryOfDrinks(this.GETdata));
        break;
      default:
        this.output("err");
    }
  }

  output(str) {
    if (!Array.isArray(str)) {
      console.log(JSON.stringify({ msg: str }));
    } else {
      console.log(JSON.stringify(str));
    }
  }
}
