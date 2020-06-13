import React, { useEffect, useState } from 'react';
const App = props => {

  const [ state, setState ] = useState( props )
  const { name, price, count } = state

  useEffect( () => {
    console.log( "This is like component DidMount " )
  } )


  useEffect( () => {
    console.log( "onece " )
  }, [] ) //空の配列を持たせたら一度だけとなる。


  useEffect( () => {
    console.log( "this callback is for name only " )
  }, [ name ] ) //空配列にいれたstateの値が変更された時だけ動く



  const renderPeriod = () => {
    setState( { ...state, count: state.count + 1 } )
  }

  return (
    <>
      <p>{ count }現在の{ name }は{ state.price }円です</p>
      <button onClick={ () => setState( { ...state, price: state.price + 1 } ) }>+1</button>
      <button onClick={ () => setState( { ...state, price: state.price - 1 } ) }>-1</button>
      <button onClick={ () => setState( props ) }>reset</button>
      <button onClick={ () => renderPeriod() }>countup</button>

      <input value={ name } onChange={ e => setState( { ...state, name: e.target.value } ) } />
    </>
  );
}

App.defaultProps = {
  name: "",
  price: 1000,
  count: 0
}

export default App;
