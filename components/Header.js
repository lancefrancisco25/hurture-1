import Image from 'next/image'
import Logo from '../public/logo-02.png'
import headS from '../styles/Header.module.css'


const Header = () => {
    return (
        <>
            <header className={headS.header}>
              <div className="grid">
                <div className={headS.headlogo}> <Image className={headS.headlogoimg} width={40} height={40}src={Logo} alt="Picture of the author"/>
                  <h1>Hurture</h1>
                </div>
                <div className={headS.searchbar}>
                  <div className={headS.searchicon}> <span className="material-icons-outlined">search</span></div>
                  <input id={headS.searchInput} type="search" name="searchinput" placeholder="Search stuff"/>
                </div>
              </div>
            </header>
            <div className={headS.spacer}/>
        </>
    )
}

export default Header
