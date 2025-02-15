import { buttonVariants } from '@/Components/ui/button'
import { cn } from '@/lib/utils'
import { InertiaLinkProps, Link } from '@inertiajs/react'

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={cn(
                'inline-flex items-center border-b-2 pt-1 transition duration-150 ease-in-out focus:outline-none',
                {
                    'border-accent-foreground text-foreground focus:border-accent/80': active,
                    'border-transparent text-muted-foreground hover:border-accent-foreground hover:text-foreground focus:border-accent-foreground focus:text-accent-foreground':
                        !active,
                },
                className
            )}
        >
            <div className={buttonVariants({ variant: active ? 'secondary' : 'ghost' })}>{children}</div>
        </Link>
    )
}
