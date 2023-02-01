
import Link from "next/link"
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"
import { NavbarProps } from "sanity"

function StudioNavbar(props: NavbarProps) {
  return (<div>
    <div className="flex items-center justify-between p-5"> 
    <Link href="/" className="text-[#F7AB0A] flex items-center">
        <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2" />
        Go to website</Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#7AB0A]">
            <h1 className="font-bold text-white">
                About me
            </h1>
            <Link
                href="https://www.linkedin.com/in/vittawat-sootawee-95a82920b/"
                className="text-[#F7AB0A] font-bold ml-2">
                    My Linkedin
                </Link>
        </div>



    </div>
    <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar