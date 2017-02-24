import FractohFlowTree from 'FractohFlowTree.js';

class FractohRouter {
  constructor(view) {
    this.view = view;
    this.view.setRouter(this);
    
    this.location = [];
    this.flowTree = FractohFlowTree;
  }
  
  getOptions() {
    let options = this.flowTree;
    for (let path of this.location) {
      options = options[path];
    }
    
    return options;
  }
  
  choose(path) {
    const options = this.getOptions();
    if (options[path] === '..') {
      this.location.pop();
      this.view.update();
    } else if ('object' === typeof options[path]) {
      this.location.push(path);
      this.view.update();
    } else {
      options[path](this);
    }
  }
}

export default FractohRouter;
