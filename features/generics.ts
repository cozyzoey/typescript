class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// 위에 두 개 클래스를 아우르는 Generic 클래스
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// <T>를 넘겨주지 않아도 string으로 Type Inference가 일어남
const arr = new ArrayOfAnything(["a", "b", "c"]);

// =============== Generic + 함수 =============== //
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything(["a", "b", "c"]);

// =============== Generic Constraints =============== //
class Car {
  print() {
    console.log("나는 차다");
  }
}

class House {
  print() {
    console.log("나는 집이다");
  }
}

// 타입 T에 항상 print 메서드가 있음을 보장해줌
interface Printable {
  print(): void;
}
function printHouseOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHouseOrCars<House>([new House(), new House()]);
