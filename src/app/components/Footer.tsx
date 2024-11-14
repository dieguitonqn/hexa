import Image from "next/image"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white pt-6 mt-10 bottom-0">
            <div className="container mx-auto text-center">
                <h2 className="text-lg font-bold">Hexa Automation</h2>
                <p className="text-sm">Número de teléfono: (+54) 0299 155748275</p>
                <p className="text-sm">Email: hexa@hexa-automation.com.ar</p>

            </div>
            <div className="mt-4 bg-slate-700 mx-auto text-center p-2">
                <a className="text-xs flex flex-row justify-center items-center gap-2"
                href="https://diarmodev.com"
                target="_blank">
                    Hecho por DiarmoDev
                    <Image
                        src="/diarmodev_logo2.jpg"
                        alt="logo diarmodev"
                        width={20}
                        height={20}>
                    </Image>
                </a>
            </div>
        </footer>
    )
}

export default Footer