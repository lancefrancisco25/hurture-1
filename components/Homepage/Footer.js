import {footerCont, footerHurture} from '../../styles/Footer.module.css'

function footer() {
    return (
        <div className={`${footerCont} borderShadow`}>
            <a href="/terms of service">Terms of Service</a>
            <a href="/terms of service">Cookies</a>
            <a href="/terms of service">Privacy Policy</a>
            <a href="/terms of service">Help Desk</a>
            <a href="/terms of service">About</a>
            <span className={footerHurture}>@2021 Hurture</span>
        </div>
    )
}

export default footer
