import angular from 'angular';
import Masthead from './masthead/masthead'; 
import Navbar from './navbar/navbar';

const CommonModule = angular.module('app.common', [
  Masthead,
  Navbar,
]).name;

export default CommonModule;
