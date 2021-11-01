class Utils {
  
  static getLastNumber(value: number): number {
    return Number(value.toString().split("").pop());
  }

  static getPosInSpellCasesArray(result: number): number {
    let res = 0;
    if (result === 1) {
      res = 0;
    }
    else if (result >= 5 && result < 21) {
      res = 2;
    }
    else if
      (Number(this.getLastNumber(result)) >= 2 && Number(this.getLastNumber(result)) <= 4) {
      res = 1;
    }
    else {
      res =  2;
    }
    return res;
  }

}
export default Utils;
