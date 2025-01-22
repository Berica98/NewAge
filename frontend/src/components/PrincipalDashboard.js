import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css'; // Import style.css from the same directory

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/teachers">Teachers</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
};

// PrincipalDashboard Component
const PrincipalDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <Sidebar />
        <div className="dashboard-body">
          <Container>
            <Row className="mt-5">
              <Col md={12}>
                <h2 className="dashboard-title">Welcome to the Principal Dashboard</h2>
                <hr />
                <Card className="dashboard-card">
                  <Card.Body>
                    <Card.Title>Dashboard Overview</Card.Title>
                    <Card.Text>
                      As the principal, you can manage students, teachers, and view critical school data here.
                    </Card.Text>
                    <div className="button-group">
                      <Link to="/students" className="btn btn-primary dashboard-btn">Manage Students</Link>
                      <Link to="/teachers" className="btn btn-success dashboard-btn">Manage Teachers</Link>
                      <Link to="/activities" className="btn btn-warning dashboard-btn">View Activities</Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Example of displaying some key metrics */}
            <Row className="mt-4">
              <Col md={6} lg={4}>
                <Card className="metric-card">
                  <Card.Body>
                    <Card.Title>Total Students</Card.Title>
                    <Card.Text>
                      1,245 students are currently enrolled.
                    </Card.Text>
                    <Link to="/students" className="btn btn-info">View Details</Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card className="metric-card">
                  <Card.Body>
                    <Card.Title>Total Teachers</Card.Title>
                    <Card.Text>
                      85 teaching staff across various departments.
                    </Card.Text>
                    <Link to="/teachers" className="btn btn-info">View Details</Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card className="metric-card">
                  <Card.Body>
                    <Card.Title>Recent Activities</Card.Title>
                    <Card.Text>
                      View the latest activities by staff and students.
                    </Card.Text>
                    <Link to="/activities" className="btn btn-info">View Activities</Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDashboard;
