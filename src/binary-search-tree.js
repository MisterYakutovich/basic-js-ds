const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data){
      this.data=data;
      this.left=null;
      this.right=null
  }
}
class BinarySearchTree {
  constructor(){
    this.root=null
}

  root() {
 
  }

  add(data) {
    let newNode=new Node(data)
    if (this.root===null){
        this.root=newNode
    }else{
        this.addNode(this.root,newNode)
    }
}
addNode(node,newNode){
    if(newNode.data<node.data){
        if(node.left===null){
            node.left=newNode
        }else{
            this.addNode(node.left,newNode)
        }
    }else{
        if(node.right===null){
            node.right=newNode
        }else{
            this.addNode(node.right,newNode)
        }
    }
}
   
    has(data) {
      var node = this.root;
      var traverse = function(node) {
          if (!node) return false;
          if (data === node.data) {
              return true;
          } else if (data > node.data) {
              return traverse(node.right);
          } else if (data < node.data) {
              return traverse(node.left);
          }
      };
      return traverse(node);
  };
  

  
    find(data) {
        if (!this.root) return false;

        let currentNode = this.root;
        while (true) {
            // Check if the currentNode's value is equal to val, and return true
            if (currentNode.data === data) return true;

            // Check if the val parameter is lesser than the currentNode's val
            if (data < currentNode.data) {
                // Check if there is no 'left' node to the currentNode, and return false
                if (!currentNode.left) return false;

                // Otherwise, continue searching after setting the new currentNode to the 'left' property of the currentNode
                currentNode = currentNode.left;
            } else {
                // If this code is executed, it means that 'val' is greater than currentNode.val

                // Check if there is no node to the 'right' of currentNode, and return false
                if (!currentNode.right) return false;

                // Otherwise, continue searching after setting the new currentNode to be the 'right' property of the currentNode
                currentNode = currentNode.right;
            }
        }
      /*  if (this.comparator(this.data, data) === 0) return this;
    
        if (this.comparator(this.data, data) < 0 && this.left) {
          return this.left.find(data);
        }
    
        if (this.comparator(this.data, data) > 0 && this.right) {
          return this.right.find(data);
        }
    
        return null;*/
      }
  

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, data) {
    if (node === null) {
        return null;
    // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
    } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
    // если данные такие как данные корня, удаляем узел
    } else {
        // удаляем узел без потомков (листовой узел (leaf) или крайний)
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        // удаляем узел с одним потомком
        if (node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }
        // удаляем узел с двумя потомками
        // minNode правого поддерева хранится в новом узле
        let newNode = this.min(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
}
min(node) {
  if (node.left === null)
      return node;
  else
      return this.findMinNode(node.left);
}
  min(){
    var node = this.root;
    var traverse = function(node) {
        return !node.left ? node.data : traverse(node.left);
    };
    return traverse(node);
    }

  max(){
    var node = this.root;
    var traverse = function(node) {
        return !node.right ? node.data : traverse(node.right);
    };
    return traverse(node);
}
}
const BST=new BinarySearchTree()
//const BST=new BinarySearchTree()

module.exports = {
  BinarySearchTree
};