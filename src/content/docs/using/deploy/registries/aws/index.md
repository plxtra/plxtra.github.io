---
title: AWS ECR Registries
---

AWS has both public and private Docker registries.  However they are subject to limits and throttling.  The scripts attempt to improve the pull experience from AWS ECR repositories by authenticating Docker whenever possible and taking into account throttling.

## Private

It is necessary to log into AWS and authenticate Docker if you wish to pull from an AWS private ECR registry.

This requires that the AWS CLI is [installed](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and configured it with your credentials:

```
aws configure
```

You can then use the [deploy scripts](../../) to pull images from the private registry.  The scripts will automatically detect the AWS CLI installation and use it to authenticate Docker.

If you have any problems with accessing the AWS registry, you can manually authenticate docker with:

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

## Public

It is not necessary to log into AWS to use its public ECR registry.  However if a public ECR registry is accessed with an authenticated connection, the throttling is reduced and limits increased.  Accordingly, the [deploy scripts](../../) will still attempt to authenticate Docker if they detect that AWS CLI is installed and configured.
