import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import NavbarComponent from './navbar.component';

const navbarModule = angular.module('navbar', [uiRouter])
  .component('navbar', NavbarComponent)
  .name;

export default navbarModule;
