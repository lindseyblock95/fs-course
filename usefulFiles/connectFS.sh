ICPHOST=https://169.62.194.213
ICPUSER=admin
ICPPASSWORD=admin
ICPCLUSTER=faststart
ICPNAMESPACE=kube-system

clustervar=''
uservar=''
namespace=''
passvar=''

read -p 'ICP Host: ' hostvar
read -p 'ICP Cluster: (faststart) ' clustervar 
read -p 'Username: (admin) ' uservar
read -p 'Namespace: (kube-system) ' namespace
read -sp 'Password: (********) ' passvar

if [ -z "$hostvar" ]
then
      echo "Using default host: " $ICPHOST
else
      ICPHOST=$hostvar
fi

if [ -z "$clustervar" ]
then
      echo "Using default cluster: " $ICPCLUSTER
else
      ICPCLUSTER=$clustervar
fi

if [ -z "$namespace" ]
then
      echo "Using default namespace: " $ICPNAMESPACE
else
      ICPNAMESPACE=$namespace
fi

if [ -z "$uservar" ]
then
      echo "Using default user: " $ICPUSER
else
      ICPUSER=$uservar
fi

if [ -z "$passvar" ]
then
      echo "Using default password"
else
      ICPPASSWORD=$passvar
fi

echo ---
echo Retrieving security token for user $uservar at $ICPHOST

## grab id token 
TOKEN=$(curl -s -X POST $ICPHOST:8443/idprovider/v1/auth/identitytoken -H "Content-Type: application/x-www-form-urlencoded;charset=UTF-8" -d "grant_type=password&username=$ICPUSER&password=$ICPPASSWORD&scope=openid%20email%20profile" --insecure | jq --raw-output .id_token) 
## echo "token: $TOKEN"

## execute kubectl commands to connect to ICP environment
kubectl config set-cluster $ICPCLUSTER --server=$ICPHOST:8001 --insecure-skip-tls-verify=true
kubectl config set-context $ICPCLUSTER-context --cluster=$ICPCLUSTER
kubectl config set-credentials $ICPUSER --token=$TOKEN
kubectl config set-context $ICPCLUSTER-context --user=$ICPUSER --namespace=$ICPNAMESPACE
kubectl config use-context $ICPCLUSTER-context

echo "Try kubectl get pods"



