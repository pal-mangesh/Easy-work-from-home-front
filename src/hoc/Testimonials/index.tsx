import SlickSlider from "@components/Slick"
import Image from "@hoc/Image"
import Network from "@utils/Network"
import React, { ReactElement } from "react"

interface Props {}

function Testimonials({}: Props): ReactElement {
  const [testimonials, setTestimonials] = React.useState([] as any)
  React.useEffect(() => {
    init()
  }, [])
  const init = async () => {
    try {
      const testees = await fetchTestimonials()
      setTestimonials(testees)
    } catch (e) {
      console.error(e)
    }
  }

  const fetchTestimonials = async () => {
    try {
      const { data } = await Network.get("testimonials")
      return data
    } catch (e) {
      console.error(e)
    }
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return (
    <div>
      <div className="py-32 max-w-1366 mx-auto flex items-center">
        <div className="w-full px-4 md:px-0">
          <div className="my-4">
            <h3 className="text-3xl">What our clients say about us...</h3>
          </div>
          <div className="w-full">
            {testimonials && testimonials?.length ? (
              <>
                <SlickSlider settings={sliderSettings}>
                  {testimonials.map((t: any) => (
                    <>
                      <div className="p-4">
                        <div className="bg-white p-4 rounded-md shadow">
                          <div className="flex items-center justify-center">
                            <Image
                              className="w-16 h-16 rounded-full"
                              url={t.author?.avatar.url}
                            />
                          </div>
                          <div className="flex items-center justify-center py-4">
                            {t.author?.firstName}
                          </div>
                          <div className="flex items-center justify-center py-4">
                            <div className=" text-justify">{t.message}</div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </SlickSlider>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
