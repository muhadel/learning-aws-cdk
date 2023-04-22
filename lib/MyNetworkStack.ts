import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export class MyNetworkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create the VPC
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      cidr: '10.0.0.0/16',
      maxAzs: 2,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'private',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        },
      ],
    });

    // // Create the internet gateway
    // const igw = new ec2.CfnInternetGateway(this, 'MyInternetGateway');

    // // Attach the internet gateway to the VPC
    // const vpcAttachment = new ec2.CfnVPCGatewayAttachment(this, 'MyVpcAttachment', {
    //   vpcId: vpc.vpcId,
    //   internetGatewayId: igw.ref,
    // });

    // // Create the route table
    // const routeTable = new ec2.CfnRouteTable(this, 'MyRouteTable', {
    //   vpcId: vpc.vpcId,
    // });

    // // Create a route for internet traffic
    // const internetRoute = new ec2.CfnRoute(this, 'MyInternetRoute', {
    //   routeTableId: routeTable.ref,
    //   destinationCidrBlock: '0.0.0.0/0',
    //   gatewayId: igw.ref,
    // });

    // // Associate the route table with the public subnet
    // const publicSubnet = vpc.publicSubnets[0];
    // const publicSubnetAssociation = new ec2.CfnSubnetRouteTableAssociation(this, 'MyPublicSubnetAssociation', {
    //   routeTableId: routeTable.ref,
    //   subnetId: publicSubnet.subnetId,
    // });

    // // Associate the route table with the private subnet
    // const privateSubnet = vpc.privateSubnets[0];
    // const privateSubnetAssociation = new ec2.CfnSubnetRouteTableAssociation(this, 'MyPrivateSubnetAssociation', {
    //   routeTableId: routeTable.ref,
    //   subnetId: privateSubnet.subnetId,
    // });

    // Output the IDs of the resources we created
    new cdk.CfnOutput(this, 'VpcId', { value: vpc.vpcId });
    // new cdk.CfnOutput(this, 'PublicSubnetId', { value: publicSubnet.subnetId });
    // new cdk.CfnOutput(this, 'PrivateSubnetId', { value: privateSubnet.subnetId });
    // new cdk.CfnOutput(this, 'RouteTableId', { value: routeTable.ref });
    // new cdk.CfnOutput(this, 'InternetGatewayId', { value: igw.ref });
  }
}
