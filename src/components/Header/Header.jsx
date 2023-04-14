import React , {useEffect, useRef} from 'react'
import "../../styles/header.css";
import logo from '../../assets/img/dumble.png';


const nav__links = [
    {
        path:'#',
        display:'Home'
    },
    {
        path:'#schedule',
        display:'Schedule'
    },
    {
        path:'#classes',
        display:'Classes'
    },
    {
        path:'#princies-plan',
        display:'Princies'
    },
]

const Header = () => {

    const headerRef=useRef(null)

    const headerFunc = ()=>{
        if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
            headerRef.current.classList.add('sticky__header')
        }
        else {
            headerRef.current.classList.remove('sticky__header')
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",headerFunc)
        return ()=> window.removeEventListener("scroll",headerFunc)
    } , [])


  return <header className='header' ref={headerRef}>
    <div className='container' >
        <div className="nav__wrapper">
            {/* ======== Logo ======= */}
            <div className="logo">
                <div className="logo__img"><img src={logo} alt="logo" /></div>
                <h2>FitBody</h2>
            </div>
            {/* ======== Navigation Menu ======= */}
            <div className="navigation">
                <ul className="menu">
                        {
                            nav__links.map(item=>(
                                <li className='nav__item'>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))
                        }
                </ul>
            </div>
            {/* ======== Navigation Right ======= */}
            <div className="nav__right">
                <button className='register__btn'>Register</button>
                <span className='mobile__menu'><i class="ri-menu-3-line"></i></span>
            </div>
        </div>
    </div>
  </header>
}

export default Header