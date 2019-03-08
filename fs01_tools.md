
:course_title: FS01 - Install CLI tools

:course_desc: This course provides the student with the necessary steps to install the required CLIs (command line interface) tools needed to complete the additional courses. <br><br>If the any of CLI tools are already installed it is recommended the student should update them to the latest verison.  

:course_max: 3

:course_auto: no

:button1_label: Task

:button2_label: Hint

:button2_delay: 

:button3_label: Complete

:button3_delay: 

:infotab: <br><a href="https://github.com/IBM-ICP-CoC/fs-course/blob/master/Presentation.pptx"  target="_blank">Presentation - Powerpoint document </a>

:infotab: <br><a href="https://github.com/IBM-ICP-CoC/fs-course/blob/master/fs01_tools.pdf"  target="_blank">Course PDF</a>

:infotab: <hr>

:infotab: <h5>Example debug flow:</h5>

:infotab: <img class="mx-auto d-block" src="../courseimages/debug-flow.png" height="450" width="1000">

:infotab: <hr>

:infotab: __cmd__ - command to run

:infotab: <br>__container__ - container name (required if more than one container)

:infotab: <br>__object__ - pods, service, statefulsets, deployment, etc.

:infotab: <br>__pod__ - pod name

:infotab: <br>__unit__ - unit running, e.g. kubelet, docker, etc.

:infotab: <hr>


----
#### Task cloudctl

### cloudctl - IBM Cloud Private CLI tool

The objective is to install and/or verify the IBM Cloud Private (ICP) command line interface (CLI) cloudctl.  This CLI can be used to authenticate, create, access, and manage ICP clusters.  For this course of work the CLI will only be used to authenticate to an ICP instance.

__NOTICE:__ Some of the following instructions utilize the __'curl'__ command. If curl is not installed on your laptop it must first be installed to complete this lab. 

Press the link for the desired operating system and follow the installation instructions. 


[macOs](#macOS_cloudctl)

[Linux](#Linux_cloudctl)

[Windows](#windows_cloudctl)

----

<a name="macOS_cloudctl"></a>

<img align="left" width="30" height="39" src="../courseimages/mac_logo.png">&nbsp;
### macOS installl

<br>
1 - Download the macOS CLI to install:

Replace &#60;ICP IP&#62; with the instructor provided IP address of the IBM Cloud Private instance from where the CLI will be obtained.

```
curl -kLo cloudctl-darwin-amd64-3.1.1-973 https://<ICP IP>:8443/api/cli/cloudctl-darwin-amd64
```
	
Example file name from the above curl command:

<p align="center">
<img src="../courseimages/cloudctl_file_macos.png">
</p>

2 - Rename the above downloaded file to cloudctl.  

```
mv cloudctl-darwin-amd64-3.1.1-973 cloudctl
```	

3 - Make the kubectl binary executable.

```
chmod +x ./cloudctl
```

4 -  Move the binary in to your PATH.

```
sudo mv ./cloudctl /usr/local/bin/cloudctl
```

[Next press this to verify cloudctl installation ](#verify_cloudctl)


----

<a name="Linux_cloudctl"></a>

<img align="left" width="30" height="39" src="../courseimages/linux.png">&nbsp;
### Linux install

<br>
1 - Download the Linux CLI to install:

Replace <ICP IP> with the IP address of the IBM Cloud Private instance from where the CLI will be obtained.

```
curl -kLo cloudctl-linux-amd64-3.1.1-973 https://<ICP IP>:8443/api/cli/cloudctl-linux-amd64
```
	
Example file name from the above curl command:

<p align="center">
<img src="../courseimages/cloudctl_file_linux.png">
</p>


2 - Rename the above downloaded file to kubectl.  

```
mv cloudctl-linux-amd64-3.1.1-973 cloudctl
```	

3 - Make the kubectl binary executable.

```
chmod +x ./cloudctl
```

4 - Move the binary in to your PATH.

```
sudo mv ./cloudctl /usr/local/bin/cloudctl
```

[Next press this to verify cloudctl installation ](#verify_cloudctl)

----

<a name="Windows_cloudctl"></a>

<img align="left" width="39" height="30" src="../courseimages/windows10_blank.png">&nbsp;
### Windows install

<br>

1 - Download the Windows CLI to install.

Replace <ICP IP> with the IP address of the IBM Cloud Private instance from where the CLI will be obtained.

```
curl -kLo cloudctl-win-amd64-3.1.1-973.exe https://<ICP IP>:8443/api/cli/cloudctl-win-amd64.exe
```
	
Example file name from the above curl command:

<p align="center">
<img src="../courseimages/cloudctl_file_windows.png">
</p>

2 - Run the above file to install the CLI on the Windows system.

3 - Add the binary in to your PATH.


[Next press this to verify cloudctl installation ](#verify_cloudctl)

---

<a name="verify_cloudctl"></a>


### Verify the CLI is installed

From a terminal or command prompt enter:

	kubectl version
	

Example output:

<p align="center">
<img src="../courseimages/cloudctl_verify.png">
</p>

----
----

#### Hint cloudctl

Perform task of installing the CLI.


#### Complete cloudctl

> Confirm cloudctl complete

----
----

#### Task docker

### docker - Docker desktop and CLI tool

The objective is to install and/or verify the Docker command line interface (CLI) docker.  For this course of work the docker CLI will only be used view and inspect docker and docker images.

__NOTICE:__ All of the installation links will open a new tab with at the offical Docker site for the selected operating system.

Press the link for the desired operating system and follow the installation instructions. 


[macOs](#macOS_docker)

[Linux](#Linux_docker)

[Windows](#windows_docker)

----

<a name="macOS_docker"></a>

<img align="left" width="30" height="39" src="../courseimages/mac_logo.png">&nbsp;
### macOS install 

<br>

Click this [link](https://docs.docker.com/docker-for-mac/install/) and follow the 
offical docker instructions.


[Next press this to verify docker installation ](#verify_docker)

----

<a name="Linux_docker"></a>

<img align="left" width="30" height="39" src="../courseimages/linux.png">&nbsp;
### Linux install

<br>

* Centos - 
Click this [link](https://docs.docker.com/install/linux/docker-ce/centos/) and follow the 
offical docker instructions.

* Debian - 
Click this [link](https://docs.docker.com/install/linux/docker-ce/debian/) and follow the 
offical docker instructions.

* Fedora - 
Click this [link](https://docs.docker.com/install/linux/docker-ce/fedora/) and follow the 
offical docker instructions.

* Ubuntu - 
Click this [link](https://docs.docker.com/install/linux/docker-ce/ubuntu/) and follow the 
offical docker instructions.


[Next press this to verify docker installation ](#verify_docker)

----

<a name="Windows_docker"></a>

<img align="left" width="39" height="30" src="../courseimages/windows10_blank.png">&nbsp;
### Windows install 

<br>

Click this [link](https://docs.docker.com/docker-for-windows/install/) and follow the 
official docker instructions.


[Next press this to verify docker installation ](#verify_docker)

---

<a name="verify_docker"></a>

### Verify docker CLI is installed

From a terminal or command prompt enter:

```
docker version
```	

Example output:

<p align="center">
<img src="../courseimages/docker_verify.png">
</p>

----
----

#### Hint docker

Perform task of installing the CLI.


#### Complete docker

> Confirm docker complete

----
----

#### Task kubectl

### kubectl - Kubernetes CLI tool

The objective is to install and/or verify the Kubernetes command line interface (CLI) kubectl.  This CLI can be used to communicate with Kubernetes clusters. For this course of work the CLI will only be used to perform a significant portion of the work.

__NOTICE:__ Some of the following instructions utilize the __'curl'__ command. If curl is not installed on your laptop it must first be installed to complete this lab. 

Press the link for the desired operating system and follow the installation instructions. 


[macOs](#macOS_kubectl)

[Linux](#Linux_kubectl)

[Windows](#windows_kubectl)

----

<a name="macOS_kubectl"></a>

<img align="left" width="30" height="39" src="../courseimages/mac_logo.png">&nbsp;
### macOS install 

<br>

### Kubernetes official web site

Use instructions from the official Kubernetes [site](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl)

__(OR)__

### Download from ICP site using curl
1 - Download the macOS CLI to install:

Replace <ICP IP> with the IP address of the IBM Cloud Private instance from where the CLI will be obtained.

```
curl -kLo kubectl-darwin-amd64-v1.11.1 https://<ICP IP>:8443/api/cli/kubectl-darwin-amd64
```
	
Example file name from the above curl command:

<p align="center">
<img src="../courseimages/kubectl_file_macos.png">
</p>

2 - Rename the above downloaded file to kubectl.  

```
mv  kubectl-darwin-amd64-v1.11.1  kubectl
```	

3 - Make the kubectl binary executable.

```
chmod +x ./kubectl
```

4 -  Move the binary in to your PATH.

```	
sudo mv ./kubectl /usr/local/bin/kubectl
```

[Next press this to verify kubectl installation ](#verify_kubectl)

----

<a name="Linux_kubectl"></a>

<img align="left" width="30" height="39" src="../courseimages/linux.png">&nbsp;
### Linux install 

<br>

### Kubernetes official web site

Use instructions from the official Kubernetes [site](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl)

__(OR)__

### Download the Linux CLI to install:

Replace <ICP IP> with the IP address of the IBM Cloud Private instance from where the CLI will be obtained.

```
curl -kLo kubectl-linux-amd64-v1.11.1 https://<ICP IP>:8443/api/cli/kubectl-linux-amd64
```
	
Example file name from the above curl command:

<p align="center">
<img src="../courseimages/kubectl_file_linux.png">
</p>


2 - Rename the above downloaded file to kubectl.  

```
mv  kubectl-linux-amd64-v1.11.1  kubectl
```	

3 - Make the kubectl binary executable.

```
chmod +x ./kubectl
```

4 - Move the binary in to your PATH.

```
sudo mv ./kubectl /usr/local/bin/kubectl
```

[Next press this to verify kubectl installation ](#verify_kubectl)

----

<a name="windows_kubectl"></a>

<img align="left" width="39" height="30" src="../courseimages/windows10_blank.png">&nbsp;
### Windows 

<br>

### Kubernetes official web site

Use instructions from the official Kubernetes [site](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl)

__(OR)__

### Download the Windows CLI to install.

Replace <ICP IP> with the IP address of the IBM Cloud Private instance from where the CLI will be obtained.

```
curl -kLo kubectl-win-amd64-v1.11.1.exe https://<ICP IP>:8443/api/cli/kubectl-win-amd64.exe
```
	
Example file name from the above curl command:

<p align="center">
<img src="../courseimages/kubectl_file_windows.png">
</p>

2 - Run the above file to install the CLI on the Windows system.

3 - Add the binary in to your PATH.


[Next press this to verify kubectl installation ](#verify_kubectl)

---

<a name="verify_kubectl"></a>


### Verify the kubectl CLI is installed

From a terminal or command prompt enter:

```
kubectl version
```	

Example output:

<p align="center">
<img src="../courseimages/k8_verify.png">
</p>

Once logged in an authenticated with a kubernetes cluster the error portion of the above message will not be shown.

----
----


#### Hint kubectl

Perform task of installing the CLI.


#### Complete kubectl

> Confirm kubectl complete

----
----