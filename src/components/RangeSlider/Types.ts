type TypeRangeSliderProps = {
  min?: number;
  max?: number;
  from?: number;
  to?: number;
  step?: number;
};

type TypeCalcPositionArgs = {
  pageX: number;
  shift?: number;
  offset?: number;
};

type TypeHandleMoveArgs = {
  handleID: number;
} & Required<TypeCalcPositionArgs>;

type TypeHandleProps = {
  handlePointerMove: (args: TypeHandleMoveArgs) => void;
  position: number;
  handleID: number;
};

export type {
  TypeRangeSliderProps,
  TypeHandleProps,
  TypeHandleMoveArgs,
  TypeCalcPositionArgs,
};
