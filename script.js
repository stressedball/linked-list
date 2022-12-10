'use strict';

let head = undefined;

function LinkedList(value) {

    const append = (element) => {
        const node = new Node(element);
        if (head === undefined) {
            head = node;
            return;
        } else {
            let target = head;
            while (target.nextNode !== null) {
                target = target.nextNode;
            }
            target.nextNode = node;
        }
    }

    // returns value at index n
    const atIndex = (n) => {
        if (head === undefined) {
            return console.log('Empty list, no index to retrieve.')
        }
        // head exists so we start the counting from 0
        let target = head;
        let index = 0; // index 0 is head
        while (index < n) {
            if (target.nextNode === null) {
                return console.log('Searched index is higher than last node.')
            } else {
                target = target.nextNode;
                index++;
            }
        }
        return console.log(`Node at index ${n} : `, target)
    }

    const contains = (string) => {
        if (head === undefined) {
            return console.log('No elements to search.');
        }
        let target = head;
        for (let i = 0; i < Infinity; i++) {
            if (target.nextNode === null && target.value !== string) {
                return console.log('We couldn\'t find the value in the list');
            }
            if (target.value === string) {
                return console.log('Node found : ', target);
            } else {
                target = target.nextNode;
                i++;
            }
        }
    }

    // return index of searched value
    const find = (string) => {
        if (head === undefined) {
            return console.log('Empty list. Can\'t find any value');
        }
        let target = head;
        let count = 0;
        while (target.value !== string && target.nextNode !== null) {
            target = target.nextNode;
            count ++;
        }

        if (target.nextNode === null && target.value !== string) {
            return console.log('We couldn\'t find the searched value.');
        }

        return console.log('Searched value at Node : ', count);
    }

    const getHead = () => {
        if (head === undefined) {
            // return 'We don`t have any element. Please type a name.';
            return console.log('We don`t have any element. Please type a name.');
        } else {
            return console.log('HEAD ', 'value : ', head.value, 'Next node : ', head.nextNode.value);
        }
    }

    const insertAt = (value, index) => {
        if (head === undefined) {
            return console.log('No list, can\'t insert new node');
        }
        let target = head;
        let n = 0; // starts at head

        // first check if we have the index
        while (n < index) {
            if (target.nextNode === null) {
                return console.log('Searched index is higher than last node.')
            } else {
                target = target.nextNode;
                n++;
            }
        }

        // we need to traverse once again to find the previous node
        // we found the index, and assign it current node
        const currentNode = target; 

        const insertNode = new Node(value); // we make a new node for the value to be inserted
        insertNode.nextNode = currentNode; // it will point to the currentNode

        // we need to find the node that points to the current one
        // in order to change its nextnode to the insertNode
        target = head; // we go back from head
        while (target.nextNode.value !== currentNode.value) { // while the nextnode value doesn't match the current node value
            target = target.nextNode;
        }
        const previousNode = target; // we found the previous node that points to the current node
        previousNode.nextNode = insertNode; // we tell it to point to the new inserted one
        return;
    }

    const prepend = (element) => {
        const node = new Node(element);
        if (head === undefined) {
            head = node;
            return;
        } else {
            node.nextNode = head;
            head = node;
        }
    }

    const pop = () => {
        if (head === undefined) {
            return console.log('Nothing to remove, empty list');
        }
        let target = head; // let variable to be able to remove it
        while (target.nextNode.nextNode !== null) { // 1 step ahead of the nextnode
            target = target.nextNode;
        }
        target.nextNode = null;
    }

    const removeAt = (index) => {
        if (head === undefined) {
            return console.log('Can\'t remove element, list doesn\'t exist.');
        }
        let target = head;
        let n = 0;
        while (n < index) {
            if (target.nextNode === null) {
                return console.log('Index is higher than length of list.');
            } else {
                target = target.nextNode;
                n++;
            }
        }
        let toBeRemoved = target;
        // we need to remove the target node, but we need to update the previous node to point to the next node

        // next node is easy 
        const nextNode = target.nextNode;

        // reinitialize target to point again to head to retraverse the list
        target = head;

        // to find previous node, we need to cycle the list until we find the node that points to the toBeRemoved value
        while (target.nextNode.value !== toBeRemoved.value) {
            target = target.nextNode;
        }
        const previousNode = target;
        previousNode.nextNode = nextNode;
        toBeRemoved = null; // take it out from the list
    }

    const size = () => {
        let count = 0;

        let target = head;
        if (head === undefined) {
            return console.log('Empty list');
        } else {
            count++;
            while (target.nextNode !== null) {
                target = target.nextNode;
                count++;
            }
        }
        return console.log('Number of elements : ', count);
    }

    const tail = () => {
        if (head === undefined) {
            return console.log('No tail, list is empty');
        } else {
            let target = head;
            while (target.nextNode !== null) {
                target = target.nextNode;
            }
            return console.log('TAIL ', target);
        }
    }

    const toString = () => {
        if (head === undefined) {
            return console.log('No list to print.')
        }
        let print = '';
        let target = head;
        while (target.nextNode !== null) {
            print += `(${target.value}) -> `;
            target = target.nextNode;
        }
        print += `(${target.value}) -> ${target.nextNode}`;
        return console.log(print);
    }

    return {append, atIndex, contains, find, getHead, insertAt, prepend, pop, removeAt, size, tail, toString};
}

class Node {
    constructor(el) {
        this.value = el;
        this.nextNode = null;
    }
}

// few examples to populate list
LinkedList().prepend('Luke');
LinkedList().append('Lea');
LinkedList().append('John');
LinkedList().append('Vegeta');
LinkedList().prepend('Roberto');
LinkedList().prepend('Vercingetorix');
LinkedList().append('Elon');
LinkedList().prepend('Narnia');
LinkedList().prepend('Batman');
LinkedList().append('Wonderwoman');

// main functions
LinkedList().getHead();
LinkedList().tail();    

LinkedList().atIndex(2);
LinkedList().contains('Luke');
LinkedList().pop(); // prints 9 from a list of 10 elements
LinkedList().size();
 
LinkedList().find('Narnia'); // Narnia is prepended but Batman is prepended afterwards // Prints 1 -> index at one
 
LinkedList().insertAt('Solid Snake', 3);

LinkedList().removeAt(8);
LinkedList().toString(); // (Batman) -> (Narnia) -> (Vercingetorix) -> (Solid Snake) -> (Roberto) -> (Luke) -> (Lea) -> (John) -> (Elon) -> null

// To understant printed list :
// batman prepended
// narnia prepended
// Vercingetorix prepended
// Solid Snake inserted after populating list
// Roberto prepended
// Luke prepended
// Rest is appended