import angular from 'angular';
import Home from './home/home';
import Elements from './elements/';

let componentModule = angular.module('app.components', [
  Home,
  Elements
])

.name;

export default componentModule;
