import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Login Page</h1>
        <p className="mt-4 text-muted-foreground">This is a placeholder for the login page.</p>
        <Link href="/signup" className="mt-6 inline-block text-primary hover:underline">
          Don't have an account? Sign up
        </Link>
      </div>
    </main>
  );
}
