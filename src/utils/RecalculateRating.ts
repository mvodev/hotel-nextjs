type ResponsesType = {
  perfect: number,
  good: number,
  satisfactory: number,
  poor: number
}

const RecalculateRating = ({
  perfect,
  good,
  satisfactory,
  poor
}: ResponsesType): number => {
  
    const realValue = perfect * 4 + good * 3 + satisfactory * 2 + poor * 1;
    const maxValue = (perfect + good + satisfactory + poor) * 4;

    return Math.round((realValue / maxValue) * 5)
}

export default RecalculateRating;