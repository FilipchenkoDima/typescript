class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error("Door is close");
    }
    console.log(person);
    this.tenants.push(person);
    console.log("Person inside");
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error("Key to another door");
    }

    return (this.door = true);
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
