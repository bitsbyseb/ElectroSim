interface listItem<ValueType> {
    value: ValueType;
    next: listItem<ValueType> | null;
}

class Node<ValueType> implements listItem<ValueType> {
    value: ValueType;
    next: Node<ValueType> | null;
    constructor(firstValue: ValueType) {
        this.value = firstValue;
        this.next = null;
    }
}

export class singlyLinkedList<ValueType> {
    private head: Node<ValueType> | null = null;
    private tail: Node<ValueType> | null = null;
    private _length: number = 0;

    get length() {
        return this._length;
    }

    set length(value: number) {
        if (this.length === value) {
            return;
        }

        if (this.length < value) {
            return;
        }

        if (value < 0) {
            throw new Error("Invalid list length");
        }
        while (this.length > value) {
            this.remove(this.length - 1);
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }

    getItemByIndex(index: number): Node<ValueType> | null {
        if (index > this.length - 1 || index < 0) {
            return null;
        }

        let currentObj: Node<ValueType> | null = this.head;
        let currentCount = 0;

        while (currentObj && currentCount <= index) {
            currentObj = currentObj.next;
            currentCount++;
        }

        if (!currentObj) {
            return null;
        }

        return currentObj;
    }

    append(value: ValueType): singlyLinkedList<ValueType> | void {
        const newNode = new Node<ValueType>(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) this.tail.next = newNode;
            this.tail = newNode;
        }
        this._length++;
        return this;
    }

    prepend(value: ValueType): singlyLinkedList<ValueType> {
        const newNode = new Node<ValueType>(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index: number, value: ValueType): singlyLinkedList<ValueType> | void {
        if (this.head === null || this.tail === null) {
            return;
        }
        if (index >= this.length) return this.append(value);
        if (index === 0) return this.prepend(value);
        const newNode = new Node<ValueType>(value);
        let count = 0;
        let currentObj: Node<ValueType> = this.head;
        while (count !== index - 1) {
            if (currentObj.next !== null) {
                currentObj = currentObj.next;
                count++;
            }
        }
        const temporalPointer = currentObj.next;
        newNode.next = temporalPointer;
        currentObj.next = newNode;
        this.length++;
        return this;
    }

    remove(index: number): this | void {
        if (!this.head || index < 0 || index >= this.length) return this;

        if (index === 0) {
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            this._length--;
            return this;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next!;
        }
        current.next = current.next?.next || null;
        if (index === this._length - 1) this.tail = current;
        this._length--;
        return this;
    }

    forEach(callback: (item: ValueType) => void): void {
        if (this.tail === null || this.head === null) {
            return;
        }

        let currentObj: Node<ValueType> | null = this.head;
        while (currentObj) {
            callback(currentObj.value);
            currentObj = currentObj.next;
        }
    }

    getIndexOf(subject: ValueType): number {
        if (this.tail === null || this.head === null) {
            return -1;
        }

        let currentObj: Node<ValueType> | null = this.head;
        let result: number = 0;
        let currentIndex = 0;
        while (currentObj) {
            if (subject === currentObj.value) {
                result = currentIndex;
                break;
            }
            currentObj = currentObj.next;
            currentIndex++;
        }

        return result;
    }

    toArray(): ValueType[] {
        if (this.tail === null || this.head === null) {
            return [];
        }
        const result: ValueType[] = [];
        let currentObj: Node<ValueType> | null = this.head;
        while (currentObj) {
            result.push(currentObj.value);
            currentObj = currentObj.next;
        }
        return result;
    }

    filter(callback: (n: ValueType) => boolean): ValueType[] {
        if (this.tail === null || this.head === null) {
            return [];
        }
        const result: ValueType[] = [];
        let currentObj: Node<ValueType> | null = this.head;
        while (currentObj) {
            const callbackResult = callback(currentObj.value);
            if (callbackResult) {
                result.push(currentObj.value);
            }
        }
        return result;
    }
}