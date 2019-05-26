# How to deploy

## zip our own python package

```
bash package.sh
```

## sam pakcage

```
sam package --template-file template.yaml --output-template-file output.yaml --s3-bucket my-deploy-bucket
```

## sam deploy

```
sam deploy --template-file output.yaml --stack-name BasicCustomAuthorizer --capabilities CAPABILITY_IAM
```
