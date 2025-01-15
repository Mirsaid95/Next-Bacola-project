import { MapPin, Phone, Mail } from "lucide-react"


const Contact = () => {
    return (
        <div>
            <section className="container mx-auto pt-10 pb-20">
                <div className="flex flex-col gap-4 grid grid-cols-1 items-center justify-center">
                    <h1 className="text-[36px] font-simebold text-[#202435] text-center">Get In Touch</h1>
                    <p className="text-[16px] font-normal text-[#202435] text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat unde quam dolor culpa veritatis inventore, aut commodi eum veniam vel.</p>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 items-center justify-center">
                        <div className="w-full h-[230px] bg-[#f3f3f6] rounded-md p-4 text-center flex flex-col gap-2 items-center justify-center">
                            <span className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center"><MapPin className="w-8 h-8" /></span>
                            <h3 className="text-[18px] font-normal text-[#202435]">102 Street 2714 Donovan</h3>
                            <p className="text-[14px] font-normal text-[#202435]">Lorem ipsum dolar site amet discont</p>
                        </div>
                        <div className="w-full h-[230px] bg-[#f3f3f6] rounded-md p-4 text-center flex flex-col gap-2 items-center justify-center">
                            <span className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center"><Phone className="w-8 h-8" /></span>
                            <h3 className="text-[18px] font-normal text-[#202435]">+02 1234 567 88</h3>
                            <p className="text-[14px] font-normal text-[#202435]">Lorem ipsum dolar site amet discont</p>
                        </div>
                        <div className="w-full h-[230px] bg-[#f3f3f6] rounded-md p-4 text-center flex flex-col gap-2 items-center justify-center">
                            <span className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center"><Mail className="w-8 h-8" /></span>
                            <h3 className="text-[18px] font-normal text-[#202435]">info@example.com</h3>
                            <p className="text-[14px] font-normal text-[#202435]">Lorem ipsum dolar site amet discont</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
