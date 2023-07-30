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
    const path = useParams()
    return (
        <>
            <div className={`flex lg:flex-row flex-col gap-3 text-white text-sm lg:p-0 p-2 ${className}`}>
                <div>
                    <Link href={'/'} className={`${path == 'home' ? 'text-yellow-300' : ''}`}>Beranda</Link>
                </div>
                <div>
                    <Link href={'/daftar'} className={`${path == 'daftar' || path == 'daftar#jenis' ? 'text-yellow-300' : ''}`}>Daftar</Link>
                </div>
                <div>
                    <Link href={'/#tentang'} className={`${path == '#tentang' ? 'text-yellow-300' : ''}`} scroll={false}>Tentang</Link>
                </div>
                <div>
                    <Link href={'/pengumuman'} className={`${path == 'pengumuman' || path == 'pengumuman#pengumuman' ? 'text-yellow-300' : ''}`}>Pengumuman</Link>
                </div>
                <div>
                    <Link href={'/#faq'} className={`${path == '#faq' ? 'text-yellow-300' : ''}`} scroll={false}>FAQ</Link>
                </div>
                <div>
                    <Link href={'/#narahubung'} className={`${path == '#narahubung' ? 'text-yellow-300' : ''}`} scroll={false}>Narahubung</Link>
                </div>
            </div>
        </>
    )
}