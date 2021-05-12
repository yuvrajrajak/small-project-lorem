import React, { useState } from 'react';
import data from './data';
import styled from 'styled-components'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  }

  return (
    <Wrapper>
      <section className="section-center">
      <h3>tired of boring lorem ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {
          text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })
        }
      </article>
    </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.lorem-form{
  letter-spacing: var(--spacing);
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  label{
    text-transform: capitalize;
    font-size: 1.5rem;
    color: var(--clr-primary-1);
  }
  input{
    padding: 0.25rem 0.5rem;
    width: 4rem;
    border-radius: var(--radius);
    border:none;
    margin: 0 0.5rem;
    font-size: 1.25rem;
  }
}
button{
  background: var(--clr-primary-10);
}
.result{
 margin-bottom: 2rem; 
}

`

export default App;
