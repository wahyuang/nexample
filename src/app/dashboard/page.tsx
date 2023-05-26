import ButtonLogout from "@/components/button-logout";
import Layout from "@/components/layout";

export default function Page() {
  return (
    <Layout>
      <div>This is dashboard</div>
      <div>
        <ButtonLogout />
      </div>
    </Layout>
  );
}
