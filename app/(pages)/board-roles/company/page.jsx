/* eslint-disable @next/next/no-img-element */
import HeaderTitle from "@/app/sections/HeaderTitle";
import CascadeImg from "@/app/components/CascadeImg";
import KeySection from "@/app/sections/KeySection";
import LogoSlides from "@/app/slides/LogoSlides";
import { clients } from "@/app/utils/options";

const Page = () => {
  return (
    <>
      <HeaderTitle title="Join us as we build more inclusive leadership teams" />

      <section className="container" data-aos="fade-up">
        <div className="keySectionWrap items-center">
          <KeySection heading="Let us take the complication out of sourcing exceptional talent">
            <p>
              We support organisations hoping to unlock the power of diversity
              as a catalyst for improved business performance by connecting them
              with diverse and talented industry leaders open to adding value
              and expertise on boards. Over the years, we&apos;ve successfully
              undertaken governance reviews and the identification and selection
              of chairpersons, non-executive directors and even investment
              committee members for partners covering a wide range of
              industries.
            </p>
            <p>
              Our <strong>board recruitment</strong> and{" "}
              <strong>advertisement</strong> offerings ensure we meet our
              clients where they are on their recruitment journeys.
            </p>
            <p>Take a look at our recruitment offerings and get in touch.</p>
          </KeySection>

          <CascadeImg
            position="right"
            negative
            top
            src="https://res.cloudinary.com/dqngxqaha/image/upload/v1688669538/BRCompanyImg_xe6kfc.jpg"
          />
        </div>
      </section>

      <section data-aos="fade-up" className="mb-6">
        <div className="container keySectionWrap">
          <CascadeImg
            position="left"
            src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1720605891/AdvertiseNow_jqgvtq.jpg"
          />
          <KeySection
            heading="Advertise Now"
            linkTitle="Advertise now"
            url="/advertise-now"
          >
            <p>
              As well as our tailored recruitment service, we also offer a range
              of advertisement options to enhance your search efforts.
            </p>
          </KeySection>
        </div>
      </section>

      <section className="container" data-aos="fade-up">
        <div className="keySectionWrap">
          <KeySection
            heading="Talk to us about our tailored recruitment service"
            linkTitle="Get in touch"
            url="/get-in-touch"
          >
            <p>
              We believe that diverse boards build the best companies.
              We&apos;ve successfully undertaken governance reviews and the
              identification and selection of non-executive directors,
              chairpersons, and even investment committee members for a range of
              clients across diverse industries. Our bespoke recruitment model
              ensures that you will reach the best candidates that can perform
              and help you deliver the growth you seek.
            </p>
          </KeySection>

          <CascadeImg
            position="right"
            negative
            top
            src="https://tbratest.my.canva.site/board-roles/images/b932ee43c94889df3529241879a9120b.jpg"
          />
        </div>
      </section>

      <section className="bg-white" data-aos="fade-up">
        <div className="container my-28">
          <h2 className="text-center text-dusk">We&apos;ve worked with</h2>
          <LogoSlides logos={clients} />
        </div>
      </section>
    </>
  );
};
export default Page;
