function ContactIcon({ type }: { type: string }) {
  if (type === "clock") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" style={{ width: "38px", height: "38px" }}>
        <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="3.2" />
        <path d="M16 9.5v7.1h-5" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg viewBox="0 0 36 30" aria-hidden="true" style={{ width: "40px", height: "34px" }}>
        <path d="M4 5h28v20H4V5Zm1.5 1.5L18 16.2 30.5 6.5" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" style={{ width: "38px", height: "38px" }}>
        <path d="M7.8 11.9h5.1v15H7.8v-15Zm2.6-7a2.9 2.9 0 1 1 0 5.8 2.9 2.9 0 0 1 0-5.8Zm5.3 7h4.9v2.1h.1c.7-1.3 2.4-2.6 4.8-2.6 5.1 0 6.1 3.3 6.1 7.7v7.8h-5.1v-6.9c0-1.7 0-3.8-2.4-3.8s-2.7 1.8-2.7 3.6v7.1h-5.1v-15Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" style={{ width: "38px", height: "38px" }}>
      <path
        d="M10.4 5.5 7.8 8.1c-.8.8-1 2-.5 3 3 6.7 7.9 11.6 14.6 14.6 1 .5 2.2.3 3-.5l2.6-2.6c.6-.6.6-1.5 0-2.1l-3.7-3.7c-.5-.5-1.3-.6-1.9-.2l-2.3 1.4c-2.5-1.3-4.3-3.1-5.6-5.6l1.4-2.3c.4-.6.3-1.4-.2-1.9l-3.7-3.7c-.6-.6-1.5-.6-2.1 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21.4 4.8c2.8.7 5.1 3 5.8 5.8M20.6 9c1.2.4 2 1.2 2.4 2.4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

const contactItems = [
  {
    title: "Have any questions?",
    detail: "+91 96767 94025",
    href: "tel:+919676794025",
    icon: "phone",
  },
  {
    title: "Open Mon - Sat",
    detail: "09:00 - 18:00",
    icon: "clock",
  },
  {
    title: "Need some help?",
    detail: "info@synergizglobal.com",
    href: "mailto:info@synergizglobal.com",
    icon: "mail",
  },
  {
    title: "Follow us on LinkedIn",
    detail: "LinkedIn",
    href: "https://www.linkedin.com/company/synergiz-global-services-private-limited/?originalSubdomain=in",
    icon: "linkedin",
  },
];

export default function ContactStrip() {
  return (
    <section aria-label="Contact information" style={{ backgroundColor: "#373A40", color: "#fff", width: "100%" }}>
      <div
        style={{
          maxWidth: "none",
          margin: "0 auto",
          padding: "26px 86px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "22px 44px",
        }}
      >
        {contactItems.map((item) => {
          const content = (
            <>
              <span style={{ color: "#DB4E37", flex: "0 0 auto" }}>
                <ContactIcon type={item.icon} />
              </span>
              <span>
                <strong style={{ display: "block", fontSize: "19px", lineHeight: 1.2, marginBottom: "5px" }}>
                  {item.title}
                </strong>
                <em style={{ display: "block", color: "#fff", fontSize: "16px", lineHeight: 1.25 }}>
                  {item.detail}
                </em>
              </span>
            </>
          );

          const itemStyle = {
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "#fff",
            minWidth: item.icon === "clock" ? "215px" : "235px",
          };

          return item.href ? (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={itemStyle}
            >
              {content}
            </a>
          ) : (
            <div key={item.title} style={itemStyle}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
