import { renderHook } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe('Test in useCounter', () => {
  test('should return default values', () => {
    const {result} = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });
});
