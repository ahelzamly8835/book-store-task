import NavbarLogo from './NavbarLogo';
import LinkItem from '../ui/LinkItem';
import Button from '../ui/Button';
import BackgroundImage from '../../assets/images/533643aa8db82414f48d43a992d009dda3961386.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div
            className="relative hidden lg:block w-full  h-64" 
            style={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            
            <div className="absolute inset-0 bg-[#00000041]"></div>

            
            <div className="relative  bg-[#FFFFFF33] flex items-center justify-center py-5">
                <NavbarLogo />
                <div className="nav-links flex items-center gap-10 ">
                    <LinkItem to={"/"}>home</LinkItem>
                    <LinkItem to={"books"}>books</LinkItem>
                    <LinkItem to={"about"}>about us</LinkItem>
                </div>
                <div className="nav-btns flex items-center ml-[40em] gap-3">
                <Link to={"/login"}><Button width={"fit"} isMainBtn={true}>login</Button></Link>
                    <Link to={"/signup"}><Button width={"fit"} isMainBtn={false}>sign up</Button></Link>
                </div>
            </div>
        </div>
    )
}
