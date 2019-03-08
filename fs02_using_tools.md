:course_title: FS02 - Using the tools

:course_desc: During this course the student will be required to use the cloudctl and kubectl CLIs.  <br><br>Tasks will describe a challenge.  The student must execute the appropriate command(s) to obtain the needed information.  <br><br>Once complete, review the Step-by-Step instructions and be sure to press the button to mark the task complete.  <br><br>If at any time you are needing assistance press the __Hint__ button.  If you are still needing assistance use the __Step-by-Step__ button to get detailed instructions for the task. <br><br>Press the 'Begin course' button to start the course.




:course_max: 12

:button1_label: Task

:button2_label: Hint

:button2_delay: 0

:button3_label: Step-by-Step

:button3_delay: 0

:button3_color: #f00

:infotab: <br><a href="https://github.com/IBM-ICP-CoC/fs-course/blob/master/usefulFiles/Presentation.pptx"  target="_blank">Presentation - Powerpoint document </a>

:infotab: <br><a href="https://github.com/IBM-ICP-CoC/fs-course/blob/master/usefulFiles/fs02_using_tools.pdf"  target="_blank">Course PDF</a>

:infotab: <hr>

:infotab: <br><br>Example debug flow:<img class="mx-auto d-block" src="../courseimages/debug-flow.png" height="450" width="1000">

:infotab: <br>cmd - command to run

:infotab: <br>container -container name (required if more than one container)

:infotab: <br>object - pods, service, statefulsets, deployment, etc.

:infotab: <br>pod - pod name

:infotab: <br>unit - unit running, e.g. kubelet, docker, etc.

----
----

#### Task Introduction

### Getting comfortable with kubectl and docker

During this course the student will be required to use the CLI tools cloudctl and kubectl.  

Tasks will describe a challenge.  The student must execute the appropriate command(s) to obtain the needed information.  Be sure to review the Step-by-Step instructions and press the button to mark the task complete. 

If at any time you are needing assistance press the __Hint__ button.  If you are still needing assistance use the __Step-by-Step__ button to get detailed instructions for the task.


* The instructor will provide the IP address of target IBM Cloud Environment (ICP) environment along with the credentials to authenticate.  

* Using the cloudctl CLI authenticate to the ICP environment with the instructor provided credentials:

	__cloudctl login -a https://&#60;IP Address&#62;:8443 -u admin -n &#60;team&#62; --skip-ssl-validation__
	
	&#60;IP Address&#62;  - replace with instructor provided information  
	&#60;team&#62;        - replace with team name


#### Hint Introduction

No hint necessary for the introduction.

----

#### Step-by-Step Introduction

No step-by-step necessary for the introduction.  Once done reading the introduction select another task to begin.

---- 
#### Task T01
What are the node names in the cluster?  Use both the kubectl and cloudctl CLIs to get this informaiton.


#### Hint T01

kubectl get nodes -o wide    (use the -o wide parameter to get more information)

cloudctl cm nodes

----

#### Step-by-Step T01

kubectl example:

```
Command:
	kubectl get nodes -o wide  (OR)  kubectl get nodes
	
Example output:
	
NAME           STATUS    ROLES         AGE       VERSION       INTERNAL-IP    EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION      CONTAINER-RUNTIME
10.135.8.195   Ready     worker        20h       v1.11.5+icp   10.135.8.195   <none>        Ubuntu 16.04.5 LTS   4.4.0-135-generic   docker://18.3.1
10.135.8.213   Ready     worker        20h       v1.11.5+icp   10.135.8.213   <none>        Ubuntu 16.04.5 LTS   4.4.0-135-generic   docker://18.3.1
10.135.8.214   Ready     worker        20h       v1.11.5+icp   10.135.8.214   <none>        Ubuntu 16.04.5 LTS   4.4.0-135-generic   docker://18.3.1
10.135.8.232   Ready     etcd,master   20h       v1.11.5+icp   10.135.8.232   <none>        Ubuntu 16.04.5 LTS   4.4.0-140-generic   docker://18.3.1
10.135.8.233   Ready     management    20h       v1.11.5+icp   10.135.8.233   <none>        Ubuntu 16.04.5 LTS   4.4.0-135-generic   docker://18.3.1
10.135.8.244   Ready     proxy         20h       v1.11.5+icp   10.135.8.244   <none>        Ubuntu 16.04.5 LTS   4.4.0-135-generic   docker://18.3.1
10.135.8.248   Ready     worker        20h       v1.11.5+icp   10.135.8.248   <none>        Ubuntu 16.04.5 LTS   4.4.0-135-generic   docker://18.3.1
```

cloudctl example:

```
Command:
	cloudctl cm nodes
	
Example output:

ID             Type     Private IP     Public IP   Machine Type   State      K8s Status   
faststart-m1   master   10.135.8.232   -           -              deployed   Ready   
faststart-p1   proxy    10.135.8.244   -           -              deployed   Ready   
faststart-w1   worker   10.135.8.195   -           -              deployed   Ready   
faststart-w2   worker   10.135.8.213   -           -              deployed   Ready   
faststart-w3   worker   10.135.8.214   -           -              deployed   Ready   
faststart-w4   worker   10.135.8.248   -           -              deployed   Ready   
```

> Confirm T01 complete

----
#### Task T02
What is the Allocatable CPU count for the master node?  


#### Hint T02

Describe the master node using the name from previous results.

----

#### Step-by-Step T02


```
Command:
	kubectl describe node <master node name>    
	
View output section Allocatable, and find cpu. Example:
	
. . .
Allocatable:
	cpu:                16
 	...
 	pods:               160
	...
```	

> Confirm T02 complete

----
#### Task T03
Display the top CPU and Memory for all nodes and display the top pods

#### Hint T03
kubectl top <???>

#### Step-by-Step T03	
```
Command:
	kubectl top nodes
	
Example output:
	
NAME             CPU(cores)   CPU%      MEMORY(bytes)   MEMORY%
10.186.56.74     812m         5%        12278Mi         38%
10.186.56.76     839m         10%       10765Mi         67%
10.186.56.85     109m         0%        2453Mi          7%
10.187.230.157   108m         0%        2608Mi          8%
```

> Confirm T03 complete

----
#### Task T04
Display the status of the cluster components.  

#### Hint T04
Command contains the componentstatuses as a parameter.

---- 

#### Step-by-Step T04	
```
Command:
	kubectl get componentstatuses
	
Example output:
	
NAME                 STATUS    MESSAGE              ERROR
controller-manager   Healthy   ok
scheduler            Healthy   ok
etcd-0               Healthy   {"health": "true"}
```	

> Confirm T04 complete

----
#### Task T05
What taints are defined for management and worker nodes?

#### Hint T05
Use node names from kubectl get nodes results.

----

#### Step-by-Step T05	
```
Command:
	kubectl describe node <name of management node>
	kubectl describe node <name of worker node>
	
Example output:
	
Mgmt   - 	Taints:             dedicated=infra:NoSchedule
Worker - 	Taints:             <none>
```

> Confirm T05 complete

----
#### Task T06
How many pods in the kube-system namespace begin with auth?

#### Hint T06
Think at the pod level

----

#### Step-by-Step T06	
```
Command:
	kubectl get pods -n kube-system   (consider using grep to reduce the volume of output)

Example output:
	
auth-apikeys-h2lzz                                    1/1       Running     0          8d
auth-idp-5ghjh                                        4/4       Running     0          8d
auth-pap-72xhq                                        2/2       Running     0          8d
auth-pdp-9pjzd                                        2/2       Running     0          8d
```

> Confirm T06 complete

----
#### Task T07
Set the default namespace to kube-system using the kubectl config set-context capability.

#### Hint T07
Be sure to include:  faststart-context --namespace=kube-system

----

#### Step-by-Step T07	
```
Command:
	kubectl config set-context faststart-context --namespace=kube-system
	
Example output:
	
Context "faststart-context" modified.
```

> Confirm T07 complete

----
#### Task T08
What are the container names in the pod that begins with auth-pap?  

#### Hint T08
Full pod name will be similar to:  auth-pap-72xhq

----

#### Step-by-Step T08	
```
Command:
	kubectl describe pod auth-pap-72xhq  (or) 
	kubectl get pod -l component=auth-pap -o=jsonpath='{.items[*].spec.containers[*].name}'
	
Example output:
	
- describe output: search for section Containers: and then view each container name:

Containers:
  icp-audit-service:
	. . . 
  auth-pdp	
	  
- get pod output:  (each container name is listed with a space seperator)

icp-audit-service auth-pap
```

> Confirm T08 complete

----
#### Task T09

What is the first message in the container log for pod that begins with unified-router?  The pod is in the kube-system namespace.  The full pod name will be similar to:  unified-router-k768f

#### Hint T09
kubectl logs <pod>

----

#### Step-by-Step T09	
```
Command:
	kubectl get pods -n kube-system

Example output:

NAME                                                           READY     STATUS      RESTARTS   AGE
audit-logging-fluentd-ds-7v5br                                 1/1       Running     0          20h
 
                . . . data truncated . . .
 
tiller-deploy-5d8494fb8-sjmbn                                  1/1       Running     0          21h
unified-router-4ltff                                           1/1       Running     0          20h
web-terminal-f77dc4d7d-stzgj                                   1/1       Running     0          20h
 

Command:
	kubectl logs unified-router-?????      <=== use the pod name from the previous output
	
Example output:
	
2018/12/21 00:00:39 Using HTTP port: 9090
```
----

> Confirm T09 complete

#### Task T10

Exec into pod mariadb-0 and using the command: ls -la /sys  list the contents for the directory.  To lose the prompt enter the exit command.

#### Hint T10
Don't forget the -it parameter.
Don't forget the command follows double dashes e.g. -- /bin/bash
Try the sh or /bin/bash for the entrypoint of the pod

----

#### Step-by-Step T10	
```
Command:
	kubectl exec -it mariadb-0 -- sh   (or)  kubectl exec -it mariadb-0 -- /bin/bash
	
Example output: 
	
dr-xr-xr-x  13 root root    0 Dec 29 18:22 .
drwxr-xr-x   1 root root 4096 Dec 20 23:50 ..
drwxr-xr-x   2 root root    0 Dec 29 18:25 block
. . .
drwxr-xr-x   2 root root    0 Dec 29 18:25 power
```
----

> Confirm T10 complete

#### Task T11
Without using an interactive shell prompt, list the /etc/hosts file of the mariadb-0 pod.   

#### Hint T11
'cat' the /etc/hosts file.

----

#### Step-by-Step T11	
```
Command:
	kubectl exec mariadb-0 -- sh -c 'cat /etc/hosts'
	
Example output:
	
	# Kubernetes-managed hosts file (host network).
	10.186.56.85     faststart-worker-1
	10.187.230.157   faststart-worker-2
	10.186.56.74     faststart-master-1
	10.186.56.74     faststart-master-1
	10.186.56.76     faststart-mgmt-1
	127.0.0.1 localhost
	. . .
```

> Confirm T11 complete

----
#### Task T12
12 - How many builtin services are running in the cluster.  

#### Hint T12
This is cluster information.

----

#### Step-by-Step T12	
```
Command:
	kubectl cluster-info
	
Answer: count the items shown in the output
	
Example output:
	
Kubernetes master is running at https://169.62.194.213:8001
catalog-ui is running at https://169.62.194.213:8001/api/v1/namespaces/kube-system/services/catalog-ui:catalog-ui/proxy
Heapster is running at https://169.62.194.213:8001/api/v1/namespaces/kube-system/services/heapster/proxy
image-manager is running at https://169.62.194.213:8001/api/v1/namespaces/kube-system/services/image-manager:image-manager/proxy
CoreDNS is running at https://169.62.194.213:8001/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
metrics-server is running at https://169.62.194.213:8001/api/v1/namespaces/kube-system/services/https:metrics-server:/proxy
platform-ui is running at https://169.62.194.213:8001/api/v1/namespaces/kube-system/services/platform-ui:platform-ui/proxy
```


> Confirm T12 complete

----
----
