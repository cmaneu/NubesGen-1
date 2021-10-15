output "vnet_name" {
  value       = local.spring_cloud_service_name
  description = "Azure Spring Cloud service name"
}

output "vnet_id" {
  value       = azurerm_virtual_network.vnet.id
  description = "Application Virtual Network"
}

output "app_subnet_id" {
  value       = azurerm_subnet.app_subnet.id
  description = "Application Subnet"
}

output "service_subnet_id" {
  value       = azurerm_subnet.service_subnet.id
  description = "Azure Spring Cloud services subnet"
}
