import Layout from "@/components/layout";
import { LoginForm } from "@/components/forms";

export default function LoginPage() {
  return (
    <Layout>
      <div className="w-full max-w-md p-10 mx-auto mb-10 rounded-md">
        <div className="mb-10 text-center">
          <div className="text-4xl font-bold text-sky-400">Welcome back</div>
          <div className="mt-2">
            <p>Log in to your nexample account</p>
          </div>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
}
