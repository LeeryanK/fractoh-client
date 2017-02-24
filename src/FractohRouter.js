import FractohFlowTree from 'FractohFlowTree.js';

class FractohRouter {
  constructor(view) {
    this.view = view;
    this.location = '/';
    this.flowTree = FractohFlowTree;
  }
}

export default FractohRouter;
