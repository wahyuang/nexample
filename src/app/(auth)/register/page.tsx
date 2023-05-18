import { RegisterForm } from "@/components/forms";
import Layout from "@/components/layout";

export default function LoginPage() {
  return (
    <Layout>
      <div className="w-full max-w-lg p-4 mx-auto mb-10 rounded-md lg:p-10">
        <div className="mb-10 text-center">
          <div className="text-2xl font-bold md:text-4xl text-sky-400">
            Create an account
          </div>
          <div className="mt-2">
            <p>Fill all the information below to create an account</p>
          </div>
        </div>
        <div>
          <RegisterForm />
        </div>
      </div>
    </Layout>
  );
}
