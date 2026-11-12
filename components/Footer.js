export default function Footer() {
    return(
        <div className="bg-[#242324] min-h-[200px] py-10 px-6 lg:py-14 lg:px-20 flex flex-wrap flex-col justify-between lg:items-center lg:flex-row">
            <div className="max-w-[450px] mr-8">
                <a href="#"><h1 className="logo font-bold text-xl sm:text-2xl lg:text-3xl overflow-hidden text-[#ec8700] cursor-pointer">Appex Athletics</h1></a>
                <p className="text-[#F4F8EB] text-sm my-6">Appex Athletics is a fitness club with training suites, coaching, and sportswear for members who want to train with purpose.</p>
                <p className="text-[#F4F8EB] text-xl font-bold">© Appex Athletics All Rights Reserved.</p>
            </div>
            <div className="my-16">
                <h1 className="text-3xl font-bold text-[#F4F8EB] pb-8">Links</h1>
                <a href="#products"><li className="text-xl text-[#ec8700] font-medium cursor-pointer hover:text-[#F4F8EB] hover:duration-700">Products</li></a>
                <a href="#merchandise"><li className="text-xl text-[#ec8700] font-medium cursor-pointer hover:text-[#F4F8EB] my-2 hover:duration-700">Merchandise</li></a>
                <a href="#tech"><li className="text-xl text-[#ec8700] font-medium cursor-pointer hover:text-[#F4F8EB] hover:duration-700">Technology</li></a>
            </div>
            <div className="flex flex-col text-[#F4F8EB] max-w-[320px]" id="contact">
                <h1 className="text-3xl font-bold pb-6">Contact Us</h1>
                <p className="mb-3">27 Stadium Road, Indiranagar, Bengaluru 560038, India</p>
                <p className="mb-1"><a href="tel:+918041206600" className="hover:text-[#ec8700]">+91 80 4120 6600</a></p>
                <p className="mb-3 text-sm">Alternative phone<br /><a href="tel:+918041206601" className="hover:text-[#ec8700]">+91 80 4120 6601</a></p>
                <p className="mb-1"><a href="mailto:hello@appexathletics.com" className="hover:text-[#ec8700]">hello@appexathletics.com</a></p>
                <p className="text-sm">Alternative email<br /><a href="mailto:support@appexathletics.com" className="hover:text-[#ec8700]">support@appexathletics.com</a></p>
            </div>
        </div>
    )
}