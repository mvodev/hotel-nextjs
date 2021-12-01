const validateDate = (inputText: string): boolean => {
  const dateformat = /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.\d{4}$/;
  if (inputText.match(dateformat)) {
    const [dd, mm, yy] = inputText.split('.').map(Number);
    const listOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (mm === 2) {
      const lyear = (!(yy % 4) && yy % 100) || !(yy % 400);
      if (lyear === false && dd >= 29) {
        return false;
      }
      if (lyear === true && dd > 29) {
        return false;
      }
    }
    if (mm === 1 || mm > 2) {
      if (dd > listOfDays[mm - 1]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

export default validateDate;
