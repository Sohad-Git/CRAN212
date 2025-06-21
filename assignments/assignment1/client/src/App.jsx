import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Spinner } from 'react-bootstrap';

function App() {
  const [objective, setObjective] = useState(null);
  const [summary, setSummary] = useState(null);
  const [education, setEducation] = useState(null);
  const [experience, setExperience] = useState(null);
  const [volunteer, setVolunteer] = useState(null);
  const [interests, setInterests] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const resObjective = await fetch('http://localhost:8000/getObjective');
        const dataObjective = await resObjective.json();
        setObjective(dataObjective.objective);

        const resSummary = await fetch('http://localhost:8000/getSummary');
        const dataSummary = await resSummary.json();
        setSummary(dataSummary.summaryOfSkills);

        const resEducation = await fetch('http://localhost:8000/getEducation');
        const dataEducation = await resEducation.json();
        setEducation(dataEducation.education);

        const resExperience = await fetch('http://localhost:8000/getExperience');
        const dataExperience = await resExperience.json();
        setExperience(dataExperience.experience);

        const resVolunteer = await fetch('http://localhost:8000/getVolunteer');
        const dataVolunteer = await resVolunteer.json();
        setVolunteer(dataVolunteer.volunteer);

        const resInterests = await fetch('http://localhost:8000/getInterests');
        const dataInterests = await resInterests.json();
        setInterests(dataInterests.interests);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  if (!objective || !summary || !education || !experience || !volunteer || !interests) {
    return (
      <Container className="p-5 text-center">
        <Spinner animation="border" role="status" />
        <h3>Loading your portfolio...</h3>
      </Container>
    );
  }

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "40px" }}>
      <Container fluid>
        <h1 className="mb-5 text-center display-3">Sohad Sattouf Portfolio</h1>

        <Card className="mb-5 p-4 shadow-sm rounded-3">
          <h4 className="mb-3">Objective</h4>
          <p>{objective}</p>
        </Card>

        <Card className="mb-5 p-4 shadow-sm rounded-3">
          <h4 className="mb-3">Summary of Skills</h4>
          <ul>{summary.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
        </Card>

        <Card className="mb-5 p-4 shadow-sm rounded-3">
          <h4 className="mb-3">Education</h4>
          {education.map((edu, i) => (
            <div key={i} className="mb-3">
              <b>{edu.program}</b><br />
              {edu.school} ({edu.period})<br />
              <i>{edu.note}</i>
            </div>
          ))}
        </Card>

        <Card className="mb-5 p-4 shadow-sm rounded-3">
          <h4 className="mb-3">Experience & Projects</h4>
          {experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <b>{exp.title}</b> ({exp.type}, {exp.period})<br />
              <i>{exp.tech}</i>
              <ul>{exp.details.map((d, j) => <li key={j}>{d}</li>)}</ul>
            </div>
          ))}
        </Card>

        <Card className="mb-5 p-4 shadow-sm rounded-3">
          <h4 className="mb-3">Volunteer Experience</h4>
          {volunteer.map((v, i) => (
            <div key={i} className="mb-3">
              <b>{v.role}</b> ({v.period})<br />
              {v.place}
              <ul>{v.details.map((d, j) => <li key={j}>{d}</li>)}</ul>
            </div>
          ))}
        </Card>

        <Card className="mb-5 p-4 shadow-sm rounded-3">
          <h4 className="mb-3">Interests</h4>
          <ul>{interests.map((int, i) => <li key={i}>{int}</li>)}</ul>
        </Card>

        <Card className="mb-5 p-4 shadow-sm rounded-3">
          <h4 className="mb-3">References</h4>
          <p>Available upon request.</p>
        </Card>
      </Container>
    </div>
  );
}

export default App;
