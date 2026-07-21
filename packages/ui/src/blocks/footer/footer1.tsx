// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.

export interface Footer1Props {
  title?: string;
  tagline?: string;
  addressLines?: string[];
  termsLabel?: string;
  privacyLabel?: string;
  navigationItems?: {
    title: string;
    href?: string;
    description?: string;
    items?: { title: string; href: string }[];
  }[];
}

export const Footer1 = ({
  title = "staywire™",
  tagline = "Open by design. Built around you.",
  addressLines = ["123 Water Street", "Vancouver", "BC V6B 1B2"],
  termsLabel = "Terms of service",
  privacyLabel = "Privacy policy",
  navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "The network",
      description: "Neutral, open-access fibre the building owns and earns from.",
      items: [
        {
          title: "Overview",
          href: "/reports",
        },
        {
          title: "How it works",
          href: "/statistics",
        },
        {
          title: "Neutrality",
          href: "/dashboards",
        },
        {
          title: "Revenue share",
          href: "/recordings",
        },
      ],
    },
    {
      title: "Who it's for",
      description: "One network, shared fairly by owners, providers, and residents.",
      items: [
        {
          title: "Owners",
          href: "/about",
        },
        {
          title: "Providers",
          href: "/fundraising",
        },
        {
          title: "Residents",
          href: "/investors",
        },
        {
          title: "Builders",
          href: "/contact",
        },
      ],
    },
  ],
}: Footer1Props = {}) => {
  return (
    <div className="w-full py-section bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="font-display text-headline leading-headline tracking-headline font-normal max-w-xl text-left">
                {title}
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                {tagline}
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                {addressLines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <a href="/">{termsLabel}</a>
                <a href="/">{privacyLabel}</a>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xl">{item.title}</span>
                    </a>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
