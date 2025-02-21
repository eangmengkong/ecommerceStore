import { Events } from '../../api/product';
const EventsPage = () => {
  return (
    <div className="wrapper">
      <div className="">
        <h1 className="mb-4 flex items-center justify-center text-[20px] font-bold">
          <span>Today News</span>
        </h1>
        <div className="mr-5 flex flex-col gap-4 border-2 p-2">
          {Events.map((item, i) => (
            <div className="flex border-2" key={i}>
              <img src={item.img} className="w-[50px] object-contain" />
              <div className="h-auto w-[8.125rem]">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
