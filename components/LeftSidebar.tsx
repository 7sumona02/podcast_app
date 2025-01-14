'use client'

import { sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarLink {
  route: string;
  label: string;
  imgURL: string;
}

const LeftSidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <section className='left_sidebar h-screen'>
        <nav className='flex flex-col gap-6'>
          <Link href='/' className='flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'>
            <Image src='/icons/logo.svg' alt='logo' width={23} height={27} />
            <h1 className='text-24 font-extrabold text-white max-lg:hidden'>Podcastify</h1>
          </Link>

          {sidebarLinks.map((link: SidebarLink) => {
            const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);

            return (
              <Link
                href={link.route}
                key={link.label}
                className={cn(
                  'flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start',
                  { 'bg-nav-focus border-r-4 border-orange-500': isActive }
                )}
              >
                <Image src={link.imgURL} alt={link.label} width={24} height={24} />
                <p>{link.label}</p>
              </Link>
            );
          })}
        </nav>
      </section>
    </>
  );
};

export default LeftSidebar;