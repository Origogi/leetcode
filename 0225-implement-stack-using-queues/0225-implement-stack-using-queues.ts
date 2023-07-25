class MyStack {
    
    memory : number[] = [];
    
    constructor() {

    }

    push(x: number): void {
        this.memory.push(x);
    }

    pop(): number {
        return this.memory.pop();
    }

    top(): number {
        return this.memory[this.memory.length -1];
    }

    empty(): boolean {
        return this.memory.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */