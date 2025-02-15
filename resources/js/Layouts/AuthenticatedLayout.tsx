import ApplicationLogo from '@/Components/ApplicationLogo'
import NavLink from '@/Components/NavLink'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink'
import { Button } from '@/Components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'
import { PropsWithChildren, ReactNode, useState } from 'react'

export default function Authenticated({ header, children }: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false)

    return (
        <div className="min-h-screen bg-muted">
            <nav className="border-b border-muted bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-foreground" />
                                </Link>
                            </div>

                            <div className="hidden space-x-4 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant={'outline'} size={'sm'}>
                                            {user.name}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <Link href={route('profile.edit')}>
                                            <DropdownMenuItem>Profile</DropdownMenuItem>
                                        </Link>
                                        <Link href={route('logout')} method={'post'} className={'w-full'}>
                                            <DropdownMenuItem>Logout</DropdownMenuItem>
                                        </Link>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <Button
                                variant={'outline'}
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>

                <div
                    className={cn('mb-10 shadow-lg sm:hidden', {
                        block: showingNavigationDropdown,
                        hidden: !showingNavigationDropdown,
                    })}
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-t border-muted pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-muted-foreground">{user.name}</div>
                            <div className="text-sm font-medium text-muted-foreground">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-background shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    )
}
