variable "resource_group" {
  type        = string
  description = "The resource group"
}

variable "application_name" {
  type        = string
  description = "The name of your application"
}

variable "environment" {
  type        = string
  description = "The environment (dev, test, prod...)"
  default     = "dev"
}

variable "location" {
  type        = string
  description = "The Azure region where all resources in this example should be created"
}

variable "vnet_id" {
  type        = string
  description = "Virtual Network ID where Azure Spring Cloud will be deployed" 
}

variable "subnet_apps" {
  type        = string
  description = "Azure Spring Cloud apps subnet ID"
}

variable "subnet_services" {
  type        = string
  description = "Azure Spring Cloud services subnet ID"
}

variable "cidr_ranges" {
  type        = string
  description = "A list of (at least 3) CIDR ranges (at least /16) which are used to host the Spring Cloud infrastructure, which must not overlap with any existing CIDR ranges in the Subnet. Changing this forces a new resource to be created"
}
