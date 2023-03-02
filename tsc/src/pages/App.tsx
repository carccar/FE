import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import CountryList from '../components/CountryList';

export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
}

const App = ()  => {
  // let list:Array<CountryType> = [
  //   { no: 1, country: "한국", visited: true },
  //   { no: 2, country: "파리", visited: true },
  //   { no: 3, country: "미국", visited: false },
  //   { no: 4, country: "대만", visited: true },
  // ];

  // let  msg = "<i>World</i>";
  // let  msg = (<i>World</i>);

  const [msg, setMsg] = useState<string>('world');
  const [list, setList] = useState<Array<CountryType>>([
      { no: 1, country: "한국", visited: true },
      { no: 2, country: "파리", visited: true },
      { no: 3, country: "미국", visited: false },
      { no: 4, country: "대만", visited: true },
  ])

  const  addResult = (x: number, y: number) => {
    return (
      <div className='calc'>
        {x} + {y} = {x+y}
      </div>
    );
  }
  return (
    <div>
      <h2>hello {msg}!</h2>
      {addResult(4, 3)}
      <CountryList countries={list} />
    </div>
  )
}

export default App;
