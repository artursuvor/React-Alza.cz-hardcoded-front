import React from 'react'
import { IoPersonSharp } from "react-icons/io5"
import { BsChevronDown } from "react-icons/bs"
import { GrCompliance } from "react-icons/gr"
import { AiFillHeart } from "react-icons/ai"
import { HiShoppingCart } from "react-icons/hi"
import { BsSearch } from "react-icons/bs"

export default function Header() {
  
  return (
    <header>
        <div className="alza-logo-main">
            <img src="./img/alza_cz.svg" alt="Alza-logo" />
        </div>
        <div className="button-input">
            <div className='svg-search'>
                <BsSearch />
            </div>
            <input type="text" placeholder="Co hledáte? Např. kabel AlzaPower..." />
            <button type="button" class="icon">Hledat</button>
        </div>
        <div className='user-menu'>
            <div className="avatar avatar-icon">
                <IoPersonSharp />
            </div>
            <span>
                <div className='my-account'>Moje Alza</div>
                <div className='sing-up'>Přihlásit se</div>
            </span>
            <div className="button-down">
                <BsChevronDown />
            </div>
        </div>
        <div className='user-options'>
            ::before
            <GrCompliance />
            <AiFillHeart />
            <div className="avatar avatar-icon">
                <img src="./img/cz.png" alt="cz-lang" />
            </div>
            ::after
        </div>
        <div className='user-goods'>
            <HiShoppingCart />
        </div>
    </header>
  )
}


