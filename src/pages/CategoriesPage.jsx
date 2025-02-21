import Shop1 from '../assets/images/shop1.jpg';
import Shop2 from '../assets/images/shop2.jpeg';
import Shop3 from '../assets/images/shop3.jpg';
const CategoriesPage = () => {
  return (
    <div className="wrapper">
      <div className="container mx-auto max-w-[75rem]">
        <div className="mb-5 place-items-center">
          <h1 className="text-[1.875rem] font-bold">Our Collections</h1>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
          <div className="relative h-[270px] overflow-hidden border bg-gray-300">
            <div className="red-overlay"></div>
            <div className="absolute left-5 top-5 z-10 text-white">
              <h1 className="text-xl font-bold">
                Laptop <br /> Collection
              </h1>
              <span className="text-sm">Shop Now →</span>
            </div>
            <img src={Shop1} className="h-[18.75rem] w-[25rem]" />
          </div>

          <div className="relative h-[16.875rem] overflow-hidden border bg-gray-300">
            <div className="red-overlay"></div>
            <div className="absolute left-5 top-5 z-10 text-white">
              <h1 className="text-xl font-bold">
                Cameras <br />
                Collection
              </h1>
              <span className="text-sm">Shop Now →</span>
            </div>
            <img src={Shop2} className="h-[18.75rem] w-[25rem]" />
          </div>

          <div className="relative h-[16.875rem] overflow-hidden border bg-gray-300">
            <div className="red-overlay"></div>
            <div className="absolute left-5 top-5 z-10 text-white">
              <h1 className="text-xl font-bold">
                Accessories <br /> Collection
              </h1>
              <span className="text-sm">Shop Now →</span>
            </div>
            <img src={Shop3} className="h-[18.75rem] w-[25rem]" />
          </div>

          <div className="relative h-[16.875rem] overflow-hidden border bg-gray-300">
            <div className="red-overlay"></div>
            <div className="absolute left-5 top-5 z-10 text-white">
              <h1 className="text-xl font-bold">
                Accessories <br /> Collection
              </h1>
              <span className="text-sm">Shop Now →</span>
            </div>
            <img src={Shop3} className="h-[18.75rem] w-[25rem]" />
          </div>

          <div className="relative h-[16.875rem] overflow-hidden border bg-gray-300">
            <div className="red-overlay"></div>
            <div className="absolute left-5 top-5 z-10 text-white">
              <h1 className="text-xl font-bold">
                Accessories <br /> Collection
              </h1>
              <span className="text-sm">Shop Now →</span>
            </div>
            <img src={Shop1} className="h-[18.75rem] w-[25rem]" />
          </div>
          <div className="relative h-[16.875rem] overflow-hidden border bg-gray-300">
            <div className="red-overlay"></div>
            <div className="absolute left-5 top-5 z-10 text-white">
              <h1 className="text-xl font-bold">
                Accessories <br /> Collection
              </h1>
              <span className="text-sm">Shop Now →</span>
            </div>
            <img src={Shop2} className="h-[18.75rem] w-[25rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
