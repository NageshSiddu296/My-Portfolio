import "./styles.css";
import Project from "./Project";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";

export default function Body() {
  return (
    <>
      <div className="card">
        <h>Hi, my name is</h>
        <h2 className="intro">Nagesh B C</h2>
        <h>I am a frontend developer.</h>
        <br />
        <div className="image-card">
          <img
            className="image"
            src="https://firebasestorage.googleapis.com/v0/b/sid-projects.appspot.com/o/1643089063754.jpg?alt=media&token=2f5f5f8c-fe78-4e6d-b27f-66217b6d91a9"
            alt=""
          />
        </div>
        <div>
          <h1 className="about">About Me</h1>
          <p className="paragraph">
          With a deep passion for technology, I completed a front-enddevelopment course at NxtWave to broaden my skillset and explorenew opportunities. I am enthusiastic about applying my understandingof design principles, strong problem-solving abilities, and meticulousattention to detail to web development. My goal is to utilize my skillsand knowledge in a professional setting while contributing toinnovative projects. I thrive as a quick learner, adaptable individual, andgreatly enjoy working collaboratively. Currently, I am actively seeking achallenging role as a front-end developer, where I can continuelearning, growing, and making a meaningful impact.
          </p>
        </div>
        <br />
        <div>
          <h1 className="about">
            Here are a few technologies I’ve been working with recently:
          </h1>
        </div>
        <div className="skills">
          <div>
            <ul class="no-bullets">
              <li class="skill-list">
                <AiOutlineHtml5 size={"1.5em"} />
                <h> HTML</h>
              </li>
              <br />
              <li class="skill-list">
                <FaCss3Alt size={"1.5em"} />
                <h> CSS</h>
              </li>
              <br />
              <li class="skill-list">
                <BsBootstrap size={"1.5em"} />
                <h> Bootstrap</h>
              </li>
            </ul>
          </div>
          <div>
            <ul class="no-bullets">
              <li class="skill-list">
                <TbBrandJavascript size={"1.5em"} />
                <h> Javascript</h>
              </li>
              <br />
              <li class="skill-list">
                <DiReact size={"1.5em"} />
                <h> ReactJS</h>
              </li>
              <br />
              <li class="skill-list">
                <FiFigma size={"1.5em"} />
                <h> Figma</h>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div>
          <h1 className="about">Projects:</h1>
        </div>
        <Project />
      </div>
    </>
  );
}
