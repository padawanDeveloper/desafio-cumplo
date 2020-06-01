const values = {value: 'Valor', date: 'Fecha'};
const getData = (data, key) => data[`${values[key]}`];
const parseDollarHistory = data =>
  new Promise(resolve =>
    resolve(
      data.map(dollarData => ({
        value: parseFloat(getData(dollarData, 'value').replace(',', '.')),
        date: new Date(getData(dollarData, 'date')),
      }))
    )
  );

const floatFormat = val => parseFloat(val).toFixed(2);
const calcAvg = resp =>
  floatFormat(
    resp.reduce((total, current) => {
      return total + current.value;
    }, 0) / resp.length
  );

const mathCalc = (values, cal) =>
  floatFormat(
    Math[cal].apply(
      Math,
      values.map(val => val.value)
    )
  );

const parseData = async data => {
  const result = await parseDollarHistory(data);
  const history = result;
  const max = mathCalc(result, 'max');
  const min = mathCalc(result, 'min');
  const avg = calcAvg(result);
  return {avg, history, max, min};
};

const parseDate = date => (date < 10 ? '0' : '');
function getValues(date) {
  const day = +parseDate(date.getDate()) + date.getDate();
  const month = +parseDate(date.getMonth()) + (date.getMonth() + 1);
  const year = date.getFullYear();
  return {year, month, day};
}

function buildQuery(data) {
  const start = getValues(new Date(data.startDate));
  const end = getValues(new Date(data.endDate));
  return `/periodo/${start.year}/${start.month}/dias_i/${start.day}/${end.year}/${end.month}/dias_f/${end.day}`;
}

export {buildQuery, parseData};
