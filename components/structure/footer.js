import { faGithub, faInstagram, faLinkedin, faOsi } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeartIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import { SITE_NAME } from '../../lib/constrants';

var packageObj = require('../../package.json');

//TODO: When we implement the styling, then we can also rewrite this component. This is only for a basic functionallity.
export default function Footer() {
    var year = new Date().getFullYear();
    var versionLink = packageObj.repository.url + "releases/tag/" + packageObj.version
    return (
        <footer className='backgroundPattern pt-2 pb-2 border-t border-customGray'>
            <div className='p-1 pl-6'>
                <div className='sm:flex sm:space-x-3 sm:justify-center'>
                        <p><Link href="/company/about-us" className="cursor-pointer">About</Link></p>
                        <p><Link href="/company/contact-us" className="cursor-pointer">Contact</Link></p>
                        <p><Link href="/newsroom" className="cursor-pointer">Newsroom</Link></p>                  
                        <p><Link href="/company/partner" className="cursor-pointer">Partners</Link></p>
                        <p><Link href="/legal/licenses" className="cursor-pointer">Licenses</Link></p>
                        <p><Link href="/legal/imprint" className="cursor-pointer">Imprint</Link></p>
                        <p><Link href="/legal/privacy" className="cursor-pointer">Privacy</Link></p>
                </div>
            </div>
            <div className='p-1 pl-6'>
                <div className='sm:flex sm:space-x-2 sm:justify-center'>
                    <p>© {year} {SITE_NAME} All rights reserved.</p>
                    <p className='flex'>Build with <HeartIcon className="h-5 w-5 text-red-600 ml-1 mr-1"/> and <Link href="/legal/licenses" passHref><span className='ml-2 mr-2 cursor-pointer'><FontAwesomeIcon icon={faOsi}  width="18" /></span></Link></p>
                </div>
            </div>
            <div className='p-1 pl-6'>
                <div className='sm:flex sm:space-x-2 sm:justify-center'>
                    <p className='flex'><Link href="https://instagram.com/slynite.official" passHref><span className='ml-1 mr-1 cursor-pointer'><FontAwesomeIcon icon={faInstagram} width="16" /></span></Link> <Link href="https://linkedin.com/company/slynite" passHref><span className='ml-1 mr-1 cursor-pointer'><FontAwesomeIcon icon={faLinkedin}  width="16" /></span></Link> <Link href="https://github.com/slynite" passHref><span className='ml-1 mr-1 cursor-pointer'><FontAwesomeIcon icon={faGithub}  width="16" /></span></Link></p>
                </div>
            </div>
            <div className='p-1 pl-6'>
                <div className='sm:flex sm:justify-center'>
                    <p>ver: <a className='cursor-pointer' href={versionLink}>{packageObj.version}</a></p>
                </div>
            </div>
        </footer>
    )
}