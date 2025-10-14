'use client';

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { HouseIcon, InboxIcon, SparklesIcon, ZapIcon, ChevronDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { LanguageToggle } from '@/components/ui/language-toggle';
import { useLanguage } from '@/contexts/language-context';
import { QuoteModal } from '@/components/ui/quote-modal';

// Simple logo component for the navbar
const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 324 323' fill='currentColor' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect
        x='88.1023'
        y='144.792'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 88.1023 144.792)'
        fill='currentColor'
      />
      <rect
        x='85.3459'
        y='244.537'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 85.3459 244.537)'
        fill='currentColor'
      />
    </svg>
  );
};

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

// User Menu Component
const UserMenu = ({
  userName = 'John Doe',
  userEmail = 'john@example.com',
  userAvatar,
  onItemClick
}: {
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onItemClick?: (item: string) => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="h-9 px-2 py-0 hover:bg-accent hover:text-accent-foreground">
        <Avatar className="h-7 w-7">
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback className="text-xs">
            {userName.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <ChevronDownIcon className="h-3 w-3 ml-1" />
        <span className="sr-only">User menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">{userName}</p>
          <p className="text-xs leading-none text-muted-foreground">
            {userEmail}
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => {
        if (onItemClick) {
          onItemClick('profile');
        } else {
          console.log('User menu item: profile');
        }
      }}>
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => {
        if (onItemClick) {
          onItemClick('settings');
        } else {
          console.log('User menu item: settings');
        }
      }}>
        Settings
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => {
        if (onItemClick) {
          onItemClick('billing');
        } else {
          console.log('User menu item: billing');
        }
      }}>
        Billing
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => {
        if (onItemClick) {
          onItemClick('logout');
        } else {
          console.log('User menu item: logout');
        }
      }}>
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// Types
export interface Navbar10NavItem {
  href?: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>;
  active?: boolean;
}

export interface Navbar10Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar10NavItem[];
  upgradeText?: string;
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onNavItemClick?: (href: string) => void;
  onUpgradeClick?: () => void;
  onUserItemClick?: (item: string) => void;
}

// Default navigation links with icons
const getDefaultNavigationLinks = (isSpanish: boolean): Navbar10NavItem[] => [
  { href: '#', label: isSpanish ? 'Inicio' : 'Home', icon: HouseIcon, active: true },
  { href: '#', label: isSpanish ? 'Bandeja' : 'Inbox', icon: InboxIcon },
  { href: '#', label: isSpanish ? 'Análisis' : 'Insights', icon: ZapIcon },
];

export const Navbar10 = React.forwardRef<HTMLElement, Navbar10Props>(
  (
    {
      className,
      logo = <Logo />,
      navigationLinks,
      upgradeText = 'Upgrade',
      userName = 'John Doe',
      userEmail = 'john@example.com',
      userAvatar,
      onNavItemClick,
      onUpgradeClick,
      onUserItemClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const { isSpanish } = useLanguage();
    
    // Use provided navigation links or default ones based on language
    const currentNavigationLinks = navigationLinks || getDefaultNavigationLinks(isSpanish);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };

      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    // Combine refs
    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);

    return (
      <header
        ref={combinedRef}
        className={cn(
          'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 [&_*]:no-underline',
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
          {/* Left side - Our Work section */}
          <div className="flex flex-1 items-center gap-6">
            <span className="text-white font-medium">
              {isSpanish ? 'Nuestro Trabajo' : 'Our Work'}
            </span>
            <div className="flex items-center gap-2">
              <button className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                {isSpanish ? 'MARCA' : 'BRAND'}
              </button>
              <button className="border border-white text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors">
                LOGOS
              </button>
              <button className="border border-white text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors">
                {isSpanish ? 'TODOS' : 'ALL'}
              </button>
            </div>
          </div>

          {/* Middle side: Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              IS
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end gap-6">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">
                {isSpanish ? 'Hablemos' : "Let's Chat"}
              </span>
            </div>
            
            {/* Language Toggle */}
            <LanguageToggle />

            {/* Quote Modal */}
            <QuoteModal />
          </div>
        </div>
      </header>
    );
  }
);

Navbar10.displayName = 'Navbar10';

export { Logo, HamburgerIcon, UserMenu };
