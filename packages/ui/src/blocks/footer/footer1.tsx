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
  tagline = "The booking wire for independent stays.",
  addressLines = ["560 Johnson Street", "Victoria", "BC V8W 3C6"],
  termsLabel = "Terms of service",
  privacyLabel = "Privacy policy",
  navigationItems = [
    {
      title: "Product",
      href: "/product",
      description: "",
    },
    {
      title: "Developers",
      description: "REST API, MCP server, signed webhooks.",
      items: [
        {
          title: "Documentation",
          href: "/docs",
        },
        {
          title: "API reference",
          href: "/docs/api",
        },
        {
          title: "MCP server",
          href: "/docs/mcp",
        },
        {
          title: "Webhooks",
          href: "/docs/webhooks",
        },
      ],
    },
    {
      title: "Company",
      description: "Built for small independent lodging.",
      items: [
        {
          title: "About",
          href: "/about",
        },
        {
          title: "Pricing",
          href: "/pricing",
        },
        {
          title: "Blog",
          href: "/blog",
        },
        {
          title: "Contact",
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
