import React from 'react'
import { useRecoilState } from 'recoil'
import { home } from './home.module.css'
import { someDataAtom } from 'appStore'

const Home = () =>{
  const [someData, setSomeData] = useRecoilState(someDataAtom);

  return (
    <div className={[home]}>This is Home</div>
  )
}

export default Home;
