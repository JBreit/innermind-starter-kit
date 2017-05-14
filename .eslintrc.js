module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "import"
  ],
  "rules": {
    // windows linebreaks when not in production environment
    "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"]
  }
};
