export default function Contact() {
  return (
    <div>
      <h1 className="mb-5 text-4xl font-bold leading-normal text-center text-sky-500">
        Contact Us
      </h1>

      <div className="relative">
        <div className="max-w-xl mx-auto">
          <form action="#">
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2">
                <div className="mb-5">
                  <input type="text" name="" id="" placeholder="First Name" />
                </div>
              </div>
              <div className="w-1/2 px-2">
                <div className="mb-5">
                  <input type="text" name="" id="" placeholder="Last Name" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full px-2">
                <div className="mb-5">
                  <input type="text" name="" id="" placeholder="Email" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full px-2">
                <div className="mb-5">
                  <input type="text" name="" id="" placeholder="Subject" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full px-2">
                <div className="mb-5">
                  <textarea rows={6} placeholder="Message"></textarea>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-2 text-white rounded-md bg-sky-500 hover:bg-sky-700"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
