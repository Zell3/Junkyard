// ให้เลขฐานสอง แล้วเปลี่ยนไปเป็นเลขฐานสิบ จากนั้นบวกรวมกัน แล้วเปลี่ยนเลขฐานสิบนั้น เป็นฐานสอง

const binary1 = "011101001";
const binary2 = "010010110";

console.log(sumBirany(binary1, binary2));

function sumBirany(binary1, binary2) {
  // ทำการใช้ parseInt ให้มอง ตัวแปร binary1 และ 2 เป็นฐาน 2 จากนั้น parseInt จะเปลี่ยนเป็นฐาน 10 ให้
  const num1 = parseInt(binary1, 2);
  const num2 = parseInt(binary2, 2);
  // บวกรวมกัน
  const sum = num1 + num2;
  // จากนั้นเปลี่ยนกลับเป็นฐาน 2
  return sum.toString(2);
}