class UserController {
  constructor() {
    this.name = 'user';
  }
  $onInit() {
    console.log(this);
  }
}

UserController.$inject = [];

export default UserController;
