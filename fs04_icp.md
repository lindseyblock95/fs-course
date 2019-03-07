:course_title: FS04 - ICP

:course_desc: During this course the student will examine IBM Cloud Private.  This starts with reviewing the __inception__ container.  Followed by using kubectl to view running containers that provide the authentication capabilities for ICP. <br><br>There are no Hint or Step-byStep capabilities for this course.  <br><br>Press the 'Begin course' button to start the course.


:course_max: 4

:button1_label: Task

:button2_label: 

:button2_delay: 0

:button3_label: 

:button3_delay: 0

:button3_color: #f00

:infotab: <br><a href="https://github.com/IBM-ICP-CoC/faststart-eu/blob/master/documents/M4ICP001-fast-start-2019.pptx"  target="_blank">Presentation - Powerpoint document </a>

:infotab: <br><a href="https://github.com/IBM-ICP-CoC/faststart-eu/blob/master/documents/M4ICP001-fast-start-2019.pdf"  target="_blank">Presentation - PDF document </a>

:infotab: <hr>

:infotab: <br><a href="https://github.com/IBM-ICP-CoC/faststart-eu/blob/master/resources"  target="_blank">Additional resources</a>

:infotab: <br><br>Example debug flow:<img class="mx-auto d-block" src="../courseimages/debug-flow.png" height="450" width="1000">

:infotab: <br>cmd - command to run

:infotab: <br>container -container name (required if more than one container)

:infotab: <br>object - pods, service, statefulsets, deployment, etc.

:infotab: <br>pod - pod name

:infotab: <br>unit - unit running, e.g. kubelet, docker, etc.

----
----

#### Task ICP01
Use docker to pull the IBM Cloud Private install container __icp-inception:3.1.1__ to your local machine.  

```
Command:

	docker pull ibmcom/icp-inception:3.1.1

```
Once the pull of the image is complete use __docker images__ to check the size of the container.  The size of what was pulled should be similar to what is shown.

```	
Command:
	docker images
	
Example output:

REPOSITORY             TAG                 IMAGE ID            CREATED             SIZE
ibmcom/icp-inception   3.1.1               a6ce8540d080        2 weeks ago         748MB
		
```

Use the docker CLI to exec into the 'inception' container and list the directory. 

```
Command:
	docker run --rm -it --entrypoint=/bin/bash ibmcom/icp-inception:3.1.1

Example result is a shell prompt:

bash-4.3#  ls -al
total 40
drwxr-xr-x    1 root     root          4096 Nov 20 05:02 .
drwxr-xr-x    1 root     root          4096 Jan 30 13:08 ..
-rw-rw-r--    1 root     root           779 Nov  9 21:19 ansible.cfg
drwxr-xr-x    1 root     root          4096 Nov 20 05:02 cfc-files
drwxr-xr-x    3 root     root          4096 Nov  9 21:22 cluster
-rwxrwxr-x    1 root     root          8230 Nov  9 21:19 installer.sh
drwxr-xr-x    1 root     root          4096 Nov 20 05:02 playbook
drwxr-xr-x    4 root     root          4096 Nov  9 22:18 plugins


```

The container shell opens to the __/installer__ directory.  This directory contains the 'installer.sh' script that is used when ICP is installed.


When installing ICP and the following command is executed, the 'cluster' directory from the inception container is copied and creates 'cluster' directory on the boot node.

```
sudo docker run -v $(pwd):/data -e LICENSE=accept \
ibmcom/icp-inception-amd64:3.1.1-ee \
cp -r cluster /data
```

Change to the __/addon__ directory and list the contents.  The files listed are the Helm chart tgz files for the addon features of ICP.  

```
Commands:

bash-4.3#  cd /addon

bash-4.3#  ls -la

ls -la
total 484
drwxr-xr-x    1 root     root          4096 Nov 20 05:02 .
drwxr-xr-x    1 root     root          4096 Jan 30 16:03 ..
-rw-rw-r--    1 root     root             0 Nov  9 21:19 .gitkeep
-rw-r--r--    1 root     root          4323 Nov 20 01:09 audit-logging-3.1.1.tgz
-rw-r--r--    1 root     root          2204 Nov 20 01:09 auth-apikeys-3.1.1.tgz
-rw-r--r--    1 root     root          7355 Nov 20 01:09 auth-idp-3.1.1.tgz
-rw-r--r--    1 root     root          3361 Nov 20 01:09 auth-pap-3.1.1.tgz
-rw-r--r--    1 root     root          3436 Nov 20 01:09 auth-pdp-3.1.1.tgz
-rw-r--r--    1 root     root          9871 Nov 20 01:09 calico-3.1.1.tgz
-rw-r--r--    1 root     root          1736 Nov 20 01:09 heapster-3.1.1.tgz
-rw-r--r--    1 root     root          8019 Nov 20 01:09 helm-api-3.1.1.tgz
-rw-r--r--    1 root     root          4952 Nov 20 01:09 helm-repo-3.1.1.tgz
-rw-r--r--    1 root     root          9947 Nov 20 01:09 ibm-cert-manager-3.1.1.tgz
-rw-r--r--    1 root     root          6832 Nov 20 01:09 ibm-custom-metrics-adapter-3.1.1.tgz
-rw-r--r--    1 root     root         30974 Nov 20 01:09 ibm-glusterfs-1.2.0.tgz
-rw-r--r--    1 root     root         42911 Nov 20 01:09 ibm-icplogging-2.1.0.tgz
-rw-r--r--    1 root     root         79419 Nov 20 01:09 ibm-icpmonitoring-1.3.0.tgz
-rw-r--r--    1 root     root         55853 Nov 20 01:09 ibm-istio-1.0.4.tgz
-rw-r--r--    1 root     root         27617 Nov 20 01:09 ibm-minio-objectstore-1.6.1.tgz
-rw-r--r--    1 root     root          8995 Nov 20 01:09 ibmcloud-image-enforcement-3.1.1.tgz
-rw-r--r--    1 root     root          1581 Nov 20 01:09 icp-catalog-chart-3.1.1.tgz
-rw-r--r--    1 root     root          2813 Nov 20 01:09 icp-management-ingress-3.1.1.tgz
-rw-r--r--    1 root     root          5639 Nov 20 01:09 icp-mariadb-galera-3.1.1.tgz
-rw-r--r--    1 root     root         16663 Nov 20 01:09 icp-mongodb-3.1.1.tgz
-rw-r--r--    1 root     root          5324 Nov 20 01:09 key-management-3.1.1.tgz
-rw-r--r--    1 root     root          2691 Nov 20 01:09 key-management-hsm-3.1.1.tgz
-rw-r--r--    1 root     root          1996 Nov 20 01:09 kube-dns-3.1.1.tgz
-rw-r--r--    1 root     root          3534 Nov 20 01:09 mariadb-3.1.1.tgz
-rw-r--r--    1 root     root          5455 Nov 20 01:09 metering-3.1.1.tgz
-rw-r--r--    1 root     root          1916 Nov 20 01:09 metrics-server-3.1.1.tgz
-rw-r--r--    1 root     root          4975 Nov 20 01:09 mgmt-repo-3.1.1.tgz
-rw-r--r--    1 root     root          2593 Nov 20 01:09 nginx-ingress-3.1.1.tgz
-rw-r--r--    1 root     root         14613 Nov 20 01:09 nsx-t-container-plugin-3.1.1.tgz
-rw-r--r--    1 root     root          1645 Nov 20 01:09 nvidia-device-plugin-3.1.1.tgz
-rw-r--r--    1 root     root          4199 Nov 20 01:09 platform-api-3.1.1.tgz
-rw-r--r--    1 root     root          3283 Nov 20 01:09 platform-ui-3.1.1.tgz
-rw-r--r--    1 root     root          1611 Nov 20 01:09 secret-watcher-3.1.1.tgz
-rw-r--r--    1 root     root          4503 Nov 20 01:09 security-onboarding-3.1.1.tgz
-rw-r--r--    1 root     root          8308 Nov 20 01:09 service-catalog-3.1.1.tgz
-rw-r--r--    1 root     root          1656 Nov 20 01:09 unified-router-3.1.1.tgz
-rw-r--r--    1 root     root          3070 Nov 20 01:09 web-terminal-3.1.1.tgz

```


> Confirm ICP01 complete


----
----

#### Task ICP02

Understanding the IBM Cloud Private components is a must.   Open the following link:

[Catalog of ICP verison 3.1.1 components](https://www.ibm.com/support/knowledgecenter/en/SSBS6K_3.1.1/getting_started/components.html)

What node or nodes does the OpenID Connect (OIDC) component execute?


> Confirm ICP02 complete

----
----

#### Task ICP03

Get the name for the pod that starts with __auth-idp-__.  Using kubectl describe examine the ICP security pod that starts with __auth-idp__.  There are four containers defined in this pod.  

Notice there is a container named __icp-audit-service__.  Now list the contents of the README.md file in the icp-audit-service container.

```
Commands to list pods:
	kubectl get pods -n kube-system | grep auth

Example output:

kubectl get pods -n kube-system | grep auth
auth-apikeys-xsgd7                                             1/1       Running     0          1d
auth-idp-g7bms                                                 4/4       Running     0          1d
auth-pap-knwx2                                                 2/2       Running     0          1d
auth-pdp-9vqhw                                                 2/2       Running     0          1d
	
Command to describe:
	kubectl describe pod auth-idp-g7bms -n kube-system
	
Container names obtained from the describe output:
	icp-audit-service  
	platform-auth-service
	platform-identity-provider
	platform-identity-manager
	

Command to list the README.md file:

kubectl exec -it auth-idp-<????> -c icp-audit-service -n kube-system -- cat README.md
	
Example output:

# audit-sidecar-service
Sidecar to be used by ICP micro services for enabling auditing for their respective containers
```

The container image __icp-audit-service__ is used to enable auditing.

> Confirm ICP03 complete

----
----

#### Task ICP04

What container images are being deployed in the pods that start with __auth__?

```
Commands to list pods:
	kubectl get pods -n kube-system | grep auth
	
Example output:

auth-apikeys-xsgd7            1/1       Running     0          1d
auth-idp-g7bms                4/4       Running     0          1d
auth-pap-knwx2                2/2       Running     0          1d
auth-pdp-9vqhw                2/2       Running     0          1d
```

Pod auth-apikeys-xxxxx

```	
Command to describe the pod:	
	kubectl describe pod auth-apikeys-<?????> -n kube-system
	
Information from the describe output:

	auth-apikeys               : ibmcom/iam-token-service:3.1.1
```

Pod auth-idp-xxxxx

```	
Command to describe the pod:	
	kubectl describe pod auth-idp-<?????> -n kube-system
	
Information from the describe output:

	icp-audit-service          : ibmcom/icp-audit-service:3.1.1
	platform-auth-service      : ibmcom/icp-platform-auth:3.1.1
	platform-identity-provider : ibmcom/icp-identity-provider:3.1.1
	platform-identity-manager  : ibmcom/icp-identity-manager:3.1.1
```


Pod pod auth-pap-xxxxx

```	
Command to describe the pod:	
	kubectl describe pod auth-pap-<?????> -n kube-system
	
Information from the describe output:

	icp-audit-service          : ibmcom/icp-audit-service:3.1.1
	auth-pap                   : ibmcom/iam-policy-administration:3.1.1
```


Pod auth-pdp-xxxxx

```	
Command to describe the pod:	
	kubectl describe pod auth-apikeys-<?????> -n kube-system
	
Information from the describe output:

	icp-audit-service          : ibmcom/icp-audit-service:3.1.1
	auth-pdp.                  : ibmcom/iam-policy-decision:3.1.1
```

Notice the pods that have deploy the icp-audit-service container image.


> Confirm ICP04 complete

----
----
