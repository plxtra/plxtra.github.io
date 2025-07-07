---
title: AWS ECR Registries
---

## Public

If Docker is not authenticated with AWS, then the scripts will use the public AWS ECR registry.

## Private

To use the private AWS ECR registry, you will need to [install](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) the AWS CLI and configure it with credentials to log into AWS:

```
aws configure
```

Once logged in, the following command can be used to authenticate Docker to your Amazon ECR private registry:

```
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
```
where
* \<aws_account_id> is your AWS account Id
* \<region> is your AWS region

The following AWS CLI command can be used to confirm access to your AWS ECR private registry
```
aws ecr describe-registry
```
