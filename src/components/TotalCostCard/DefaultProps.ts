import TypeTotalCostCardProps from './Types';

const totalCostCardDefaultProps: TypeTotalCostCardProps = {
  roomNumber: 888,
  isLuxury: true,
  costPerDay: 9990,
  discount: 2179,
  fee: 300,
  initDate: [
    new Date(),
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 4
    ),
  ],
  adult: 2,
  child: 1,
  infants: 0,
};

export default totalCostCardDefaultProps;
