# Learning AWS Cloud Development Kit (CDK) TypeScript project

This is a demo project for learning CDK development with TypeScript. There is only one stack to create a custom VPC within default AWS account/region.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk destroy`     remove the resources created in the default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template


## How to run
* `npm run build`   compile typescript to js
* `cdk bootstrap`      creates an S3 bucket that the AWS CDK will use to store assets and templates
* `cdk deploy --all`   deploy this stack to your default AWS account/region
* `cdk destroy --all`  remove the resources created in the default AWS account/region 