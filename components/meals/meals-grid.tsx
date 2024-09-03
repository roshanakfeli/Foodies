import MealItem from "./meal-item";

interface IProps {
  meals: any;
}

const MealsGrid = ({ meals }: IProps) => {
  return (
    <ul className="w-[90%] max-w-[90rem] grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-20 mx-auto mt-8 mb-8 list-none p-0">
      {meals.map((meal: any) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
