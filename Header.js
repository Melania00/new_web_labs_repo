import React from 'react'
import { useRecoilState } from 'recoil'
import { header } from './header.module.css'
import { someDataAtom } from 'appStore'

const Header = () =>{
  const [someData, setSomeData] = useRecoilState(someDataAtom);
  
  return (
    <div className={[header]}>This is header</div>
  )
}

export default Header;