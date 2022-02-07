import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe('Test in useCounter', () => {
  test('should return default values', () => {
    const {result} = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('should return counter in 105', () => {
    const {result} = renderHook(() => useCounter(105));

    expect(result.current.counter).toBe(105);
  });

  test('should increment counter by 1', () => {
    const {result} = renderHook(() => useCounter(105));
    const {increment} = result.current;

    act(() => {
      increment();
    });

    const {counter} = result.current;

    expect(counter).toBe(106);
  });

  test('should decrement counter by 1', () => {
    const {result} = renderHook(() => useCounter());
    const {decrement} = result.current;
    
    act(() => {
      decrement();
    });
    
    const {counter} = result.current;
    expect(counter).toBe(9);
  });

  test('should reset counter ', () => {
    const {result} = renderHook(() => useCounter());
    const {decrement, reset} = result.current;
    
    act(() => {
      decrement();
      reset();
    });
    
    const {counter} = result.current;
    expect(counter).toBe(10);
  });
});
