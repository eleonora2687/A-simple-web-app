# A Simple Web App

## Overview
A Simple Web App built with Spring Boot that [brief description of what the app does].

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Accessing the Application](#accessing-the-application)
- [Troubleshooting](#troubleshooting)
  

## Prerequisites
Before running the application, ensure you have the following installed:

- [Java JDK 8 or higher](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Maven](https://maven.apache.org/install.html)
- [Git](https://git-scm.com/downloads)

## Getting Started

### 1. Clone the Repository
Open your terminal and run the following command to clone the repository:
```bash
git clone https://github.com/eleonora2687/a-simple-web-app.git
cd a-simple-web-app

### 2. Build the Project
Navigate to the project directory and run the following command to compile the application and install dependencies:

```bash
mvn clean install

Run any tests (if you have any).
Package the application into a JAR file.

### 3. Running the Application
To run the Spring Boot application, execute the following command:

```bash
mvn spring-boot:run

### 4. Accessing the Application
Once the application is running, open your web browser and go to:

http://localhost:8080
You should see the home page of your application. 

### 5. Troubleshooting
Missing Dependencies: If you encounter errors related to missing dependencies, ensure all required modules are included and properly configured.
Port Issues: If port 8080 is already in use, you can change the port by modifying the application.properties file in src/main/resources:
properties

server.port=8081


