import ApplicationLogo from '@/Components/ApplicationLogo'
import { buttonVariants } from '@/Components/ui/button'
import { PageProps } from '@/types'
import { Head, Link } from '@inertiajs/react'

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-background">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-primary selection:text-background">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center">
                                <ApplicationLogo className={'size-12 text-primary-foreground'} />
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end gap-3">
                                {auth.user ? (
                                    <Link href={route('dashboard')} className={buttonVariants({ variant: 'outline' })}>
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link href={route('login')} className={buttonVariants({ variant: 'outline' })}>
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className={buttonVariants({ variant: 'default' })}
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6 min-h-screen">
                            <div>Home page</div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}
