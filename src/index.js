export function getPercents(number,percent) {
    if ((number,percent) > 0 && (number,percent) < 100) {
      return number / 100 * percent;
    } else if (percent < 0 || percent > 100) {
      return NaN;
    } else if (isNaN(number) || isNaN(percent)) {
      return 'Введите два числа';
    } else if (number === 0 || percent === 0) {
      return 0;
    } else if (percent == 100) {
      return number;
    }
  }