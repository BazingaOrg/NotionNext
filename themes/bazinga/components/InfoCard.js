import { ArrowRightCircle } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import CONFIG from '../config'
import Announcement from './Announcement'
import Card from './Card'

/**
 * 社交信息卡
 * @param {*} props
 * @returns
 */
export function InfoCard(props) {
  const { siteInfo, notice } = props
  const router = useRouter()
  // 在文章详情页特殊处理
  const isSlugPage = router.pathname.indexOf('/[prefix]') === 0
  const url1 = siteConfig('HEO_INFO_CARD_URL1', null, CONFIG)
  const icon1 = siteConfig('HEO_INFO_CARD_ICON1', null, CONFIG)
  const url2 = siteConfig('HEO_INFO_CARD_URL2', null, CONFIG)
  const icon2 = siteConfig('HEO_INFO_CARD_ICON2', null, CONFIG)
  return (
    <Card className='wow fadeInUp bg-[#f0c65a] dark:bg-customPurple-600 text-white flex flex-col w-72 overflow-hidden relative'>
      {/* 信息卡牌第一行：头像 */}
      <div
          className='hover:scale-150 justify-center items-center flex dark:text-gray-100 transform transitaion-all duration-200'>
          <LazyImage
            src={siteInfo?.icon}
            className='rounded-full object-cover aspect-square'
            width={48}
            height={48}
            alt={siteConfig('AUTHOR')}
          />
      </div>
      {/* 信息卡牌第二行：社交按钮组 */}
      <div className='flex justify-center lg:mt-6 mt-4'>
          <div className='flex space-x-3  hover:text-black dark:hover:text-white'>
            {url1 && (
              <div className='w-10 text-center bg-customYellow-400 p-2 rounded-full  transition-colors duration-200 dark:bg-customPurple-500 dark:hover:bg-black hover:bg-white'>
                <Link href={url1}>
                  <i className={icon1} />
                </Link>
              </div>
            )}
            {url2 && (
              <div className='bg-customYellow-400 p-2 rounded-full w-10 items-center flex justify-center transition-colors duration-200 dark:bg-customPurple-500 dark:hover:bg-black hover:bg-white'>
                <Link href={url2}>
                  <i className={icon2} />
                </Link>
              </div>
            )}
          </div>
      </div>

      {/* 公告栏 */}
      <Announcement post={notice} style={{ color: 'white !important' }} />
    </Card>
  )
}
