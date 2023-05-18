import { ContactForm } from "@/components/forms";
import Layout from "@/components/layout";

export const metadata = {
  title: `Contact | Nexample`,
  description: `Welcome to Next.js`,
};

export default function ContactRoute() {
  return (
    <Layout>
      <div>
        <h1 className="mb-5 text-4xl font-bold leading-normal text-center text-sky-500">
          Contact Us
        </h1>

        <div className="relative">
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}
