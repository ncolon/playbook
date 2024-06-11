---
title: Red Hat OpenShift Support
description: Technical content on Red Hat OpenShift
---

import { Link } from "gatsby";
import FileLink from "../../../components/FileLink";

<AnchorLinks small>
  <AnchorLink>OpenShift Life Cycle Policy</AnchorLink>
  <AnchorLink>
    Accessing and Escalating Tickets in Red Hat’s Ticketing System
  </AnchorLink>
  <AnchorLink>
    Red Hat Cases
  </AnchorLink>
  <AnchorLink to="/csm-playbook/playbook/common/support/request-support-extension#request-for-extended-support-for-red-hat-openshift-r4.6-and-r4.8">
    OpenShift 4.6 and 4.8 Extended Support
  </AnchorLink>
</AnchorLinks>

## OpenShift Life Cycle Policy

Red Hat provides a published product lifecycle for Red Hat OpenShift Container Platform (“OpenShift” or “OCP”), for customers and partners to effectively plan, deploy, and support their infrastructure. Red Hat publishes this lifecycle to provide as much transparency as possible and may make exceptions from these policies as conflicts arise.

All released errata will remain accessible to active subscribers across the entire lifecycle.

With the introduction of OpenShift 4, Red Hat transitioned the product lifecycle from a traditional, time-delineated lifecycle in favor of a release-driven, phased lifecycle. Lifecycles are distinct by OpenShift major version.

<InlineNotification>
  For specific life cycle dates for each version of OpenShift please visit
  <br />
  <Link
    to="https://access.redhat.com/support/policy/updates/openshift#ocp4_phases"
    target='_blank' rel='noreferrer noopener'
  >
    Red Hat OpenShift Container Platform Life Cycle Policy
  </Link>
  .
</InlineNotification>

### OpenShift Life Cycle Phases

#### Full Support

Full Support begins at GA/release of the minor version and ends after 6 months of release, or 90 days after GA of the next minor release, whichever is later.

During the Full Support phase, Red Hat **will** release qualified [Critical and Important Security Advisories] (RHSAs) (https://access.redhat.com/security/updates/classification) and Urgent and Selected High Priority Bug Fix Advisories (RHBAs) as they become available. To receive these bug fixes, customers must upgrade to the latest supported z-stream version (4.x.**z**).

#### Maintenance Support

Starting with OpenShift 4.12, the Maintenance Support phase starts at the end of the Full Support phase and ends 18 months after GA/release date.

During the Maintenance Support phase, Red Hat **will** release qualified RHSAs as they become available. RHBAs and Enhancement Advisories (RHEAs) **may be** released at Red Hat's discretion, but should not be expected.

#### Extended Update Support

<InlineNotification kind="warning">
  The Extended Update Support phase is available <strong>only</strong> for x86-64
  versions of OpenShift.
</InlineNotification>

Starting with OpenShift 4.8, Red Hat will denote all even numbered minor releases (eg. 4.8, 4.10, 4.12) as Extended Update Support (EUS) releases, starting at the end of the Maintenance Support phase, and extending for 6 additional months. During this phase, Red Hat provides backports of Critical and Important RHSAs and urgent-priority RHBAs for a predefined set of minor releases of OpenShift.

<br />

### OpenShift Life Cycle on Managed Offerings

The self-managed OpenShift life cycle phases do not always align with cloud providers' managed offerings. See below for more information on managed offering life cycles

- [ARO](https://learn.microsoft.com/en-us/azure/openshift/support-lifecycle#azure-red-hat-openshift-release-calendar)
- [ROSA](https://docs.openshift.com/rosa/rosa_architecture/rosa_policy_service_definition/rosa-life-cycle.html#sd-life-cycle-dates_rosa-life-cycle)
- [ROKS](https://cloud.ibm.com/docs/openshift?topic=openshift-openshift_versions#release_lifecycle)

<br />

### OpenShift Life Cycle and IBM CloudPak Life Cycle

IBM CloudPaks are officially supported on EUS releases only. It is highly recommended to limit CloudPak deployments to an even number of releases of OpenShift to maintain full-stack support.

#### CloudPak Life Cycle References

- https://www.ibm.com/support/pages/ibm-continuous-delivery-support-lifecycle-policy
- https://www.ibm.com/support/pages/lifecycle/#/
- https://www.ibm.com/support/pages/product-lifecycle-list

#### CP4I Life Cycle References

- https://www.ibm.com/support/pages/lifecycle/search/?q=cloud%20pak%20for%20integration
- https://www.ibm.com/support/pages/lifecycle/search/?q=cloud%20pak

#### CP4D Life Cycle References

- https://www.ibm.com/support/pages/node/6593147
- https://www.ibm.com/support/pages/node/6490909
- https://w3.ibm.com/w3publisher/cpd_om/cloud-pak-for-data/lifecycle
- https://w3.ibm.com/w3publisher/cpd/schedule
- https://www.ibm.com/support/pages/lifecycle/search/?q=Cloud%20Pak%20for%20Data

<br />

### Upgrade Planning

When upgrading minor releases, special considerations need to be taken to ensure proper operation and availability of CloudPak capabilities.

- Always check compatibility between the Cloud Pak you are running and the version of OpenShift you are planning to upgrade.
- In most cases, it is recommended to upgrade the Cloud Pak first (assuming it supports the old and the new OpenShift version) and then upgrade OpenShift.
- Work with your PaaS provider to coordinate the upgrade of OpenShift.

Please refer to the [OpenShift Upgrade Playbook](../upgrades) for additional information.

## Red Hat Cases

If your CloudPak case requires assistance from Red Hat, the IBM Support team will open a case with Red Hat directly.

Important updates from the Red Hat case will be added to the IBM Case by the IBM Support team <br/><br/>

### Access to the Red Hat Knowledge Base
A significant portion of the Red Hat technical hints and tips as guidance is reserved for Red Hat paid subscribers or Partners. Cloud Pak customers are considered Red Hat paid subscribers and as a result should have access to all the content in the <a href="https://access.redhat.com/search/#/" target='_blank' rel='noreferrer noopener'>Knowledge Base</a>. <br/>
IBMers can create a Red Hat ID and join the IBM Partner account to gain access to the Knowledge Base. Instructions are provided <a href="https://ibm.seismic.com/Link/Content/DCWfXWHpFXTRgGhWRDhTQpTbPDp8" target='_blank' rel='noreferrer noopener'>in Seismic</a> on how to do this.

### Access to the Red Hat Support Portal
The CSM Worldwide Practice Leaders have **access to the Red Hat support system** to be able to view the progress directly. This may be necessary if you are unable to get timely updates from the IBM Support team. Please reach out to your Practice Leaders (for <a href="https://w3.ibm.com/w3publisher/customersuccess/community-connections/automation-platform-community" target='_blank' rel='noreferrer noopener'>Automation</a>, <a href="https://w3.ibm.com/w3publisher/customersuccess/community-connections/data-and-ai-community" target='_blank' rel='noreferrer noopener'>Data & AI</a> or <a href="https://w3.ibm.com/w3publisher/customersuccess/community-connections/security-platform-community" target='_blank' rel='noreferrer noopener'>Security</a>) for help viewing information in the Red Hat case.<br/><br/>


## Accessing and Escalating Tickets in Red Hat's Ticketing System

IBM CSMs and our customers sometimes have challenges getting visibility into the progress of a support case opened in the Red Hat systems by the IBM Center of Competency (CoC).
You as a CSM will be able to reach out to your practice leaders (for <Link to="https://w3.ibm.com/w3publisher/customersuccess/community-connections/automation-platform-community" target='_blank' rel='noreferrer noopener'>Automation</Link>, <Link to="https://w3.ibm.com/w3publisher/customersuccess/community-connections/data-and-ai-community" target='_blank' rel='noreferrer noopener'>Data & AI</Link>, <Link to="https://w3.ibm.com/w3publisher/customersuccess/community-connections/security-platform-community" target='_blank' rel='noreferrer noopener'>Security</Link>, or <Link to="https://w3.ibm.com/w3publisher/customersuccess/community-connections/sustainability-software-community" target='_blank' rel='noreferrer noopener'>Sustainability</Link>) in urgent situations to get visibility and help escalating the cases. Community of practice leaders have access to the portal at this point.
You can find a detailed flow chart and process description for the escalation process for support cases in the <Link to="/common/support/support-case-escalate" target='_blank' rel='noreferrer noopener'>CSM Playbook</Link> in the "Support Process for IBM Cloud Paks" section.

Actions the community of practice leader can take with access to the Red Hat Portal system include:

#### 1. View the status of the case

If you have an urgent situation and you feel you are not getting timely updates, the community of practice leaders can check for the status of the case in the Red Hat Portal in a READ ONLY Mode to view the progress of urgent issues. You can then reach out to the IBM CoC if progress is not being made. When looking at these cases, the practice leaders will also be checking for business impact in the case in Red Hat Portal.

#### 2. Validate and clarify the business impact statement in the IBM Case

We could use your help to encourage documenting business impact when support cases are opened. Red Hat prioritizes its work on support cases based on severity level AND "business impact". Based on data analysis, we have found that sometimes the business impact in the cases logged against Red Hat does not correctly represent the customer situation and does impact the priority of the workload. When your customer needs help with Red Hat, please make sure your customers include business impact in support tickets. When you ask your community of practice leader to view the status of the case, they will be checking that the business impact is documented. Examples of business impact could be:

- "we have a production outage impacting business activities"
- "this client now has 6 support cases and will not sign a new ELA for $1.5M until they are resolved"
- "our client had committed to complete production roll out by July 15, and must have this support case solved by July 1st, otherwise they will incur additional expense"

#### 3. Escalate the case

In the event that you feel an escalation on the Red Hat side is required, please work with the IBM CoC case owner to request an escalation. The IBM case must be escalated before the Red Hat case is escalated. A Red Hat escalation creates an alert on the assigned support engineers' queue requesting attention. If you are unable to engage the IBM CoC case owner, the practice leader can request an escalation in the Red Hat support portal and must then update the IBM case to show that an escalation was requested.
Valid reasons for an Red Hat escalation following an IBM case escalation are:

- Support case is in "waiting for Red Hat" state with no updates for a very long period of time
- Request a webex/live meeting
- Dissatisfaction with the approach being taken to solving the issue
- Production outage that requires more immediate focus
  We hope that this will provide help to our CSM teams getting visibility into the progress of a support case opened in the Red Hat systems by the IBM Center of Competency (CoC) and how to escalate urgent situations.
  The overall process for obtaining support for Cloud Paks and OpenShift is further described in the playbook <Link to="https://pages.github.ibm.com/csm-playbook/playbook/support/access-ibm-support/#support-process-for-ibm-cloud-paks" target='_blank' rel='noreferrer noopener'>here</Link>.

Below is a video demonstrating the kind of actions you can take in the Red Hat portal

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0akic0gz6e8"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
