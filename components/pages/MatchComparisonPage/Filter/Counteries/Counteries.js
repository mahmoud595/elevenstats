import FilterTabWrapper from '../FilterTabWrapper/FilterTabWrapper';
import MainFilters from '../MainFilters/MainFilters';

const countries = [
  'England',
  'Spain',
  'Mexico',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
  'England',
  'Spain',
  'Mexico',
  'USA',
];
const Counteries = () => {
  return (
    <FilterTabWrapper title="select counteries">
      <MainFilters data={countries} />
    </FilterTabWrapper>
  );
};

export default Counteries;
