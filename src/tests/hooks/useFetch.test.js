import {renderHook, act} from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe('Test in useFetch', () => {
  test('should return default information', () => {
    const {result} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

    const {data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('should have desired information: loafing false, error false', async() => {
    const {result, waitForNextUpdate} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    await waitForNextUpdate();

    const {data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('should hanlde the error', async() => {
    const {result, waitForNextUpdate} = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));
    await waitForNextUpdate();

    const {data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("Couldn't retrieve data");
  });
});
