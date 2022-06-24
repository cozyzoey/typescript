class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // ===== collection이 숫자 배열일 때: number[]
        // this.collection instanceof Array: 여기서 작업하려는 collection이 배열임을 보장해줌
        // => Type Guards
        // instanceof: cunstructor function에 의해 생성된 값의 타입
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // ===== collection이 문자열일 때: string
        // typeof: number, string, boolean, symbol 등 원시 타입
        if (typeof this.collection === "string") {
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
