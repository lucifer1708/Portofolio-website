import * as React from "react";
import "../styles/Index.css";
import Layout from "../components/Layout";
import TypeWriterEffect from "react-typewriter-effect";
import { CursorProvider } from "react-cursor-custom";

const IndexPage = () => {
  return (
    <div className="Index">
      <CursorProvider
      color='red'
      noRing='true'
      ringSize='40'
      >
        <Layout>
          <div className="Hero">
            <center>
              <h1>I'm Sumit Dhiman</h1>
            </center>
            <center>
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "poppins",
                  color: "#f50057",
                  fontWeight: 500,
                  textAlign: "center",
                  fontSize: "1.6em",
                  flexDirection: "row",
                }}
                startDelay={200}
                cursorColor="#f50057"
                multiText={[
                  "I'm a Civil Engineer",
                  "and a developer",
                  "Studying in NIT Hamirpur.",
                ]}
                multiTextDelay={2000}
                typeSpeed={70}
                multiTextLoop={true}
              />
            </center>
          </div>
        </Layout>
      </CursorProvider>
    </div>
  );
};
export default IndexPage;
