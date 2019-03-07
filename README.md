# Problem Diagnosis and Troubleshooting Lab for IBM Cloud Private

K8 and ICP problem determination and debugging courses.  These courses are viewed and presented using the Collector application, which is also included in this github account.  Refer to the fs-collector repository for additional information regarding Collector.  

The proper use of these course files requires them to be placed in __public/coursecatalog__ of the Collector application.

#### File formats

Refer to the CONTENT.md file in the Collector repository for a description of the course file formats.

The course content used within Collector is created using Markdown. Markdown is a lightweight markup language with plain text formatting syntax. Its design allows it to be converted to many output formats.

The Collector UI (user interface) will display the rendered markdown using two primary tabs Courses and Class work. Multiple courses can be available in the drop down of the Courses tab.

#### FS01

This course provides the student with the necessary steps to install the required CLIs (command line interface) tools needed to complete the additional courses. 

If the any of CLI tools are already installed it is recommended the student should update them to the latest verison.

#### FS02

During this course the student will be required to use the cloudctl and kubectl CLIs. 

Tasks will describe a challenge. The student must execute the appropriate command(s) to obtain the needed information. 

Once complete, review the Step-by-Step instructions and be sure to press the button to mark the task complete. 

If at any time you are needing assistance press the Hint button. If you are still needing assistance use the Step-by-Step button to get detailed instructions for the task. 

#### FS03

This course provides the student with the opportunity to trouble shoot multiple problems regarding containers, security, yaml, networking, resources, etc. 

The first lab the student will deploy a new pod to gain an understanding of the process. All other labs will use the approach of having the team/student research exisitng pods, diagnose the issue, and then resolve the issue. 

Once the issue is successfully resolved the running container will report the completion of the lab. No manual process is needed to indicate completion of the lab.

#### FS04

During this course the student will examine IBM Cloud Private. This starts with reviewing the inception container. Followed by using kubectl to view running containers that provide the authentication capabilities for ICP. 

There are no Hint or Step-byStep capabilities for this course. 

---
## Useful Files

Within each lab for course FS03 the __Resourses__ section contains references to files that are useful or needed to complete the lab.  The file references __MUST__ be changed to the location where the files are copied.  It is recommended the location be a public github location.  The exisitng location __https://github.ibm.com/__ is not a public accessable location and MUST be changed. 

```
IMPORTANT NOTICE:
 
The file references MUST be changed to the location where the useful files are copied. 
```

--- 

## Lab Setup

Refer to the LabSetup.md file in this repository for detailed instructions for setting up the Kubernetes environment for these courses.
