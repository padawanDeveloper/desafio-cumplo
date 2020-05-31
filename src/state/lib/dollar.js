const values = {value: 'Valor', date: 'Fecha'};
const getData = (data, key) => data[`${values[key]}`];
const parseData = data =>
  data.map(dollarData => ({
    value: parseFloat(getData(dollarData, 'value').replace(',', '.')),
    date: new Date(getData(dollarData, 'date')),
  }));

const parseDate = date => (date < 10 ? '0' : '');
function getValues(date) {
  const day = +parseDate(date.getDate()) + date.getDate();
  const month = +parseDate(date.getMonth()) + (date.getMonth() + 1);
  const year = date.getFullYear();
  return {year, month, day};
}

function buildQuery(data) {
  const start = getValues(data.startDate);
  const end = getValues(data.endDate);
  return `${start.year}/${start.month}/dias_i/${start.day}/${end.year}/${end.month}/dias_f/${end.day}`;
}

export {buildQuery, parseData};
