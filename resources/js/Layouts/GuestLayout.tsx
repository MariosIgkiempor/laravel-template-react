import ApplicationLogo from '@/Components/ApplicationLogo'
import { Link } from '@inertiajs/react'
import { PropsWithChildren } from 'react'
import { Card, CardContent, CardHeader } from "@/Components/ui/card";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-muted pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-muted-foreground" />
                </Link>
            </div>

            <Card className={'w-full max-w-lg mt-8'}><CardHeader></CardHeader><CardContent>
                {children}
            </CardContent></Card>
        </div>
    )
}
