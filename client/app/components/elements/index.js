import angular from 'angular';
import uiRouter from 'angular-ui-router';
import elementComponent from './component';

let elementModule = angular.module('element', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('element', {
      url: '/element',
      component: 'element'
    });
})

.component('element', elementComponent)
  
.name;

export default elementModule;
