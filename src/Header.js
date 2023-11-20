import React, { useState, useEffect } from 'react'

import { IoPersonSharp } from "react-icons/io5"
import { BsChevronDown } from "react-icons/bs"
import { FaClipboardCheck } from "react-icons/fa"
import { AiFillHeart } from "react-icons/ai"
import { HiShoppingCart } from "react-icons/hi"
import { BsSearch } from "react-icons/bs"

export default function Header() {
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 110)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <header className={isSticky ? 'sticky' : ''}>

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
            <div className="avatar-person">
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
            <div className="tooltip" data-tooltip="Objednávky a zboží">
                <FaClipboardCheck />
            </div>
            <div className="tooltip" data-tooltip="Oblíbené">
                <AiFillHeart />
            </div>

            <div className="tooltip" data-tooltip="Jazyk/Language: CZ">
                <div className="avatar-lang">
                    <img src="./img/cz.png" alt="cz-lang" />
                </div>
            </div>
        </div>

        <div className='user-goods'>
            <HiShoppingCart />
        </div>
        
    </header>
  )
}


