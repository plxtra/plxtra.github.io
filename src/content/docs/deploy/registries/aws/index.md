---
title: Working with AWS registries
---

## Public

## Private
```
aws configure
```

```
aws ecr get-login-password --region ap-southeast-2 | docker login --username AWS --password-stdin ************.dkr.ecr.ap-southeast-2.amazonaws.com
```

where ************ is Registry Id

```
aws ecr describe-registry
```
