"use client";

import Link from "next/link";

export default function Navbar() {
  const closeMenu = () => {
    const cb = document.getElementById("menu-toggle") as HTMLInputElement;
    if (cb) cb.checked = false;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/management-consulting", label: "Management Consulting" },
    { href: "/digital-solutions", label: "Digital Solutions" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <>
      <input type="checkbox" id="menu-toggle" style={{ display: "none" }} />

      <header
        style={{
          backgroundColor: "#0f0f0f",
          backdropFilter: "blur(12px)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          borderBottom: "1px solid rgba(250,250,250,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          boxShadow: "0 1px 20px rgba(6,13,28,0.22)",
          height: "90px",
        }}
      >
        <Link href="/" onClick={closeMenu}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/synergiz_logo.png"
            alt="Synergiz Global"
            style={{ height: "85px", width: "auto", objectFit: "contain" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                padding: "22px 12px",
                display: "inline-block",
                transition: "color 0.2s",
              }}
              className="hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
          <div className="group" style={{ position: "relative" }}>
            <Link
              href="/careers"
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                padding: "22px 12px",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
              className="hover:text-orange-500"
            >
              Careers
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 8L1 3h10z" />
              </svg>
            </Link>
            <div
              className="hidden group-hover:block"
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgb(89,89,89)",
                padding: "20px",
                gap: "30px",
                minWidth: "420px",
                zIndex: 100,
              }}
            >
              <div style={{ display: "flex", gap: "30px" }}>
                <div>
                  <p style={{ color: "#4AB4D4", fontWeight: 600, marginBottom: "8px" }}>Students</p>
                  <Link href="/careers#internships" style={{ color: "#fff", fontSize: "14px" }}>Internships</Link>
                </div>
                <div>
                  <p style={{ color: "#4AB4D4", fontWeight: 600, marginBottom: "8px" }}>Freshers</p>
                  <Link href="/careers#fresher" style={{ color: "#fff", fontSize: "14px" }}>Entry Level Jobs</Link>
                </div>
                <div>
                  <p style={{ color: "#4AB4D4", fontWeight: 600, marginBottom: "8px" }}>Experienced</p>
                  <Link href="/careers#experienced" style={{ color: "#fff", fontSize: "14px", display: "block", marginBottom: "4px" }}>Experienced Jobs</Link>
                  <Link href="/careers#veterans" style={{ color: "#fff", fontSize: "14px" }}>Veterans</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Desktop badges */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
          className="desktop-badges"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/duns-registered-badge.svg" alt="D-U-N-S Registered" style={{ height: "50px", width: "auto" }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://syntrack-dev.s3.ap-south-1.amazonaws.com/SynergizGlobal/img/iso-92x64.png"
            alt="ISO 9001:2015"
            style={{ height: "50px", width: "auto" }}
          />
        </div>

        {/* Hamburger (mobile) */}
        <label
          htmlFor="menu-toggle"
          aria-label="Toggle menu"
          style={{
            cursor: "pointer",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            WebkitTapHighlightColor: "transparent",
            touchAction: "manipulation",
            userSelect: "none",
          }}
          className="hamburger-btn"
        >
          <span style={{ width: 26, height: 3, backgroundColor: "#fff", display: "block", borderRadius: 2 }} />
          <span style={{ width: 26, height: 3, backgroundColor: "#fff", display: "block", borderRadius: 2 }} />
          <span style={{ width: 26, height: 3, backgroundColor: "#fff", display: "block", borderRadius: 2 }} />
        </label>
      </header>

      {/* Mobile menu */}
      <div
        className="mobile-menu"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#000",
          zIndex: 2000,
          padding: "100px 25px 40px",
          overflowY: "auto",
        }}
      >
        <label
          htmlFor="menu-toggle"
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: "20px",
            right: "25px",
            color: "#fff",
            fontSize: "30px",
            cursor: "pointer",
            padding: "8px",
          }}
        >
          ✕
        </label>
        {navLinks.map((link) => (
          <div key={link.href} style={{ borderBottom: "1px solid #333", padding: "12px 0" }}>
            <Link
              href={link.href}
              style={{ color: "#fff", fontWeight: 600, fontSize: "20px" }}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          </div>
        ))}
        <div style={{ borderBottom: "1px solid #333", padding: "12px 0" }}>
          <span style={{ color: "#fff", fontWeight: 600, fontSize: "20px" }}>Careers</span>
          <div style={{ paddingLeft: "15px", marginTop: "10px" }}>
            <p style={{ color: "#4AB4D4", fontWeight: 600, marginBottom: "6px" }}>Students</p>
            <Link href="/careers#internships" style={{ color: "#ccc", display: "block", marginBottom: "4px" }} onClick={closeMenu}>Internships</Link>
            <p style={{ color: "#4AB4D4", fontWeight: 600, margin: "10px 0 6px" }}>Freshers</p>
            <Link href="/careers#fresher" style={{ color: "#ccc", display: "block", marginBottom: "4px" }} onClick={closeMenu}>Entry Level Jobs</Link>
            <p style={{ color: "#4AB4D4", fontWeight: 600, margin: "10px 0 6px" }}>Experienced</p>
            <Link href="/careers#experienced" style={{ color: "#ccc", display: "block", marginBottom: "4px" }} onClick={closeMenu}>Experienced Jobs</Link>
            <Link href="/careers#veterans" style={{ color: "#ccc", display: "block" }} onClick={closeMenu}>Veterans</Link>
          </div>
        </div>
      </div>
    </>
  );
}
