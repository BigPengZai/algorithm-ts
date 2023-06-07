import ArrayStack from "./ArrayStack";

/**
 *  十进制转二进制
 *
 *
 */
function decimalToBinary(decimal: number): string {
  const stack = new ArrayStack<number>();
  while (decimal > 0) {
    const result = decimal % 2;
    stack.push(result);

    decimal = Math.floor(decimal / 2);
  }
  let binary = "";
  while (!stack.isEmpty()) {
    binary += stack.pop();
  }
  return binary;
}
console.log(decimalToBinary(35));
