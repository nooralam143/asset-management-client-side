
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Slidder/Style.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Card } from 'flowbite-react';

const Slidder = () => {
    return (
        <>
        <Swiper
spaceBetween={30}
centeredSlides={true}
autoplay={{
  delay: 3500,
  disableOnInteraction: false,
}}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
          <Card className="max-w-sm" imgSrc="/unified-enterprise-service-management-platform.png" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>

          </SwiperSlide>
          <SwiperSlide>
          <Card className="max-w-sm" imgSrc="/unified-enterprise-service-management-platform.png" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>

          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Slidder;