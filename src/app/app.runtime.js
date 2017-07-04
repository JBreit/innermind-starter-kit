const Runtime = ($rootScope, $state, $stateParams) => {
  'ngInject';

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
};

export default Runtime;
