import React from "react";
import { Card, Button, Table, ListGroup, Accordion } from "react-bootstrap";

const CounselorDashboard = () => {
  return (
    <div className="counselor-dashboard">
      <h1 className="text-center my-4">Counselor Dashboard</h1>

      {/* Student Welfare Section */}
      <Card className="mb-4">
        <Card.Header>
          <h3>Student Welfare Tracker</h3>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Class</th>
                <th>Issues Reported</th>
                <th>Follow-Up Actions</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chiamaka Johnson</td>
                <td>JSS 2</td>
                <td>Bullying</td>
                <td>Meeting Scheduled</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>Ahmed Bello</td>
                <td>SSS 1 Science</td>
                <td>Academic Struggles</td>
                <td>Extra Tutoring Recommended</td>
                <td>Resolved</td>
              </tr>
              <tr>
                <td>Blessing Eze</td>
                <td>SSS 3 Art</td>
                <td>Emotional Distress</td>
                <td>Parental Counseling</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Session Scheduling */}
      <Card className="mb-4">
        <Card.Header>
          <h3>Upcoming Counseling Sessions</h3>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Topic</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bayo Ogundele</td>
                <td>2025-01-10</td>
                <td>11:00 AM</td>
                <td>Career Guidance</td>
                <td><Button variant="success">Start Session</Button></td>
              </tr>
              <tr>
                <td>Anita Okoro</td>
                <td>2025-01-11</td>
                <td>2:00 PM</td>
                <td>Behavioral Issues</td>
                <td><Button variant="success">Start Session</Button></td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Resource Library */}
      <Card className="mb-4">
        <Card.Header>
          <h3>Resource Library</h3>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Effective Study Techniques - PDF</ListGroup.Item>
            <ListGroup.Item>Building Confidence in Students - Video</ListGroup.Item>
            <ListGroup.Item>Handling Peer Pressure - Article</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Feedback and Collaboration Section */}
      <Card>
        <Card.Header>
          <h3>Feedback and Collaboration</h3>
        </Card.Header>
        <Card.Body>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Feedback from Parents</Accordion.Header>
              <Accordion.Body>
                <p>
                  Parent of Bayo Ogundele: "We appreciate the career guidance
                  program; Bayo seems more focused on his aspirations now."
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Collaboration with Teachers</Accordion.Header>
              <Accordion.Body>
                <p>
                  Teachers provided insights into struggling students who may
                  require counseling. Regular updates help track their
                  progress.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CounselorDashboard;
