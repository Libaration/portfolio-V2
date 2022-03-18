
locals {
  name     = "azure-portfolio"
  location = "eastus2"
}
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 2.65"
    }
  }
}
provider "azurerm" {
  features {}
}
resource "azurerm_resource_group" "rg" {
  name     = "resource-group-${local.name}-prod-${local.location}"
  location = local.location
}

resource "azurerm_static_site" "web" {
  name                = "web-${local.name}-prod-${local.location}"
  resource_group_name = azurerm_resource_group.rg.name
  location            = local.location
}
