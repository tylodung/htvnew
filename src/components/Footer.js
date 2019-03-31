import React from 'react'
import Link from 'gatsby-link'
import githubLogo from '../img/github-icon-white.svg'
import youtubeLogo from '../img/youtube-logo.svg'

const Footer = () =>
    <footer className="site-footer outer">
        <div className="site-footer-content inner">
            <section className="copyright">
                <Link to="/">Website Đoàn Bình</Link> &copy; { (new Date()).getFullYear() }
            </section>
            <nav>
                <a className="social-logo" href="http://thaoam.com" >
                    <img src={ youtubeLogo } alt="thaoam logo" />
                </a>
                <a className="social-logo" href="http://bakadono.com" >
                    <img src={ githubLogo } alt="bakadono logo" />
                </a>
            </nav>
        </div>
    </footer>

export default Footer;

