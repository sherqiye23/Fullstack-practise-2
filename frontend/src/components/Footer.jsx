import { Container } from "react-bootstrap"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function Footer() {
    return (
        <div className="bg-[#060B15] py-3">
            <Container>
                <div className="flex items-center justify-between text-white flex-col gap-3 md:flex-row">
                    <div>
                        Copyright ©2025 All rights reserved | This template is made with ❤️ by <span className="text-[#ff0000]">Colorlib</span>
                    </div>
                    <div className="flex gap-2">
                        <span><FaTwitter /></span>
                        <span><FaFacebookF /></span>
                        <span><TbWorld /></span>
                        <span><FaInstagram /></span>
                    </div>
                </div>
            </Container>
        </div>
    )
}