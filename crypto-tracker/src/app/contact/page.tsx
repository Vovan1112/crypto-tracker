import { ContactPageBlockWithText } from "./components/ContactPageBlockWithText";
import { ContactPageMap } from "./components/ContactPageMap";

export default function Contact() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex flex-wrap items-center">
            <ContactPageMap />
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">  
                <ContactPageBlockWithText />     
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
