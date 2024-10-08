/* eslint-disable @next/next/no-img-element */
import React from "react";
import KeySection from "@/app/sections/KeySection";
import CascadeImg from "@/app/components/CascadeImg";
import TestimonialSlider from "@/app/components/TestimonialSlider";
import InstructorSlides from "@/app/components/InstructorSlides";
import AccordionSection from "@/app/sections/AccordionSection";
import {
  RiTeamFill,
  RiVideoFill,
  RiSmartphoneLine,
  RiArticleLine,
} from "react-icons/ri";

const ProgramBlocks = ({
  attributes,
  introImg,
  certifiedImg,
  certifiedText,
  certified = false,
}) => {
  return (
    <>
      <section className="container" data-aos="fade-up">
        <div className="keySectionWrap">
          <KeySection heading={attributes.Intro.Title}>
            <p className="whitespace-pre-wrap">{attributes.Intro.content}</p>
            {certified && (
              <div className="md:flex items-center justify-between gap-8 bg-dawn-200 px-8 py-6 mt-6">
                {certifiedImg && (
                  <img
                    className="sm:m-0 -sm:mb-4 -sm:mt-0  -sm:mx-auto"
                    src={certifiedImg}
                    alt="certification partner"
                    width="130px"
                  />
                )}
                {certifiedImg && (
                  <p className="m-0 leading-normal text-sm">{certifiedText}</p>
                )}
              </div>
            )}
          </KeySection>
          <CascadeImg position="right" src={attributes.Intro.imageUrl} />
        </div>
      </section>

      <TestimonialSlider
        testimonials={attributes.Testimonial}
        imageUrl={attributes.testimonialImage}
      />

      <section data-aos="fade-up">
        <div className="container">
          <div className="grid md:grid-cols-[3fr_2fr] md:gap-10 innerPadding">
            {attributes.outlineVideoUrl ? (
              <iframe
                width="100%"
                className="-sm:h-[250px] md:h-[505px]"
                src={attributes.outlineVideoUrl}
                title={attributes.Heading.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={attributes.outlineImageUrl}
                className="w-[100%] md:h-[505px] object-cover"
                alt={attributes.Heading.title}
              />
            )}
            { attributes.CourseOutline && (
            <div className="-sm:mt-8">
              <KeySection
                heading="Browse course outline"
                keyPosition="right"
                className="!py-0"
              />
              <AccordionSection outlines={attributes.CourseOutline} />
            </div>
            )}
          </div>
        </div>
      </section>

      { attributes.Instructors && (<InstructorSlides instructors={attributes.Instructors} />)}

      {/* <section className="my-24" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center text-gray-700">Key features</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-10 text-xs mt-16 md:mx-48">
            <Expectation title="Dedicated programme support team">
              <RiTeamFill className="text-6xl text-mustard" />
            </Expectation>
            <Expectation title={attributes?.brochureInfo?.structure}>
              <RiVideoFill className="text-6xl text-mustard" />
            </Expectation>
            <Expectation title="Real-life case studies and scenarios">
              <RiArticleLine className="text-6xl text-mustard" />
            </Expectation>
            <Expectation title="Learning platform with mobile access">
              <RiSmartphoneLine className="text-6xl text-mustard" />
            </Expectation>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ProgramBlocks;

const Expectation = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center">
      {children}
      <p className="mt-4">{title}</p>
    </div>
  );
};
