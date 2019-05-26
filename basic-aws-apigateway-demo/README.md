# How to deploy

## push swagger.yaml to s3 bucket

```
aws s3 cp swagger.yaml s3://my-deploy-bucket/
```

## sam pakcage

```
sam package --template-file template.yaml --output-template-file output.yaml --s3-bucket my-deploy-bucket
```

## sam deploy

```
sam deploy --template-file output.yaml --stack-name BasicCustomAuthorizer --capabilities CAPABILITY_IAM
```
