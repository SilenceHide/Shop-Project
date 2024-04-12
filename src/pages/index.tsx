import { Banner, FeaturedCategories, Section } from "@/components";

export default function Home() {
  return (
    <>
      <Section className={"hero_section"}>
        <Banner />
      </Section>

      <Section className={"featured-categories_section lg:mt-16 mt-32"}>
        <FeaturedCategories />
      </Section>
    </>
  );
}
