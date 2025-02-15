import { cn } from '@/lib/utils'
import { InertiaLinkProps, Link } from '@inertiajs/react'

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={cn(
                `flex w-full items-start border-l-4 py-2 pe-4 ps-3 text-base font-medium transition duration-150 ease-in-out focus:outline-none`,
                {
                    'border-primary bg-primary text-primary-foreground focus:border-primary/80 focus:bg-primary/40':
                        active,
                    'border-transparent text-muted-foreground hover:border-muted-foreground hover:bg-muted focus:border-primary focus:bg-accent focus:text-accent-foreground':
                        !active,
                },
                className
            )}
        >
            {children}
        </Link>
    )
}
