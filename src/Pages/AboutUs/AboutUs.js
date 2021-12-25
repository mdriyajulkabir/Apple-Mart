import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">CEO of Apple Tim Cook</h1>
            <p className="lead mb-4">
              Timothy Donald Cook is an American business executive who has been
              the chief executive officer of Apple Inc. since 2011. Cook
              previously served as the company's chief operating officer under
              its co-founder Steve Jobs.
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "button" }}>
                Born:
              </span>{" "}
              November 1, 1960 (age 61 years), Mobile, Alabama, United States
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                Education:
              </span>{" "}
              The Fuqua School of Business (1988), Auburn University (1982),
              Robertsdale High School (1978)
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                Parents:
              </span>{" "}
              Geraldine Cook, Donald Cook
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              width="450px"
              height="450PX"
              src="https://images.livemint.com/img/2021/11/09/1600x900/APPLE-EVENT--0_1636080366048_1636473753684.JPG"
              alt=""
            />
          </div>
        </div>
      </div>

      <h1 className="text-center p-5">Founder of Apple</h1>
      <div class="card-group">
        <div class="card p-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/800px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h3 class="card-title">Steve Jobs</h3>
            <p class="card-text">
              Steven Paul Jobs was an American business magnate, industrial
              designer, investor, and media proprietor.
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "button" }}>
                Born:
              </span>{" "}
              February 24, 1955, San Francisco, California, United States{" "}
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "button" }}>
                Died:
              </span>{" "}
              October 5, 2011, Palo Alto, California, United States
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "button" }}>
                Education:
              </span>{" "}
              Reed College (1972–1974),
            </p>
          </div>
        </div>
        <div class="card p-1">
          <img
            style={{ height: "50%" }}
            src="https://blog.parrikar.com/wp-content/uploads/2013/09/Ron-Wayne-Apple-Founder.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h3 class="card-title">Ronald Wayne</h3>
            <p class="card-text">
              Ronald Wayne is a retired American electronics industry
              businessman. He co-founded Apple Computer Company as a partnership
              with Steve Wozniak and Steve Jobs, providing administrative
              oversight and documentation for the new venture.
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "button" }}>
                Born:
              </span>{" "}
              May 17, 1934 (age 87 years), Cleveland, Ohio, United States{" "}
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "button" }}>
                Known for:
              </span>{" "}
              Co-founding Apple Inc.
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "button" }}>
                Education:
              </span>{" "}
              The School of Industrial Art in New York
            </p>
          </div>
        </div>
        <div class="card p-1">
          <img
            src="https://www.speakerbookingagency.com/storage/celebrities/1559002516_NBF2019-steve-wozniak-600x587.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h3 class="card-title">Steve Wozniak</h3>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "button" }}>
                Born:
              </span>{" "}
              August 11, 1950 (age 71 years), San Jose, California, United
              States{" "}
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "button" }}>
                Spouse:
              </span>{" "}
              Janet Hill (m. 2008), Suzanne Mulkern (m. 1990–2004), Candice
              Clark (m. 1981–1987), Alice Robertson (m. 1976–1980)
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "button" }}>
                Education:
              </span>
              UC Berkeley College of Engineering (1986)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
