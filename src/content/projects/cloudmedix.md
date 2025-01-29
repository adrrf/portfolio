---
title: "CloudMedix: A Cloud-Based Medical Scheduling System"
description: "A microservices-based cloud platform for seamless doctor-patient appointment management, built with scalability and efficiency in mind."
date: "2025"
repoURL: "https://github.com/FIS2425"
draft: false
---

### Overview

CloudMedix is a cloud-based medical system designed to simplify appointment scheduling for both patients and healthcare providers. Built as part of the “Fundamentals of Software Engineering in the Cloud” course in the Master’s in Software Engineering: Cloud, Data, and IT Management at the University of Seville.

Patients can book appointments with available doctors, while doctors can manage their schedules and patient lists dynamically. The system follows a microservices architecture, ensuring modularity and maintainability.

### **Development & Contributions**
- **[@alvarobernal2412](https://github.com/alvarobernal2412) and I** designed and implemented the **appointment** and **workshift microservices**, with their respective frontend, and a **template microservice** with a starter API, testing setup, and CI/CD workflows.
- **[@AntonioRodriguezRuiz](https://github.com/AntonioRodriguezRuiz) and I** developed a **custom API Gateway in Rust**, featuring:
  - A **configurable routing system** for defining microservice endpoints.
  - **Merged OpenAPI specifications**, exposing a unified API documentation.

### **Technology Stack**
CloudMedix is built using a cloud-native, event-driven architecture:

- **Frontend**: React + shadcn/ui for a modern, accessible user experience.
- **Backend**: Node.js, Express, and MongoDB for scalable and efficient API services.
- **Messaging & Event-Driven Architecture**: RabbitMQ for asynchronous microservice communication.
- **Infrastructure & Deployment**: Docker, Docker Compose, Kubernetes for container orchestration, and **Azure** as the cloud provider.
- **CI/CD**: GitHub Actions for automated testing and deployments.
- **Hypergate**: A Rust-based API gateway for centralized routing and API spec. aggregation.

---

Some screenshots of the project:

![Appointment Booking](/appointmentselect.png)

![Appointment Details](/appointmentdetails.png)

![Workshift Details](/workshiftview.png)
