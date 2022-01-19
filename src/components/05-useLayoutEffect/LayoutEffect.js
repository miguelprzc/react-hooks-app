import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const LayoutEffect = () => {

  const {counter, increment} = useCounter(1);

  const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const {quote} = !!data && data[0];

  const pTag = useRef();

  useLayoutEffect(() => {

    console.log(pTag.current.getBoundingClientRect().width);

  }, [quote])

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr/>

      <blockquote className='blockquote text-end'>
        <p 
          ref={pTag}
          className='mb-0'
        >{quote}</p>
      </blockquote>

      <button 
        className='btn btn-danger'
        onClick={() => increment()}
      >Next quote</button>      
      <hr/>
      <h3>MultipleCustomHooks</h3>
    </div>
  )
}
