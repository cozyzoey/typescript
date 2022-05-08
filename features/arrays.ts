const carMakers = ["ford", "toyota", "chevy"]; //string[]
// const carMakers: string[] = [];
const dates = [new Date(), new Date()];

// 2D 배열
const carsByMake = [["f150"], ["corolla"], ["camaro"]]; //string[][]
// const carsByMake: string[][] = []

// ========== Typed Array의 장점 ========== //
// 1) 배열에서 값을 추출할 때 TS가 타입 추론하게 해줌
const car1 = carMakers[0]; //string
const myCar = carMakers.pop(); //string

// 2) 배열에 부적합한 값을 추가할 수 없게 해줌
// carMakers.push(100); //error

// 3) 배열 메서드를 사용시 도움이 됨
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// 4) 배열은 서로 다른 타입을 포함할 수 있다.
const importantDates: (Date | string)[] = [];
importantDates.push("2020-10-10");
importantDates.push(new Date());
// importantDates.push(100); //error
