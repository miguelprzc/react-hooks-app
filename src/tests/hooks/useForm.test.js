import {renderHook, act} from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Test in useFrom', () => {
 const initialForm = {
   name: 'Mike',
   email: 'mail@mail.com'
 };

 test('should return a form by default', () => {
   const {result} = renderHook(() => useForm(initialForm));
   const [formValues, handleInputChange, reset] = result.current;

   expect(formValues).toEqual(initialForm);
   expect(typeof handleInputChange).toEqual('function');
   expect(typeof reset).toEqual('function');
 });

 test('should change the form values (change name)', () => {
   const {result} = renderHook(() => useForm(initialForm));
   const [ , handleInputChange] = result.current;
   const newName = {target: {name: 'name', value: 'Alejandro'}};
   act(() => {
     handleInputChange(newName);
   });

   const [formValues] = result.current;
   expect(formValues.name).toEqual('Alejandro');
 });
 
 test('should reset the form when reset() is used', () => {
   const {result} = renderHook(() => useForm(initialForm));
   const [, handleInputChange, reset] = result.current;
   const newName = {target: {name: 'name', value: 'Alejandro'}};
   act(() => {
    handleInputChange(newName);
    reset();
   });

   const [fomrValues] = result.current;
   expect(fomrValues).toEqual(initialForm);
 });
 
});
