const config = new function () {
  this.port = '3000';
  this.root = 'http://localhost:' + this.port;
  this.static = this.root + '/static/';
};

export default config