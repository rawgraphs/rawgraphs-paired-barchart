import data from '../datasets/hello.csv'
import hellochart from 'customcharts/hellochart'

export default {
  chart: hellochart,
  data,
  dataTypes: {
    hello_column: 'string',
  },
  mapping: {
    name: { value: ['hello_column'] },
  },
  visualOptions: {
    color: 'green',
  },
}
