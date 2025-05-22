import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility function for merging tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Design system values according to PRD
export const theme = {
  colors: {
    primary: {
      orange: '#FFA25B', // Pantone 1485 CP
      red: '#E70054', // Pantone 1925 C
      peach: '#EDC8AA', // Pantone 719 CP
      pink: '#EA84C2', // Pantone 2375 C
    },
    secondary: {
      cyan: '#49B8D0', // Pantone 7702 C
      blue: '#1B74B8', // Pantone 2383 C
    },
  },
  typography: {
    heading: {
      h1: 'text-4xl font-bold leading-tight', // 36px, 700, 120%
      h2: 'text-3xl font-semibold leading-tight', // 28px, 600, 120%
      h3: 'text-2xl font-semibold leading-tight', // 24px, 600, 120%
      h4: 'text-xl font-semibold leading-tight', // 20px, 600, 120%
    },
    body: 'text-base font-normal leading-relaxed', // 16px, 400, 150%
    small: 'text-sm font-normal leading-relaxed', // 14px, 400, 150%
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '64px',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
}

// Utility for generating status pill colors based on status
export function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-[#49B8D0] text-white'
    case 'inactive':
      return 'bg-[#E70054] text-white'
    case 'pending':
      return 'bg-[#FFA25B] text-white'
    default:
      return 'bg-gray-200 text-gray-700'
  }
}