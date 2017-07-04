class AboutController {
  constructor() {
    this.name = 'about';
  }
  $onInit() {
    console.log(this);
  }
}

AboutController.$inject = [];

export default AboutController;
