import InputError from '@/Components/InputError'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/Components/ui/alert-dialog'
import { buttonVariants } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { useForm } from '@inertiajs/react'
import { FormEventHandler, useRef } from 'react'

export default function DeleteUserForm({ className = '' }: { className?: string }) {
    const passwordInput = useRef<HTMLInputElement>(null)

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    })

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault()

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        })
    }

    const closeModal = () => {
        clearErrors()
        reset()
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className={buttonVariants({ variant: 'destructive' })}>
                Delete account
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to delete your account?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please
                        enter your password to confirm you would like to permanently delete your account.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <form onSubmit={deleteUser} className={className}>
                    <div className="my-6">
                        <Label htmlFor="password" className="sr-only">
                            Password
                        </Label>

                        <Input
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            autoFocus={true}
                            placeholder="Password"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            className={buttonVariants({
                                variant: 'destructive',
                            })}
                            disabled={processing}
                        >
                            Delete Account
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    )
}
