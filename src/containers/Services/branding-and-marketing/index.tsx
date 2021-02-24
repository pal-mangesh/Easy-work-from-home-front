import Button from "@components/Button"
import Heading from "@components/Heading"
import InfoGrid, { IInfoGridItem } from "@components/InfoGrid"
import ServiceInfoStrap from "@components/ServiceInfoStrap"
import Strap from "@components/Strap"
import AboutUsStrap from "@hoc/AboutUsStrap"
import ReachOutBox from "@hoc/ReachOutBox"
import { navigate } from "gatsby"
import React, { ReactElement } from "react"

interface Props {}

function BrandingAndMarketingContainer({}: Props): ReactElement {
  const services: IInfoGridItem[] = [
    {
      title: "Web Wide <br/> Social Reach",
      subTitle:
        "Reach out to the crowd through socially established platforms using proven tools and methodologies. Our skillful team leaves no stone unturned to make sure your brand reaches out to the maximum.",
    },
    {
      title: "Branding your <br/> & Vision",
      subTitle:
        "Crafting unique identity for your unique business. Narrate your awesome story to your target audience. Brand position & perception drives more than 30% of your results",
    },
    {
      title: "Complete<br/>Marketing Solution",
      subTitle:
        "Don't miss the opportunity of marketing to 2bn customers. Engage with customers in real-time & create loyal fan base. More than 60% of the qualified leads come from social media channels.  More than 70% of the companies use Digital Marketing to improve their revenue.",
    },
  ]

  const process = [
    {
      title: "BRAND IDENTITY",
      subTitle:
        "Concept Creation is an art of giving life to an entity which will have its unique identity, Values, Tone, Temper & Social Status. We gain deeper understanding about your business & create an identity to reflect the same.",
      imageURL: require("@images/bnm-brand-icon.svg"),
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      subTitle:
        "If you want your business to be visible to online customers, your website should be SEO compatible. We optimize your website so that Search Engines can understand your business and present at the top of the search results.",
      imageURL: require("@images/bnm-seo-icon.svg"),
    },
    {
      title: "CAMPAIGN MANAGEMENT",
      subTitle:
        "If you are new in digital advertising, we can work with you from scratch, identifying which advertising networks are best for your business. We can also easily step in and improve upon any existing campaigns on the Google AdWords Platform, Bing Ads, Facebook, and others.",
      imageURL: require("@images/bnm-campaign-icon.svg"),
    },
    {
      title: "LEAD GENERATION",
      subTitle:
        "We help our clients increase their YoY revenues, by exposing them to more and more targeted customers via our strategised and proven lead generation methods!",
      imageURL: require("@images/bnm-leads-icon.svg"),
    },
    {
      title: "COLD CALLING & MAILING",
      subTitle:
        "Our skillful marketing and sales team is working 24x7 to provide your with filtered and potential leads that we capture by cold calling and bulk mailing.",
      imageURL: require("@images/bnm-coldcalls-icon.svg"),
    },
    {
      title: "CUSTOM LANDING PAGES",
      subTitle:
        "Attractive and converting landing page design. Single page story telling. Pages that help you convert leads to clients. Call to action options. Subscription Forms. Get Started Forms.",
      imageURL: require("@images/bnm-landing-icon.svg"),
    },
    {
      title: "PREDICTIVE ANALYTICS",
      subTitle:
        "Analytics tools for campaign improvements. Custom artificial intelligence algorithms. Machine learning clusters for predictions.",
      imageURL: require("@images/bnm-predictive-icon.svg"),
    },
    {
      title: "BULK SMS/EMAIL",
      subTitle:
        "Bulk message based marketing. Email based marketing. Cold Mails and Calls. Email content that converts.",
      imageURL: require("@images/bnm-sms-icon.svg"),
    },
  ]

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${require("@images/home-bg.svg")})`,
        }}
        className="w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-1366 mx-auto py-16 px-8 md:px-0">
          <ServiceInfoStrap title="BRANDING & MARKERING">
            <span>
              How do you translate business needs into analytics strategies?
              ReactiveMarketing has an unique approach to Creating consistent,
              scalable governance frameworks that function across Use cases and
              analytics levels.
            </span>
          </ServiceInfoStrap>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${require("@images/service-bm-sec1-bg.png")})`,
        }}
        className="w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-1366 mx-auto py-16 px-8 md:px-0 text-white">
          <InfoGrid items={services} bgTextColor="text-white" />
        </div>
      </div>
      <div>
        <Strap style={{ backgroundColor: "#A44C4C" }}>
          <div className="px-4 md:px-0 text-center">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Deliver Great Experiences. Grow Faster. Start Today!
              </h3>
            </div>
            <div className="mt-8 w-1/2 md:w-1/3 mx-auto">
              <Button type="secondary" onClick={()=>navigate("/contact")}>Contact Us</Button>
            </div>
          </div>
        </Strap>
      </div>
      <div
        style={{
          backgroundImage: `url(${require("@images/services-common-bg.png")})`,
        }}
        className="w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-1366 mx-auto py-16 px-8 md:px-0">
          {process.map((p: any, index: number) => (
            <>
              <div
                className={
                  "md:py-16 py-8 flex flex-col " +
                  (index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")
                }
              >
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <div className="mb-8">
                    <Heading color="bg-blue-500" className="text-3xl">
                      {p.title}
                    </Heading>
                  </div>
                  <h5 className="text-justify">{p.subTitle}</h5>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <img src={p.imageURL} />
                </div>
              </div>
            </>
          ))}
        </div>
        <AboutUsStrap/>
        <ReachOutBox/>
      </div>
    </>
  )
}

export default BrandingAndMarketingContainer
