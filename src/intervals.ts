export interface IntervalDefintion {
  value: string;
  root: [number, number];
  interval: [number, number];
}

const intervals: IntervalDefintion[] = [
  {
    value: "b2/b9",
    root: [5, 5],
    interval: [5, 6],
  },
  {
    value: "b2/b9",
    root: [5, 5],
    interval: [4, 1],
  },
  {
    value: "b2/b9",
    root: [3, 5],
    interval: [5, 4],
  },
  {
    value: "b2/b9",
    root: [2, 5],
    interval: [1, 2],
  },
  {
    value: "b2/b9",
    root: [0, 5],
    interval: [2, 3],
  },
  {
    value: "2/9",
    root: [5, 5],
    interval: [5, 7],
  },
  {
    value: "2/9",
    root: [5, 5],
    interval: [4, 2],
  },
  {
    value: "2/9",
    root: [3, 5],
    interval: [5, 5],
  },
  {
    value: "2/9",
    root: [2, 5],
    interval: [1, 3],
  },
  {
    value: "2/9",
    root: [0, 5],
    interval: [2, 4],
  },
  {
    value: "b3",
    root: [5, 3],
    interval: [4, 1],
  },
  {
    value: "b3",
    root: [5, 3],
    interval: [5, 6],
  },
  {
    value: "b3",
    root: [3, 5],
    interval: [4, 1],
  },
  {
    value: "b3",
    root: [3, 5],
    interval: [5, 6],
  },
  {
    value: "b3",
    root: [2, 3],
    interval: [1, 2],
  },
  {
    value: "b3",
    root: [1, 6],
    interval: [2, 1],
  },
  {
    value: "b3",
    root: [1, 4],
    interval: [3, 4],
  },
  {
    value: "3",
    root: [5, 2],
    interval: [5, 6],
  },
  {
    value: "3",
    root: [5, 3],
    interval: [4, 2],
  },
  {
    value: "3",
    root: [3, 5],
    interval: [4, 2],
  },
  {
    value: "3",
    root: [3, 3],
    interval: [5, 5],
  },
  {
    value: "3",
    root: [2, 2],
    interval: [1, 2],
  },
  {
    value: "3",
    root: [1, 5],
    interval: [2, 1],
  },
  {
    value: "b3",
    root: [5, 3],
    interval: [4, 1],
  },
  {
    value: "3",
    root: [1, 3],
    interval: [3, 4],
  },
  {
    value: "4/11",
    root: [5, 3],
    interval: [4, 3],
  },
  {
    value: "4/11",
    root: [3, 5],
    interval: [4, 3],
  },
  {
    value: "4/11",
    root: [2, 3],
    interval: [1, 4],
  },
  {
    value: "4/11",
    root: [1, 4],
    interval: [2, 1],
  },
  {
    value: "4/11",
    root: [1, 4],
    interval: [3, 6],
  },
  {
    value: "4/11",
    root: [2, 2],
    interval: [4, 5],
  },

  {
    value: "#4/b5",
    root: [5, 3],
    interval: [4, 4],
  },
  {
    value: "#4/b5",
    root: [5, 5],
    interval: [3, 1],
  },
  {
    value: "#4/b5",
    root: [2, 2],
    interval: [3, 1],
  },
  {
    value: "#4/b5",
    root: [2, 2],
    interval: [1, 4],
  },
  {
    value: "#4/b5",
    root: [1, 4],
    interval: [2, 2],
  },
  {
    value: "#4/b5",
    root: [3, 5],
    interval: [1, 2],
  },
  {
    value: "5",
    root: [5, 3],
    interval: [4, 5],
  },
  {
    value: "5",
    root: [5, 5],
    interval: [3, 2],
  },
  {
    value: "5",
    root: [2, 2],
    interval: [3, 2],
  },
  {
    value: "5",
    root: [1, 3],
    interval: [2, 2],
  },
  {
    value: "5",
    root: [3, 5],
    interval: [1, 3],
  },
  {
    value: "5",
    root: [2, 2],
    interval: [1, 5],
  },
  {
    value: "b6/b13/#5",
    root: [5, 3],
    interval: [4, 6],
  },
  {
    value: "b6/b13/#5",
    root: [5, 5],
    interval: [3, 3],
  },
  {
    value: "b6/b13/#5",
    root: [3, 5],
    interval: [3, 1],
  },
  {
    value: "b6/b13/#5",
    root: [3, 3],
    interval: [1, 2],
  },
  {
    value: "b6/b13/#5",
    root: [2, 2],
    interval: [1, 6],
  },
  {
    value: "b6/b13/#5",
    root: [1, 2],
    interval: [2, 2],
  },
  {
    value: "b6/b13/#5",
    root: [3, 3],
    interval: [4, 3],
  },
  {
    value: "6/13",
    root: [5, 3],
    interval: [4, 7],
  },
  {
    value: "6/13",
    root: [5, 3],
    interval: [3, 2],
  },
  {
    value: "6/13",
    root: [3, 3],
    interval: [1, 3],
  },
  {
    value: "6/13",
    root: [3, 3],
    interval: [4, 5],
  },
  {
    value: "6/13",
    root: [1, 2],
    interval: [2, 3],
  },
  {
    value: "6/13",
    root: [3, 5],
    interval: [3, 2],
  },
  {
    value: "b7",
    root: [5, 3],
    interval: [3, 3],
  },
  {
    value: "b7",
    root: [5, 2],
    interval: [5, 1],
  },
  {
    value: "b7",
    root: [3, 3],
    interval: [4, 6],
  },
  {
    value: "b7",
    root: [3, 3],
    interval: [1, 4],
  },
  {
    value: "b7",
    root: [1, 3],
    interval: [2, 5],
  },
  {
    value: "7",
    root: [5, 3],
    interval: [3, 4],
  },
  {
    value: "7",
    root: [5, 3],
    interval: [5, 2],
  },
  {
    value: "7",
    root: [4, 2],
    interval: [5, 6],
  },
  {
    value: "7",
    root: [3, 2],
    interval: [1, 4],
  },
  {
    value: "7",
    root: [1, 2],
    interval: [2, 5],
  },
];

export default intervals;
