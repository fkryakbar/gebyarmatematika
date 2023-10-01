import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="text-center h-24 flex items-center justify-center bg-[#005AAC] drop-shadow">
                <div>
                    <p className="text-white font-semibold">
                        Copyright © {new Date().getFullYear()}. All Rights Reserved By  <Link href={'https://himaptika.ninepmx.my.id'} className="underline" target="_blank"> HIMAPTIKA FKIP ULM</Link>
                    </p>
                    <p className="text-white text-xs">
                        <Link href={'https://ninepmx.my.id'} className="underline" target="_blank">Developer</Link>
                    </p>
                </div>
            </div>
        </>
    )
}