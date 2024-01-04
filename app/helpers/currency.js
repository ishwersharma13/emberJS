import Helper from '@ember/component/helper';

export default class currency extends Helper {
  compute(param, hash = {}) {
    const [number] = param;
    const { sign = '₹' } = hash;
    const rupee = Math.floor(number);
    let paise = Math.floor(number * 100 % 100);
    if (paise.toString().length === 1) {
      paise = '0' + paise;
    }
    return `${sign}${rupee}.${paise}`;
  }
}
