import ArrayStack from "./ArrayStack";

/**
 *  有效的括号
 *
 *
 */
function isValid(s: string): boolean {
  const stack = new ArrayStack<string>();
  for (let i = 0; i < s.length; i++) {
    const iAt = s[i];
    if (iAt == "(") {
      stack.push(")");
    } else if (iAt == "{") {
      stack.push("}");
    } else if (iAt == "[") {
      stack.push("]");
    } else {
      if (iAt !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}
