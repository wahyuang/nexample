import styles from "./newsletter.module.css";

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

export const Newsletter = () => {
  return (
    <section className="py-12">
      <div className="p-10 rounded-md bg-sky-500">
        <div>
          <h2 className="text-3xl font-bold text-center text-white">
            Join Our Newsletter
          </h2>
        </div>
        <div className="max-w-md mx-auto mt-12 text-center text-white">
          <div>
            <NewsletterForm />
          </div>
          <div className="mt-5 text-sm">
            <p>
              By submitting this form you consent to us emailing you
              occasionally about our products and services. You can unsubscribe
              from emails at any time, and we will never pass your email to
              third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
