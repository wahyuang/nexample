import styles from "./newsletter.module.css";

type NewsletterProps = {
  title: string;
  content: string;
};

const NewsletterForm = () => {
  return (
    <div>
      <form action="#">
        <div className="flex">
          <div className="flex-grow">
            <input
              type="text"
              className={styles.newsletterInput}
              placeholder="Email address"
            />
          </div>
          <div className="w-36">
            <button className="w-full h-12 bg-sky-700 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export const Newsletter = ({ title, content }: NewsletterProps) => {
  return (
    <section className="py-12">
      <div className="p-10 rounded-md bg-sky-500">
        <div>
          {title && (
            <h2
              className="text-3xl font-bold text-center text-white"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
        </div>
        <div className="max-w-md mx-auto mt-12 text-center text-white">
          <div>
            <NewsletterForm />
          </div>
          {content && (
            <div
              className="mt-5 text-sm"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
      </div>
    </section>
  );
};
