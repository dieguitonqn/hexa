import React from "react";
import Image from "next/image";

export default function Redes(){
    return(
        <section id="redes" className="flex flex-col items-end justify-end gap-2">
                <div className="">
                    <a
                        href="https://www.instagram.com/hexa.automation"
                        target="_blank"

                        className="flex flex-row">
                        <p className="items-center text-xl">Instagram</p>

                        <Image
                            src={"/instagram.svg"}
                            alt="instagram"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
                <div className="">
                    <a
                        href="https://www.facebook.com/hexa.automation"
                        target="_blank"

                        className="flex flex-row">
                        <p className="items-center text-xl">Facebook</p>

                        <Image
                            src={"/facebook.svg"}
                            alt="instagram"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
                <div className="">
                    <a
                        href="https://www.facebook.com/hexa.automation"
                        target="_blank"

                        className="flex flex-row">
                        <p className="items-center text-xl">X (Tweeter)</p>

                        <Image
                            src={"/xicon.webp"}
                            alt="instagram"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
                <div className="">
                    <a
                        href="https://www.facebook.com/hexa.automation"
                        target="_blank"

                        className="flex flex-row">
                        <p className="items-center text-xl">LinkedIn</p>

                        <Image
                            src={"/linkedin.svg"}
                            alt="instagram"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
            </section>
    )

}