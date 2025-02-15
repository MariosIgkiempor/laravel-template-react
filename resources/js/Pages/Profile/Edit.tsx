import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { PageProps } from '@/types'
import { Head } from '@inertiajs/react'
import DeleteUserForm from './Partials/DeleteUserForm'
import UpdatePasswordForm from './Partials/UpdatePasswordForm'
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm'

export default function Edit({ mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>Profile Information</CardTitle>

                            <CardDescription>
                                Update your account's profile information and email address.
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </CardContent>
                    </Card>

                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>Update Password</CardTitle>

                            <CardDescription>
                                Ensure your account is using a long, random password to stay secure.
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <UpdatePasswordForm className={'max-w-xl'} />
                        </CardContent>
                    </Card>

                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>Delete Account</CardTitle>

                            <CardDescription>
                                Once your account is deleted, all of its resources and data will be permanently deleted.
                                Before deleting your account, please download any data or information that you wish to
                                retain.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className={'space-y-6'}>
                            <DeleteUserForm className="max-w-xl" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
