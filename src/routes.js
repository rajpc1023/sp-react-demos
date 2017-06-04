import FunctionalPropsContainer from './demos/FunctionalPropsContainer';
import ClassPropsContainer from './demos/ClassPropsContainer';
import PassingData from './demos/PassingData';
import Transactions from './tx/Transactions';
import Demos from './Demos';
import ReduxCounter from './demos/ReduxCounter';

const routes = [
  {
    path     : '/tx',
    component: Transactions,
  },
  {
    path     : '/demos',
    component: Demos,
    routes   : [
      {
        path     : '/demos/functional-props',
        component: FunctionalPropsContainer,
        label: 'Functional Component with props'
      },
      {
        path     : '/demos/class-props',
        component: ClassPropsContainer,
        label: 'Class Component with props'
      },
      {
        path     : '/demos/passing-data',
        component: PassingData,
        label: 'Passing Data'
      },
      {
        path: '/demos/redux-counter',
        component: ReduxCounter,
        label: 'Incremental counter with Redux'
      }
    ]
  }
];

export default routes;