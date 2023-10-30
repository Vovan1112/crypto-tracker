import { ContactContent } from "@/content/content";

export const ContactPageBlockWithText = () => {
  const data = ContactContent;

  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12"
        >
          <div className="align-start flex mb-5">
          <div className="shrink-0">
          <div key={item.id} className="inline-block rounded-md bg-primary-100 p-4 text-primary">
        <svg
          key={item.id}
          stroke="currentColor"
          className="h-6 w-6"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d={item.path} />
        </svg>
        </div>
              </div>
            <div className="ml-6 grow">
              <p className="mb-2 font-bold dark:text-white">{item.title}</p>
              <p className="text-neutral-500 dark:text-neutral-200">
                {item.email}
              </p>
              <p className="text-neutral-500 dark:text-neutral-200">
                {item.number}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
