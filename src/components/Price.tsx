import { AiOutlineCheck } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function PricingSection() {
  const { t, i18n } = useTranslation();

  // Smooth scroll handler
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  // Pricing data (from translation JSON)
  const tiers = [
    {
      id: "tier-basic",
      href: "#contact",
      name: t("pricing.basic.name"),
      price: t("pricing.basic.price"),
      description: t("pricing.basic.description"),
      features: t("pricing.basic.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "tier-professional",
      href: "#contact",
      name: t("pricing.professional.name"),
      price: t("pricing.professional.price"),
      description: t("pricing.professional.description"),
      features: t("pricing.professional.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "tier-enterprise",
      href: "#contact",
      name: t("pricing.enterprise.name"),
      price: t("pricing.enterprise.price"),
      description: t("pricing.enterprise.description"),
      features: t("pricing.enterprise.features", {
        returnObjects: true,
      }) as string[],
    },
  ];

  return (
    <section
      id="pricing"
      dir={i18n.dir()}
      className="relative isolate bg-white px-6 pt-24 sm:py-32 lg:px-12 transition-all duration-500"
      itemScope itemType="https://schema.org/Product"
    >
      {/* 🔶 Header Section */}
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
        itemProp="name"  // for SEO
        >
          {t("pricing.title", "Choose the right plan for you")}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-600"
        itemProp="description"  // for SEO 
        >
          {t(
            "pricing.subtitle",
            "Affordable plans packed with the best features for your audience and growth."
          )}
        </p>
      </div>
      {/* <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          {t("pricing.title")}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-600">
          {t(
            "pricing.subtitle",
            "Affordable plans packed with the best features for your audience and growth."
          )}
        </p>
      </div> */}

      {/* 🔶 Pricing Cards */}
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-y-8 sm:mt-20 lg:grid-cols-3 gap-10">
        {tiers.map((tier) => {
          const [hovered, setHovered] = useState(false);

          return (
            <div
              key={tier.id}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onTouchStart={() => setHovered((prev) => !prev)} // ✅ Tap hover for mobile
              className={`flex flex-col justify-between bg-white border border-amber-400 rounded-3xl 
              overflow-hidden
              p-0 transition-all duration-500 transform 
              ${
                hovered
                  ? "scale-105 shadow-xl shadow-orange-300"
                  : "scale-100 shadow-sm"
              }`}
            >
              {/* Plan Header Section */}
              <div className="bg-orange-100 p-8 sm:p-10 text-center">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-orange-600 text-3xl font-semibold">
                    {tier.name}
                  </h2>

                  <p className="mt-4 flex items-baseline gap-x-2 justify-center">
                    <span className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">
                      {tier.price}
                    </span>
                  </p>
                </div>
              </div>

              {/* Plan Details Section */}
              <div className="p-8 sm:p-10 flex flex-col flex-grow justify-between">
                <div>
                  <p className="text-gray-600 text-base mb-6">
                    {tier.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 text-sm text-gray-600 text-start">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-x-3 items-center leading-relaxed"
                      >
                        <AiOutlineCheck className="text-orange-500 h-5 w-5 flex-none" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={tier.href}
                  onClick={(e) => handleScroll(e, tier.href)}
                  className={`mt-10 block rounded-md px-4 py-3 text-center text-sm font-semibold 
                  transition-all duration-500 ${
                    hovered
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-orange-400 text-white hover:bg-orange-300"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300`}
                >
                  {t("pricing.button", "Get started today")}
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Website & App Development Plans",
    "brand": {
      "@type": "Organization",
      "name": "Rakeez Solutions"
    },
    "description": "Affordable web and app development packages for businesses in Saudi Arabia.",
    "offers": [
      {
        "@type": "Offer",
        "priceCurrency": "SAR",
        "price": "1999",
        "availability": "https://schema.org/InStock",
        "url": "https://rakeezsolutions.sa/#contact"
      },
      {
        "@type": "Offer",
        "priceCurrency": "SAR",
        "price": "4999",
        "availability": "https://schema.org/InStock",
        "url": "https://rakeezsolutions.sa/#contact"
      },
      {
        "@type": "Offer",
        "priceCurrency": "SAR",
        "price": "10000",
        "availability": "https://schema.org/InStock",
        "url": "https://rakeezsolutions.sa/#contact"
      }
    ]
  })}
</script>

    </section>
  );
}
