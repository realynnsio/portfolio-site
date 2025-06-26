'use client';
import Link from 'next/link';
import React from 'react'

interface NavButtonProps {
    href?: string;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
}

const NavButton = ({
    href = '',
    onClick = () => {},
    className,
    children,
    style = {},
    icon,
}: NavButtonProps) => {
  return (
    <Link href={`${href}`} className={`flex flex-row py-2 px-3
    text-dive-100 rounded-xl md:border-0
    hover:text-aqua-100 md:py-2 md:px-4
    md:hover:bg-aqua-100 md:hover:text-white
    md:hover:shadow-md ${className}`} style={style} onClick={onClick}>
        {icon}
        <span className="inline-block mx-1" />
        {children}
    </Link>
  )
}

export default NavButton