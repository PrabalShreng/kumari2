import Script from "next/script";

export default function Footer() {
  return (
    <>
      <footer>
        <section
          className="bg-dark text-light py-4 mt-5">
        <div className="row">
          <div className="container text-center">
            <p>
              &copy; {new Date().getFullYear()} My Company. All rights reserved.
            </p>
            <h4 className="text-light">
              This website is created by <span className="text-primary">Prabal Shreng Changbang Limbu</span> <br /> as frontend development project.
            </h4>
          </div>
        </div>

        {/* Bootstrap 5 JS bundle */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        </section>
      </footer>
    </>
  );
}
