import Button from "@components/Button"
import SlickSlider from "@components/Slick"
import ContactForm from "@hoc/ContactFrom"
import Image, { IImageProps } from "@hoc/Image"
import CommonUtils from "@utils/CommonUtils"
import React, { ReactElement } from "react"

interface IAmenity {
  title?: string
  value?: string
}

interface IProperty {
  _id?: string
  name?: string
  title?: string
  description?: string
  cost?: number | string
  city?: string
  province?: string
  state?: string
  country?: string
  postalCode?: string
  images?: IImageProps[]
  area?: number
  bathrooms?: number
  bedrooms?: number
  streetAddress?: string
  subDivision?: string
  listingId?: string
  ownershipType?: string
  propertyType?: string
  communityFeatures?: string
  parkingSpaces?: number
  transactionType?: string
  zoneDescription?: string
  constructionStyle?: string
  basementDevelopment?: string
  basementType?: string
  constructionDate?: string
  coolingType?: string
  exteriorFinish?: string
  storiesCount?: number
  heatingFuel?: string
  type?: string
  architectureStyle?: string
  utilityWater?: string
  sizeFrontage?: number
  accessType?: string
  sewerType?: string
  depth?: number
  appliances?: any
  features?: any
  equipments?: any
  amenities?: IAmenity[]
  heatingType?: string
}

interface Props {
  property?: IProperty
}

interface ITabProps {
  title?: string
  name: string
}

function PropertyDisplay({ property }: Props): ReactElement {
  const [visible, setVisible] = React.useState({
    overview: true,
    amenities: true,
  } as any)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const toggleSection = (section: string) => (e: any) => {
    const _v = { ...visible }
    _v[section] = !_v[section]
    setVisible({ ..._v })
  }

  const Tab = ({ title, name }: ITabProps) => (
    <div
      onClick={toggleSection(name)}
      className="flex items-center bg-blue-500 text-white px-4 my-4 rounded "
    >
      <div className="flex-1">
        <h3 className="text-2xl">{title}</h3>
      </div>
      <div className="cursor-pointer">{visible.overview ? "-" : "+"}</div>
    </div>
  )

  return (
    <div className="max-w-1366 mx-auto">
      <div className="w-full">
        {property?.images?.length ? (
          <>
            <SlickSlider settings={settings}>
              {property.images.map((img: any) => (
                <>
                  <Image
                    className="w-full"
                    style={{ maxHeight: "600px" }}
                    url={`${img.url}`}
                  />
                </>
              ))}
            </SlickSlider>
          </>
        ) : (
          ""
        )}
        <div className="py-4 mt-8 px-4 md:px-0 ">
          <div className=" flex flex-col md:flex-row md:items-center flex-wrap">
            <div className="flex-1 flex items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold">{property?.title}</h3>
                <h6 className="text-sm font-bold text-gray-500">
                  {property?.city}, {property?.province}, {property?.country}
                </h6>
              </div>
              <div className="md:pr-4 text-2xl"></div>
            </div>
            <div className="py-4 md:py-0 w-full md:w-1/3 md:pl-4">
              <Button
                onClick={() => {
                  CommonUtils.CallToAction.setContactFormVisible(true, property)
                }}
                size="lg"
                type="secondary"
              >
                Arrange Callback
              </Button>
            </div>
          </div>
        </div>
        <div className="py-4  px-4 md:px-0 flex flex-col md:flex-row flex-wrap ">
          <div className="w-full md:w-2/3 md:mt-4">
            <div className="text-justify mb-8">{property?.description}</div>
            <Tab title="Overview" name="overview" />
            {visible.overview ? (
              <>
                <div className="flex items-center flex-col md:flex-row flex-wrap">
                  {property?.area ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Area</strong>
                      </div>
                      <div>{property?.area} Sqft.</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.cost ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Cost</strong>
                      </div>
                      <div>
                        {CommonUtils.Intl.formatCurrency(
                          parseFloat(property?.cost + "")
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.bedrooms ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Bedrooms</strong>
                      </div>
                      <div>{property?.bedrooms}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.streetAddress ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Street Address</strong>
                      </div>
                      <div>{property?.streetAddress}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.province ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Province</strong>
                      </div>
                      <div>{property?.province}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.city ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>City</strong>
                      </div>
                      <div>{property?.city}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.postalCode ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Postal Code</strong>
                      </div>
                      <div>{property?.postalCode}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.subDivision ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Sub Division</strong>
                      </div>
                      <div>{property?.subDivision}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.listingId ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Listing ID</strong>
                      </div>
                      <div>{property?.listingId}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.ownershipType ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Ownership Type</strong>
                      </div>
                      <div>{property?.ownershipType}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.propertyType ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Property Type</strong>
                      </div>
                      <div>{property?.propertyType}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.communityFeatures ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Community Features</strong>
                      </div>
                      <div>{property?.communityFeatures}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.parkingSpaces ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Parking Spaces</strong>
                      </div>
                      <div>{property?.parkingSpaces}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.transactionType ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Transaction Type</strong>
                      </div>
                      <div>{property?.transactionType}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.zoneDescription ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Zone Description</strong>
                      </div>
                      <div>{property?.zoneDescription}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.constructionStyle ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Construction Style</strong>
                      </div>
                      <div>{property?.zoneDescription}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.basementDevelopment ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Basement Development</strong>
                      </div>
                      <div>{property?.basementDevelopment}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.basementType ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Basement Type</strong>
                      </div>
                      <div>{property?.basementType}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.constructionDate ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Construction Date</strong>
                      </div>
                      <div>{property?.constructionDate}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.coolingType ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Cooling Type</strong>
                      </div>
                      <div>{property?.coolingType}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.exteriorFinish ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Exterior Finish</strong>
                      </div>
                      <div>{property?.exteriorFinish}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.heatingFuel ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Heating Fuel</strong>
                      </div>
                      <div>{property?.heatingFuel}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.heatingType ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Heating Type</strong>
                      </div>
                      <div>{property?.heatingType}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.storiesCount ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Stories Count</strong>
                      </div>
                      <div>{property?.storiesCount}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.type ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Category</strong>
                      </div>
                      <div>{property?.type}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.utilityWater ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Utility Water</strong>
                      </div>
                      <div>{property?.utilityWater}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.sizeFrontage ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Size Frontage</strong>
                      </div>
                      <div>{property?.sizeFrontage}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.accessType ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Access Type</strong>
                      </div>
                      <div>{property?.accessType}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.sewerType ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Sewer Type</strong>
                      </div>
                      <div>{property?.sewerType}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {property?.depth ? (
                    <div className="p-4 flex items-center w-full md:w-1/2">
                      <div className="flex-1">
                        <strong>Depth</strong>
                      </div>
                      <div>{property?.depth}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </>
            ) : (
              ""
            )}
            <>
              {property?.amenities && property?.amenities.length ? (
                <>
                  <Tab title="Amenities" name="amenities" />
                  {visible.amenities ? (
                    <>
                      <div className="flex items-center flex-col md:flex-row flex-wrap">
                        {property?.amenities.map((pa: IAmenity) => (
                          <>
                            <div className="p-4 flex items-center w-full md:w-1/2">
                              <div className="flex-1">
                                <strong>{pa.title}</strong>
                              </div>
                              <div>{pa.value}</div>
                            </div>
                          </>
                        ))}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
            </>
          </div>
          <div className="w-full md:w-1/3 md:pl-4 ">
            <div className="bg-white p-2 rounded shadow">
              <h3 className="text-xl text-center">Contact Us</h3>
              <ContactForm
                successMessage="Thanks for showing interest! We will get in touch with you very soon!"
                property={property?._id}
                reason="BUY [From property details page]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDisplay
