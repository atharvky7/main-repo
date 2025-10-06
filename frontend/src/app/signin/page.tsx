import { SignInForm } from '@/components/auth/signin-form';

export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 animate-in fade-in-0 zoom-in-95 duration-300">
      <SignInForm />
    </main>
  );
}
