import FilterTabWrapper from '../FilterTabWrapper/FilterTabWrapper';
import MainFilters from '../MainFilters/MainFilters';

const leagues = [
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
  'la liga',
  'premier league',
];
const League = () => {
  return (
    <FilterTabWrapper title="select League">
      <MainFilters data={leagues} />
    </FilterTabWrapper>
  );
};

export default League;
