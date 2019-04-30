if (root === null) return -1;

return Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
