function Solution(){
  //Write your code here
    this.stack = [];
    this.queue = [];

    this.pushCharacter = (value) => this.stack.push(value); 
    this.enqueueCharacter = (value) => this.queue.push(value);

    this.popCharacter = () => this.stack.pop();
    this.dequeueCharacter = () => this.queue.shift();
}
