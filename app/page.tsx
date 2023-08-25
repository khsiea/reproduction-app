'use client';

import Link from "next/link";
import {useEffect} from "react";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const loggingFooHistoryState = () => {
    console.log(history.state.foo)
  }
  const handleClick = () => {
    history.replaceState({...history.state, foo: 'foo'}, '', location.href)
  }

  useEffect(() => {
    loggingFooHistoryState()
  }, []);

  return <div>
    <Link onClick={handleClick} href='https://nextjs.org/'>Next.js Page</Link>
    <br/>
    <button onClick={handleClick}>set history state</button>
    <button onClick={loggingFooHistoryState} >logging history state</button>
  </div>
}
