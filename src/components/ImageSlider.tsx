import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  images: {
    src: string;
    text: string;
  }[];
}

export default function ImagesSlider(props: Props) {
  return (
    <div className="image-slider">
      <Swiper autoplay={{ delay: 1000 }} loop={true}>
        {props.images.map(({ src, text }) => (
          <SwiperSlide>
            <div
              className="image-slide"
              style={{
                backgroundImage: `url(${src})`,
                height: 400,
                backgroundSize: "cover",
                borderRadius: 5,
                position: "relative",
                backgroundPosition: "center",
                overflow: "hidden",
              }}
            >
              <div
                className="text"
                style={{
                  position: "absolute",
                  width: "100%",
                  bottom: 0,
                  backgroundColor: "#000000c0",

                  padding: 5,
                  paddingLeft: 10,
                  fontSize: 14,
                }}
              >
                {text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
