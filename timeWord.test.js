const timeWord = require('./timeWord');

// Examples of the output we'd like:

// Input	Expected Output
// 00:00	midnight
// 00:12	twelve twelve am
// 01:00	one o'clock am
// 06:01	six oh one am
// 06:10	six ten am
// 06:18	six eighteen am
// 06:30	six thirty am
// 10:34	ten thirty four am
// 12:00	noon
// 12:09	twelve oh nine pm
// 23:23	eleven twenty three pm

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('00:00 -> midnight', () => {
    const res = timeWord('00:00');
    expect(res).toEqual('midnight');
  });
  test('00:12 -> twelve twelve am', () => {
    const res = timeWord('00:12');
    expect(res).toEqual('twelve twelve am');
  });
  test(`01:00 -> one o'clock am`, () => {
    const res = timeWord('01:00');
    expect(res).toEqual(`one o'clock am`);
  });
  test(`06:01 -> six oh one am`, () => {
    const res = timeWord('06:01');
    expect(res).toEqual(`six oh one am`);
  });
  test(`06:10 -> six ten am`, () => {
    const res = timeWord('06:10');
    expect(res).toEqual(`six ten am`);
  });
  test(`06:18 -> six eighteen am`, () => {
    const res = timeWord('06:18');
    expect(res).toEqual(`six eighteen am`);
  });
  test(`06:30 -> six thirty am`, () => {
    const res = timeWord('06:30');
    expect(res).toEqual(`six thirty am`);
  });
  test(`10:34 -> ten thirty four am`, () => {
    const res = timeWord('10:34');
    expect(res).toEqual(`ten thirty four am`);
  });
  test(`12:00 -> noon`, () => {
    const res = timeWord('12:00');
    expect(res).toEqual(`noon`);
  });
  test(`12:09 -> twelve oh nine pm`, () => {
    const res = timeWord('12:09');
    expect(res).toEqual(`twelve oh nine pm`);
  });
  test(`23:23 -> eleven twenty three pm`, () => {
    const res = timeWord('23:23');
    expect(res).toEqual(`eleven twenty three pm`);
  });
});