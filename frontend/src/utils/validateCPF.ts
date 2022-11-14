export const validateCPF = (cpf: string) => {
  if (cpf.length == 11) {
    let checkDigitOne = 0;
    let checkDigitTwo = 0;

    for (let i = 10; i >= 2; i--) {
      checkDigitOne += Number(cpf[10 - i]) * i;
    }

    checkDigitOne =
      (checkDigitOne * 10) % 11 == 10 ? 0 : (checkDigitOne * 10) % 11;

    if (checkDigitOne == Number(cpf[9])) {
      for (let i = 11; i >= 2; i--) {
        checkDigitTwo += Number(cpf[11 - i]) * i;
      }

      checkDigitTwo =
        (checkDigitTwo * 10) % 11 == 10 ? 0 : (checkDigitTwo * 10) % 11;

      return checkDigitTwo == Number(cpf[10]) ? true : false;
    }

    return checkDigitOne;
  }
  return false;
};
