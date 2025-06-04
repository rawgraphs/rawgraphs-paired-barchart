import data from '../datasets/nobel_winners_2024_wikidata.csv'
import chart from 'customcharts/barchartpaired'

export default {
  chart,
  data,
  dataTypes: {
    Age: 'string',
    Male: 'number',
    Female: 'number',
  },
  mapping: {
    x1: { value: ['Female'] },
    x2: { value: ['Male'] },
    y: { value: ['Age'] },
  },
  visualOptions: {
    width: 800,
    height: 600,
    padding: 0,
    labelLeftRotation: 45,
    labelLeftAlignment: 'start',
    background: 'white',
    title: 'My title',
    useSameScale: true,
  },
}
