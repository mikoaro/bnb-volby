import { ProfileForm } from "../components/profile-form"

export default function ProfilePage() {
  return (
    <div className="container max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Profile</h1>
      <ProfileForm />
    </div>
  )
}

