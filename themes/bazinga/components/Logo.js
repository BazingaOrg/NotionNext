import { Home } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'

const Logo = props => {
  const { siteInfo } = props
  return (
    <Link href='/' passHref legacyBehavior>
      <div className='flex flex-nowrap items-center cursor-pointer font-extrabold'>
        <LazyImage
          src={siteInfo?.icon}
          width={48}
          height={48}
          alt={siteConfig('AUTHOR')}
          className='mr-4 block md:hidden rounded-full object-cover aspect-square'
        />
        <div id='logo-text' className='group rounded-2xl flex-none relative hidden md:block'>
          <div className='logo group-hover:opacity-0 opacity-100 visible group-hover:invisible text-lg my-auto rounded dark:border-white duration-200'>
            {siteConfig('TITLE')}
          </div>
          <div className='flex justify-center rounded-2xl group-hover:bg-customYellow-600 dark:group-hover:bg-customPurple-600 w-full group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-0 py-1 duration-200'>
            <Home className={'w-6 h-6 stroke-white stroke-2 '} />
          </div>
        </div>
      </div>
    </Link>
  )
}
export default Logo