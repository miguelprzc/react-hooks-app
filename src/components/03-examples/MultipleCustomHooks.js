import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHooks = () => {

  const {counter, increment} = useCounter(1);

  const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const {quote, author} = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr/>

      { 
        loading 
        ? 
          <div className='alert alet-info text-center'>Loading...</div> 
        :
        <blockquote className='blockquote text-end'>
          <p className='mb-0'>{quote}</p>
          <br/>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      }

      <button 
        className='btn btn-danger'
        onClick={() => increment()}
      >Next quote</button>      
      <hr/>
      <h3>MultipleCustomHooks</h3>
    </div>
  )
}
