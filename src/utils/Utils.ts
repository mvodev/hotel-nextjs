class Utils {
  
  static getLastNumber(value: number): number {
    return Number(value.toString().split("").pop());
  }

  static getPosInSpellCasesArray(result: number): number {
    if (result === 1) {
      return 0;
    }
    else if (result >= 5 && result < 21) {
      return 2;
    }
    else if
      (Number(this.getLastNumber(result)) >= 2 && Number(this.getLastNumber(result)) <= 4) {
      return 1;
    }
    else {
      return 2;
    }
  }

}
export default Utils;
