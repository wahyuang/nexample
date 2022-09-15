import Hero from "@/blocks/hero";
import Link from "next/link";
import { AiOutlineCalendar } from "react-icons/ai";

export default function BlogRoute() {
  return (
    <>
      <div className="relative mb-10">
        <div className="text-center">
          <h1 className="mb-5 text-4xl font-bold leading-normal text-sky-500">
            Lorem ipsum dolor sit amet.
          </h1>
          <div className="flex items-center justify-center">
            <AiOutlineCalendar className="text-2xl text-sky-500" />
            <div className="ml-2 text-sm text-gray-400">
              Friday, 22 Sept 2022
            </div>
          </div>
        </div>
      </div>
      <Hero />
      <div className="max-w-3xl py-12 mx-auto">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          corporis asperiores earum alias, doloribus quae vero eius debitis
          ullam recusandae?
        </p>
        <h2>Heading 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          et autem nemo assumenda suscipit. Saepe, fugit hic. Eveniet eius
          assumenda, illum odit ipsum repudiandae, saepe quisquam ad blanditiis
          sunt magnam voluptas optio nam beatae recusandae.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          provident eius obcaecati eos minima rem voluptate ad. Modi libero eos
          quibusdam amet fuga. Quam quis dolor pariatur in doloribus quibusdam
          error excepturi, molestiae amet illum architecto esse nulla vel enim
          ad et quod, corporis ullam harum. Minima quidem aspernatur explicabo
          reiciendis debitis et molestias accusantium quis laudantium vitae
          omnis tenetur, est provident eaque amet? Reprehenderit quasi eligendi
          explicabo officia vitae soluta voluptatibus. Modi, sequi iste.
        </p>

        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque
          quas, odit nihil iusto quis quam fuga consectetur officia iste
          nesciunt. Explicabo illo debitis earum esse numquam quibusdam soluta
          a.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          corporis dolores, eos porro neque ut itaque quas saepe accusamus?
          Totam ex iste autem nam nemo corrupti beatae reprehenderit, eaque
          ducimus odit eos qui laudantium quo, fugiat reiciendis iure
          dignissimos suscipit dolorum non. Nesciunt, temporibus recusandae
          consequuntur iure eum ullam nulla nostrum optio, fugit cum ipsa ipsum,
          impedit tempora sed voluptatem explicabo provident earum mollitia
          harum assumenda? Labore, in praesentium necessitatibus minima nisi,
          debitis perspiciatis asperiores illum repellat eum dolorem qui nemo
          repudiandae assumenda, neque nam adipisci dolore natus quaerat
          repellendus.
        </p>
      </div>
    </>
  );
}
