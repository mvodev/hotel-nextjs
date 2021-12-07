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

export type { TypeHandleProps, TypeHandleMoveArgs, TypeCalcPositionArgs };
