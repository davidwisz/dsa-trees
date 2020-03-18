/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let treeStack = [this.root];
    let total = 0;
    if (treeStack[0] === null) return total;
    while (treeStack.length) {
      let current = treeStack.pop();

      total += current.val; 
      for (let child of current.children) 
        treeStack.push(child)
    }
    return total;
  }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let treeStack = [this.root];
    let total = 0;
    if (treeStack[0] === null) return total;
    while (treeStack.length) {
      let current = treeStack.pop();
      if (current.val % 2 === 0) {
        total ++; 
      }
      
      for (let child of current.children) 
        treeStack.push(child)
    }
    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let treeStack = [this.root];
    let total = 0;
    if (treeStack[0] === null) return total;
    while (treeStack.length) {
      let current = treeStack.pop();
      if (current.val > lowerBound) {
        total ++; 
      }
      
      for (let child of current.children) 
        treeStack.push(child)
    }
    return total;
  }
}

module.exports = { Tree, TreeNode };
