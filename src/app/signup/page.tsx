import { SignUpForm } from '@/components/auth/signup-form';

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 animate-in fade-in-0 zoom-in-95 duration-300">
      <SignUpForm />
    </main>
  );
}
