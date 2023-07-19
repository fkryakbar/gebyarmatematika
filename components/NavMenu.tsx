import Link from "next/link";
import { useRouter } from "next/router";

export default function NavMenu({ className }: { className?: string }) {
    const params = useRouter()
    const useParams = () => {
        if (params.asPath.split('/')[1]) {
            return params.asPath.split('/')[1]
        }
        return 'home'
    }
    return (
        <>
            <div className={`flex lg:flex-row flex-col gap-3 text-white text-sm lg:p-0 p-2 ${className}`}>
                <div>
                    <Link href={'/'} className={`${useParams() == 'home' ? 'text-yellow-300' : ''}`}>Beranda</Link>
                </div>
                <div>
                    <Link href={'/daftar'} className={`${useParams() == 'daftar' ? 'text-yellow-300' : ''}`}>Daftar</Link>
                </div>
                <div>
                    <Link href={'/#tentang'} className={`${useParams() == '#tentang' ? 'text-yellow-300' : ''}`} scroll={false}>Tentang</Link>
                </div>
                <div>
                    <Link href={'/pengumuman'} className={`${useParams() == 'pengumuman' ? 'text-yellow-300' : ''}`}>Pengumuman</Link>
                </div>
                <div>
                    <Link href={'/#faq'} className={`${useParams() == '#faq' ? 'text-yellow-300' : ''}`} scroll={false}>FAQ</Link>
                </div>
                <div>
                    <Link href={'/#narahubung'} className={`${useParams() == '#narahubung' ? 'text-yellow-300' : ''}`} scroll={false}>Narahubung</Link>
                </div>
            </div>
        </>
    )
}