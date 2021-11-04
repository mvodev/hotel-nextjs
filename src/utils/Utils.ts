class Utils {

  static getPosInSpellCasesArray(result: number): number {
    const cases = [2, 0, 1, 1, 1, 2];
    return ((result % 100) > 4 && (result % 100) < 20)? 2 : cases[( result % 10 < 5)? result % 10 : 5];
  }

}

export default Utils;
