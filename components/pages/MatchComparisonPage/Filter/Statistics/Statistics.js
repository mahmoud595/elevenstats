import FilterTabWrapper from '../FilterTabWrapper/FilterTabWrapper';
import Tabs from '../TabsWrapper/TabsWrapper';
import Stats from './Stats/Stats';

const data = [
  {
    label: 'all',
    index: 0,
    component: <Stats />,
  },
  {
    label: 'general',
    index: 1,
    component: <Stats />,
  },
  {
    label: 'goals',
    index: 2,
    component: <Stats />,
  },
  {
    label: 'half',
    index: 3,
    component: <Stats />,
  },
  {
    label: 'corners',
    index: 4,
    component: <Stats />,
  },
  {
    label: 'cards',
    index: 5,
    component: <Stats />,
  },
  {
    label: 'odds',
    index: 6,
    component: <Stats />,
  },
];

const Statistics = () => {
  return (
    <FilterTabWrapper title="view Statistics">
      <Tabs data={data} />
    </FilterTabWrapper>
  );
};

export default Statistics;
