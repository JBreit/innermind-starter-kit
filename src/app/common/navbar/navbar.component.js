// import template from './navbar.html';
import controller from './navbar.controller';
// import './navbar.scss';

const navbarComponent = {
  bindings: {},
  template: `
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item" ui-sref-active="active">
          <a class="nav-link" ui-sref="home">
            <i class="fa fa-home fa-lg nav-icon"></i>
            <span class="nav-text"> Home</span>
          </a>
        </li>
        <li class="nav-item" ui-sref-active="active">
          <a class="nav-link" ui-sref="about">
            <i class="fa fa-id-card fa-lg nav-icon"></i>
            <span class="nav-text"> About</span>
          </a>
        </li>
      </ul>
    </nav>
  `,
  controller,
};

export default navbarComponent;
