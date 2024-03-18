interface IGraphicsDatas {
  name: string;
  quantity: GLfloat;
  ratio: GLfloat | string;
}

const graphicsDatasMock: IGraphicsDatas[] = [
  {
    name: 'New',
    quantity: 30,
    ratio: 46.15,
  },
  {
    name: 'New',
    quantity: 20,
    ratio: 30.77,
  },
  {
    name: 'New',
    quantity: 10,
    ratio: 15.38,
  },
  {
    name: 'New',
    quantity: 5,
    ratio: 7.69,
  },
];

const pieChartMock = graphicsDatasMock.map((element, index) => ({
  name: element.name,
  value: element.quantity,
  color:
    index == 0
      ? 'red.3'
      : index === 1
        ? 'bleu.3'
        : index === 2
          ? 'yellow.3'
          : 'green.3',
}));
