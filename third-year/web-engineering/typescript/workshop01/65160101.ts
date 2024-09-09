// Workshop#1
// จากโปรแกรมที่กำหนดให้จงระบุ Type แทน ____ ให้ถูกต้อง

import * as readline from "readline";
const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter numbers separated by commas: ", (input: string) => {
  const items: number[] = input.split(",").map(Number);
  const uniqueItems: number[] = Array.from(new Set(items));
  const sum: number = uniqueItems.reduce((acc: number, curr: number) => acc + curr);
  console.log(`Sum of unique items: ${sum}`);
  rl.close();
});