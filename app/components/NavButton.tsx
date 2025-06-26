'use client';
import Link from 'next/link';
import React from 'react'

interface NavButtonProps {
    left?: boolean;
    href?: string;
    externalUrl?: string;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
}

const NavButton = ({
    left = true,
    href = '',
    externalUrl,
    className,
    children,
    style = {},
    icon,
}: NavButtonProps) => {
  return (
    <Link href={`${href}`} className={`flex flex-row py-2 px-3
    text-dive-100 rounded-xl
    hover:text-aqua-100 md:py-2 md:px-4
    md:hover:bg-aqua-100 md:hover:text-white
    md:hover:shadow-md ${className}`} style={style} onClick={() => {if (externalUrl) {window.open(externalUrl, '_blank')}}}>
        {left && icon ? 
        <>
            {icon}
            <span className={icon? `inline-block mx-1` : ``} />
        </> 
        : null}

        {children}

        {!left && icon ?
        <>
            <span className={icon? `inline-block mx-1` : ``} />
            {icon}
        </> 
        : null}
    </Link>
  )
}

export default NavButton