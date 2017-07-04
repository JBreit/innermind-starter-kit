class MastheadController {
  constructor() {
    this.name = 'masthead';
    this.title = 'ngIMCO';
  }
  $onInit() {
    console.log(this);
  }
}

MastheadController.$inject = [];

export default MastheadController;
