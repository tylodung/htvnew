import React from 'react'
import Link from 'gatsby-link'
import githubLogo from '../img/github-icon-white.svg'
import youtubeLogo from '../img/youtube-logo.svg'

const Nav = ( { isHome } ) => 
    <nav className="site-nav">
        <div className="site-nav-left">
            <a className="site-nav-logo" href="/">Câu Chuyện Bí Mật</a>
            <ul className="nav" role="menu">
                <li role="menuitem">
                    <Link to="/">
                        Trang chủ
                    </Link>
                </li>
                <li role="menuitem">
                    <Link to="/about">
                        Giới thiệu
                    </Link>
                </li>
                <li role="menuitem">
                    <Link to="/tags">
                        Trích dẫn
                    </Link>
                </li>
            </ul>
        </div>
        <div className="site-nav-right">
            <a className="social-logo" href="http://thaoam.com" >
                <img src={ youtubeLogo } alt="thaoam logo" />
            </a>
            <a className="social-logo" href="http://bakadono.com" >
                <img src={ githubLogo } alt="bakadono logo" />
            </a>
        </div>
    </nav>

export default Nav