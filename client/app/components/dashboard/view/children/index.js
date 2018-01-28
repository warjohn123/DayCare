import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './component';

let viewChildrenModule = angular.module('dashboard', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      component: 'dashboard'
    });
})

.component('dashboard', dashboardComponent)
  
.name;

export default viewChildrenModule;
