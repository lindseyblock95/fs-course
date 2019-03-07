# Docker image creation

Multiple Docker images are created in support of labs in the FS03 Diagnose Labs course.  The files needed to create these images are contained in the images directory of this repository. The Docker images that need to be create are:

| Container name | Source directory |
| :--- | :--- |
| avail | images/fs-avail | 
| baker | images/fs-baker | 
| carbon | images/fs-carbon | 
| doors | images/fs-doors | 
| eagle | images/fs-eagle | 
| floor | images/fs-floor | 
| gonzo | images/fs-gonzo |

Within each source directory is a file, build_push.sh.  This file will build and push the Docker image to the __ibmicpoco__ docker hub account.  This file must be edited to change the value __ibmicpcoc__ to your own docker hub account.  


# Lab setup

The Collector UI for the instructor and students must be created using Kubernetes resource definiton files.  Along with the Collector UI a series of Kubernetes (K8) Pods are created for each student.  The following table identifies the resources that are created to support the training.  When the value __&#60;team&#62;__ is shown in the following table the value represents the team name / namespace.  The team name is a color.  The default setup scripts create 0 to 42 sets of resources for students/teams.  

Items listed as __Pods__ typically are defined with __fail__ and __pass__ in the script name and come in sets.  The scripts defined with __pass__ are used to test sizing and UI functionality.  The __pass__ scripts are used to test prior to teaching the course.  

The __fail__ scripts create the failed or non-working deployment of the pod for each each team.  In some cases a single pod is deployed not one for each team. Ensure the __fail__ scripts are used when the course is taught.


| Item | Description | K8 Type | Count | Script |
| :---: | :--- | :---: | :--: | :---: | 
| Students (or) Teams | Each student or team will have a K8 Namespace and RoleBinding created.  The namespace is where the student Collector UI and Pods will be deployed.  The RoleBinding defines the authorzation needed to create and deploy Pods within the namespace. | Namespace & RoleBinding | 42 | 00&#95;00&#95;teams.yaml | 
| Pull Policy | The default location for the Docker images used in these courses is __docker.io/ibmicpcoc/__.  This repository location must be authorized to allow pulling of the Docker images. | ClusterImagePolicy | 42 | 00&#95;01&#95;imagePolicy.yaml | 
| Instructor Collector | The Collector UI used by the instructor.  This Collector instance is also the colleciton point for the student Collector instances.  Thus the reason the application is named Collector. | Deployment and Service | 1 | 00&#95;02&#95;instructor_ui.yaml | 
| Student Collectors | The Collector UI used by the student. A Collector instance is created for each student or team.  This instance is configured to send information to the Instructor instance.  It is assumed there is at least one Student instance.  Default setup scripts define 42 instances.  All with unique instance names that are colors e.g. red, greeen, blue, etc.| Deployment and Service | 42 | 00&#95;03&#95;student_ui.yaml |
| Pods | Pods deployed using name starting with __&#60;team&#62;-house-__. This script will deploy 42 pods with different team names.  This script is used to test sizing and functionality. | Deployment (PASS) | 42 | 01&#95;pass&#95;house&#95;all.yaml  |
| Pods | Pods deployed using name starting with __&#60;team&#62;-avail-__. This script will deploy one pod in the avail namespace.  This script is used to deploy a single non-working pod. | Deployment (FAIL) | 1 | 02&#95;fail&#95;avail&#95;one.yaml  |
| Pods | Pods deployed using name starting with __&#60;team&#62;-avail-__. This script will deploy 42 pods with different team names.  This script is used to deploy working pods for tesing and sizing. | Deployment (PASS) | 42 | 02&#95;pass&#95;avail&#95;all.yaml  |
| Pods | Pods deployed using name starting with __&#60;team&#62;-baker-__. This script will deploy zero pods.  <br><br>The pod will not deploy in a failed state because of a syntax error.  Resulting in no failed pods being deployed. | Deployment (FAIL) | 0 | 03&#95;fail&#95;baker&#95;one.yaml  |
| Pods | Pods deployed using name starting with __&#60;team&#62;-baker-__. This script will deploy 42 pods with different team names.  This script is used to deploy working pods for tesing and sizing. | Deployment (PASS) | 42 | 03&#95;pass&#95;baker&#95;all.yaml  |
| Pods | Pods deployed using name starting with __&#60;team&#62;-carbon-__. This script will deploy 42 pods with different team names.  This script is used to deploy non-working pods. | Deployment (FAIL) | 42 | 04&#95;fail&#95;carbon&#95;all.yaml  |
| Pods | Pods deployed using name starting with __&#60;team&#62;-carbon-__. This script will deploy 42 pods with different team names.  This script is used to deploy working pods for tesing and sizing. | Deployment (PASS) | 42 | 04&#95;pass&#95;carbon&#95;all.yaml  |
| Pods | Pods deployed using name starting with __&#60;team&#62;-doors-__. This script will deploy 42 pods with different team names.  This script is used to deploy non-working pods. | Deployment (FAIL) | 42 | 05&#95;fail&#95;doors&#95;all.yaml  |
| Pods | Pods deployed using name starting with __&#60;team&#62;-doors-__. This script will deploy 42 pods with different team names.  This script is used to deploy working pods for tesing and sizing. | Deployment (PASS) | 42 | 05&#95;pass&#95;doors&#95;all.yaml  |
| Pods | Pods deployed using name starting with __&#60;team&#62;-eagle-__. This script will deploy 42 pods with different team names.  This script is used to deploy non-working pods. | Deployment (FAIL) | 42 | 06&#95;fail&#95;eagle&#95;all.yaml  |
| Pods | Pods deployed using name starting with __&#60;team&#62;-eagle-__. This script will deploy 42 pods with different team names.  This script is used to deploy working pods for tesing and sizing. | Deployment (PASS) | 42 | 06&#95;pass&#95;eagle&#95;all.yaml  |
| Pods | Pods deployed using name starting with __&#60;team&#62;-floor-__. This script will deploy 42 pods with different team names.  This script is used to deploy non-working pods. | Deployment (FAIL) | 42 | 07&#95;fail&#95;floor&#95;all.yaml  |
| Pods | Pods deployed using name starting with __&#60;team&#62;-floor-__. This script will deploy 42 pods with different team names.  This script is used to deploy working pods for tesing and sizing. | Deployment (PASS) | 42 | 07&#95;pass&#95;floor&#95;all.yaml  |
| Pods | Pods deployed using name starting with __&#60;team&#62;-gonzo-__. This script will deploy 42 pods with different team names.  This script is used to deploy non-working pods. | Deployment (FAIL) | 42 | 08&#95;fail&#95;gonzo&#95;all.yaml  |
| Pods | Pods deployed using name starting with __&#60;team&#62;-gonzo-__. This script will deploy 42 pods with different team names.  This script is used to deploy working pods for tesing and sizing. | Deployment (PASS) | 42 | 08&#95;pass&#95;gonzo&#95;all.yaml  |

---

### Example commands

Once authenticated with the K8 cluster the following command syntax can be used to create or delete the resources used in these courses.

__Create__ resources:

``` 
kubectl create -f <script file name>
```
__Delete__ resources:

``` 
kubectl delete -f <script file name>
```

---

### Setup steps

Below is the suggested approach for deployment of the course environment.

1 - Create resources defined by scripts that begin with __00__.

``` 
kubectl create -f 00_00_teams.yaml
kubectl create -f 00_01_imagePolicy.yaml
kubectl create -f 00_02_instructor_ui.yaml
kubectl create -f 00_03_student_ui.yaml
```

2 - Validate environment sizing and UI by creating all containers for every team.

``` 
kubectl create -f 01_pass_house_all.yaml
kubectl create -f 02_pass_avail_all.yaml
kubectl create -f 03_pass_baker_all.yaml
kubectl create -f 04_pass_carbon_all.yaml
kubectl create -f 05_pass_doors_all.yaml
kubectl create -f 06_pass_eagle_all.yaml
kubectl create -f 07_pass_floor_all.yaml
kubectl create -f 08_pass_gonzo_all.yaml
```

3 - Once sizing and UI are validated all team pods deployed in step 2 are deleted.

``` 
kubectl delete -f 01_pass_house_all.yaml
kubectl delete -f 02_pass_avail_all.yaml
kubectl delete -f 03_pass_baker_all.yaml
kubectl delete -f 04_pass_carbon_all.yaml
kubectl delete -f 05_pass_doors_all.yaml
kubectl delete -f 06_pass_eagle_all.yaml
kubectl delete -f 07_pass_floor_all.yaml
kubectl delete -f 08_pass_gonzo_all.yaml
```

4 - Deploy failed and non-working pods for all teams:  

``` 
kubectl create -f 02_fail_avail_one.yaml **
kubectl create -f 03_fail_baker_one.yaml
kubectl create -f 04_fail_carbon_all.yaml
kubectl create -f 05_fail_doors_all.yaml
kubectl create -f 06_fail_eagle_all.yaml
kubectl create -f 07_fail_floor_all.yaml
kubectl create -f 08_fail_gonzo_all.yaml
```

** This script needs to be deployed with 30 minutes of having the students begin work on labs.  The k8 event that is identified in the lab documentation will not be shown if the pod is deployed and running for a period of time.  Starting the pod within 30 minutes of starting the labs will ensure the event message is shown.


