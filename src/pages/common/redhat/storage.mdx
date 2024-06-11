---
title: Storage
description: OpenShfit Storage
---

import { Link } from "gatsby";
import FileLink from '../../../components/FileLink';

## Introduction

Managing storage is a distinct problem from managing compute instances. The PersistentVolume subsystem provides an API for users and administrators that abstracts details of how storage is provided from how it is consumed. To do this, we introduce two new API resources: PersistentVolume and PersistentVolumeClaim.

A `PersistentVolume` (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource. PVs are volume plugins like Volumes, but have a lifecycle independent of any individual Pod that uses the PV. This API object captures the details of the implementation of the storage, be that NFS, iSCSI, or a cloud-provider-specific storage system.

A `PersistentVolumeClaim` (PVC) is a request for storage by a user. It is similar to a Pod. Pods consume node resources and PVCs consume PV resources. Pods can request specific levels of resources (CPU and Memory). Claims can request specific size and access modes (e.g., they can be mounted ReadWriteOnce, ReadOnlyMany or ReadWriteMany, see AccessModes).

While PersistentVolumeClaims allow a user to consume abstract storage resources, it is common that users need PersistentVolumes with varying properties, such as performance, for different problems. Cluster administrators need to be able to offer a variety of PersistentVolumes that differ in more ways than size and access modes, without exposing users to the details of how those volumes are implemented. For these needs, there is the StorageClass resource.

### Storage Classes

A StorageClass provides a way for administrators to describe the "classes" of storage they offer. Different classes might map to quality-of-service levels, or to backup policies, or to arbitrary policies determined by the cluster administrators.
Each StorageClass contains the fields `provisioner`, `parameters`, and `reclaimPolicy`, which are used when a PersistentVolume belonging to the class needs to be dynamically provisioned.

### Access Modes

A PersistentVolume can be mounted on a host in any way supported by the resource provider. As shown in the table below, providers will have different capabilities and each PV's access modes are set to the specific modes supported by that particular volume. For example, NFS can support multiple read/write clients, but a specific NFS PV might be exported on the server as read-only. Each PV gets its own set of access modes describing that specific PV's capabilities.

The access modes are:

- **ReadWriteOnce**

  the volume can be mounted as read-write by a single node. ReadWriteOnce access mode still can allow multiple pods to access the volume when the pods are running on the same node.

- **ReadOnlyMany**

  the volume can be mounted as read-only by many nodes.

- **ReadWriteMany**

  the volume can be mounted as read-write by many nodes.

- **ReadWriteOncePod**

  the volume can be mounted as read-write by a single Pod. Use ReadWriteOncePod access mode if you want to ensure that only one pod across whole cluster can read that PVC or write to it. This is only supported for CSI volumes and Kubernetes version 1.22+.

### Storage for IBM CloudPaks

Different IBM Cloud Paks have different storage needs. No matter which environment you plan on installing your IBM Cloud Pak to, after you install Red Hat OpenShift Container Platform, you must configure your storage.

For a high-level overview of what storage options are supported for a particular Cloud Provider, per Cloud Pak, please visit the <Link to="https://www.ibm.com/docs/en/cloud-paks/1.0?topic=clusters-configuring-storage" target='_blank' rel='noreferrer noopener'>Configuring Storage</Link> section in the Cross Cloud Pak Documentation.

For more in-depth information on what storage systems are supported for a particular Cloud Pak, see <Link to="https://www.ibm.com/docs/en/cloud-paks/1.0?topic=planning-storage-considerations" target='_blank' rel='noreferrer noopener'>CloudPak Storage Considerations</Link>.

### ODF Supportability and Interoperability Checker

To determine which features of OpenShift Data Foundation can be deployed on your cloud provider, visit the <Link to="https://access.redhat.com/labs/odfsi/" target='_blank' rel='noreferrer noopener'>ODF Supportability and Interoperability Checker</Link>

### ODF Sizing Tool

The default ODF sizing requires 3 worker nodes, with 16 CPU and 64Gb of memory and 2TB of storage per node. To ensure your infrastrucure provides addequate resources for your required storage capacity, visit the <Link to="https://access.redhat.com/labs/ocsst/" target='_blank' rel='noreferrer noopener'>ODF Sizing Tool</Link>.

In the Capacity Planning tab, provide your platform details. The results tab will display the number of nodes and how many disks each nodes need to meet your targets.

<InlineNotification kind="warning">

**Warning:** If your storage capacity requirements change after initial deployment, make sure you resize your storage cluster accordingly.

</InlineNotification>
