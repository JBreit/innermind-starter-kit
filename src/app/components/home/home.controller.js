class HomeController {
  constructor() {
    this.name = 'home';
  }
  $onInit() {
    console.log(this);
  }
}

HomeController.$inject = [];

export default HomeController;
