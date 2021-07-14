class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(item){
      this.queue.push(item)
    }

    dequeue(){
        if(this.queue.length){
           return this.queue.shift()
        }
    }
}

const passenger = new Queue();

passenger.enqueue('Karim');
passenger.enqueue('Sadid');
passenger.enqueue('Manik');
passenger.enqueue('Rasel');

console.log(passenger.queue);

const firstPassenger = passenger.dequeue();
console.log(firstPassenger);

console.log(passenger.queue);
