class AppController {
  constructor() {
    this.name = 'app';
  }
  $onInit() {
    console.log(this);
  }
}

AppController.$inject = [];

export default AppController;
