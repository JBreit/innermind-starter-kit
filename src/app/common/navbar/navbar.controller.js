class NavbarController {
  constructor() {
    this.name = '_n';
    this.routes = [];
  }
  $onInit() {
    console.log(this);
  }
}

NavbarController.$inject = [];

export default NavbarController;
