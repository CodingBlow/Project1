import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id="#">
        <main>
          <h1>Evolver</h1>
          <p>Solution to all your Problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Normal Flow: The element will be placed in the normal flow of the
            document. It will be displayed in the order it appears in the HTML,
            and other elements will be positioned around it as if it were not
            absolutely positioned.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Normal Flow: The element will be placed in the normal flow of the
            document. It will be displayed in the order it appears in the HTML,
            and other elements will be positioned around it as if it were not
            absolutely positioned.Normal Flow: The element will be placed in the
            normal flow of the document. It will be displayed in the order it
            appears in the HTML, and other elements will be positioned around it
            as if it were not absolutely positioned.Normal Flow: The element
            will be placed in the normal flow of the document. It will be
            displayed in the order it appears in the HTML, and other elements
            will be positioned around it as if it were not absolutely
            positioned.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
