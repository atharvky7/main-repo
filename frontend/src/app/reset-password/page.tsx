import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Reset Password</h1>
        <p className="mt-4 text-muted-foreground">This is a placeholder for the password reset page.</p>
        <Link href="/signin" className="mt-6 inline-block text-primary hover:underline">
          Back to Sign In
        </Link>
      </div>
    </main>
  );
}
