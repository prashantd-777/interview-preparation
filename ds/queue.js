
// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element) {
//         this.items.push(element);
//     }

//     dequeue() {
//         return this.items.shift();
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }

//     peek() {
//         if(this.isEmpty()) {
//             return null;
//         }

//         return this.items[0];
//     }

//     size() {
//         return this.items.length
//     }

//     print() {
//         console.log(this.items.toString())
//     }
// }


class Queue {
    constructor() {
        this.items = {};
        this.rare = 0;
        this.front = 0;
    }

    enqueue(element) {
        this.items[this.rare] = element;
        this.rare++;
    }

    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item
    }

    isEmpty() {
        return this.rare - this.front === 0;
    }

    size() {
        return this.rare - this.front;
    }

    peek() {
        return this.items[this.front];
    }

    print() {
        console.log(this.items)
    }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.dequeue();
queue.print();
console.log(queue.size());
console.log(queue.peek());
