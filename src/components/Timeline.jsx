import React from "react";
// import '../styles/main.css'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { FaSchool } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import '../styles/Index.css'

const Timeline = () => {
  return (
    <div className="timeline">
      <VerticalTimeline >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020-2024"
          textClassName="text"
          iconStyle={{ background: "#f50057", color: "#ffffff" }}
          icon={<MdHomeWork />}
        >
          <h3 className="vertical-timeline-element-title">Excutive Member</h3>
          <h4 className="vertical-timeline-element-subtitle">ISTE-NITH</h4>
          <p>An active excutive member of ISTE-NITH</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020-2024"
          textClassName="text"
          iconStyle={{ background: "#f50057", color: "#fff" }}
          icon={<MdHomeWork />}
        >
          <h3 className="vertical-timeline-element-title">
            B.Tech in Civil Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">NIT Hamirpur</h4>
          <p>Pursuing B.Tech in Civil Engineering at NIT Hamirpur</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019-2020"
          textClassName="text"
          iconStyle={{ background: "#f50057", color: "#fff" }}
          icon={<MdHomeWork />}
        >
          <h3 className="vertical-timeline-element-title">Intermediate</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Govt. Sr. Sec. School Jol-Sappar
          </h4>
          <p>Scored 87% in 12th standard</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2018"
          textClassName="text"
          iconStyle={{ background: "#f50057", color: "#fff" }}
          icon={<MdHomeWork />}
        >
          <h3 className="vertical-timeline-element-title">Matriculation</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Govt. Sr. Sec. School Jol-Sappar
          </h4>
          <p>Scored 86.5% in 10th standard</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
