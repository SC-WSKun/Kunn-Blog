import Image from 'next/image'
import Link from 'next/link'
function Contact () {
    return (
        <div>
            <Link href={'https://github.com/SC-WSKun'}>
                <Image width="40" height="40" src={'/image/github.svg'} alt="github"/>
            </Link>
        </div>
    )
}

export default Contact