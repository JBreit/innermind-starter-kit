class NotFoundController {
  contructor() {
    this.name = '404';
  }
}

const NotFound = {
  url: '/404',
  template: `
    <main>
      <div>
        <h1>404 Not Found</h1>
      </div>
    </main>
  `,
  controller: NotFoundController,
};

export default NotFound;
