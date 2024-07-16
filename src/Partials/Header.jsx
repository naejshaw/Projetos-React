import { Link } from "react-router-dom";
import { Dropdown, DropdownItem } from "flowbite-react";

export default function Header() 
{

    return (
        <>
            <header className="fixed top-0 left-0 w-full py-8 px-[9%] flex justify-between items-center z-50 transition-[.3s] bg-[#081b29] bg-opacity-95" id="header">
                <Link
                    to={"/"}
                    className="relative text-2xl font-semibold text-[#ededed] hover:text-[#00abf0]"
                >
                    Jean.<span className="animate"></span>
                </Link>

                <div className="relative text-2xl text-[#ededed] hover:text-[#00abf0] cursor-pointer md:!hidden">
                    <span className="animate"></span>
                    <i className="bx bx-menu">X</i>
                </div>

                <nav className="relative md:flex hidden">
                    <div className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">
                        <Dropdown label="Home Sections">
                            <Dropdown.Item as={Link} to={"/#about"}>About</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/#education"}>Education</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/#skills"}>Skills</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/#contact"}>Contact</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">
                        <Dropdown label="Projects 1/3">
                            <Dropdown.Item>
                                Blog:
                                <DropdownItem as={Link} to={'/blog'}>All</DropdownItem>
                                <DropdownItem as={Link} to={"/blog/content/1"}>Article 1</DropdownItem>
                                <DropdownItem as={Link} to={"/blog/content/2"}>Article 2</DropdownItem>
                                <DropdownItem as={Link} to={"/blog/content/3"}>Article 3</DropdownItem>
                                <DropdownItem as={Link} to={"/blog/content/4"}>Article 4</DropdownItem>
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/booking"}>Booking</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/calculator"}>Calculator</Dropdown.Item>
                            <Dropdown.Item>
                                Clone:
                                <Dropdown.Item as={Link} to={"/clone/discord"}>Discord</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/clone/hbo"}>HBO</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/clone/youtube"}>YouTube</Dropdown.Item>
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/cms"}>CMS</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/crud"}>CRUD</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">
                        <Dropdown label="Projects 2/3">
                            <Dropdown.Item as={Link} to={"/dashboard"}>Dashboard</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/delivery"}>Delivery</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/ecommerce"}>E-commerce</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/gallery"}>Gallery</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/playlist"}>Playlist</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/portfolio"}>Portfolio</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">
                        <Dropdown label="Projects 3/3">
                            <Dropdown.Item as={Link} to={"/quiz"}>Quiz</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/ranking"}>Ranking</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/schedule"}>Schedule</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/siteapi"}>Site API</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/socialmedia"}>Social Media</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/tictactoe"}>Tic Tac Toe</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/weather"}>Weather</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <span className="active-nav"></span>
                    <span className="animate"></span>
                </nav>
            </header>
        </>
    );
}