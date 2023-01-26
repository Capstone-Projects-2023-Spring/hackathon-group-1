[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=9890122)
<div align="center">

# Get Assignment Dates
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>


## Keywords

Section 704, Group 1, Python, dates, syllabus

## Project Abstract

Our group created a python file that prints out the dates of assignments that are completed and upcoming. The idea was to create a simple project within the time constraint. It also was easy to run and straight to the point. Everyone in the group thought it would be easier to have a list of assignments instead of a complicated project.

## High Level Requirement

Describe the requirements – i.e., what the product does and how it does it from a user point of view – at a high level.
When the user puts ```python dates.py``` into the terminal, the following picture of what the terminal would look like is pictured below

![{95F6536D-0BD5-44F0-B1A0-42EA54CB9457}](https://user-images.githubusercontent.com/58699300/214953218-33252bea-22b9-4788-9660-8ca89657b817.png)


## Conceptual Design

The program is run on one python file, and the output is the user's terminal 

## Background
The program starts by setting up an HTTPS connection with the specified website. Then, it sets up the payload and headers for the GET request. After that it creates the GET request to the API endpoint "/api/syllabus/1". It then gets the response from the API, reads the data from the response, decodes the JSON data, and finally stores it in a variable. After it finsihes this process, it then gets the list of events from the data and initializes an empty list to store the event dates & names. The python file finally ends with a for loop that goes through each event in the list of events, gets today's date and if today's date is less than the assignment's due date, print that it is upcoming, if it is not this, the termianl prints that it is completed.

## Required Resources

IDE, Python

## Collaborators

Tyler Weiss, Kat Tejada, Aaron Thomas, Ben Baldino, Steven Altemose
