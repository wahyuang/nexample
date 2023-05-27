import { ButtonSolid } from "@/components/buttons";
import Image from "@/components/image";
import Layout from "@/components/layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-10">
        <div>
          <Image
            src="/error-404.svg"
            width={500}
            height={500}
            className="h-[40vh]"
            alt="Not Found"
          />
        </div>
        <div className="flex flex-col items-center mt-10">
          <div className="mb-8 text-xl md:text-3xl">
            Oops! Your page doesn&apos;t exist.
          </div>
          <div>
            <ButtonSolid href="/" className="text-white bg-sky-400">
              Back to homepage
            </ButtonSolid>
          </div>
        </div>
      </div>
    </Layout>
  );
}
