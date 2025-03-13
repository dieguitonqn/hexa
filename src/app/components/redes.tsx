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

                        <img
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

                        <img
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

                        <img
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

                        <img
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