terraform {
  backend "s3" {
    bucket = "tbm-tf-state-bucket"
    key    = "vinsp.in"
    region = "eu-west-1"
  }
}

provider "aws" {
  region = "eu-west-1"
}

locals {
  domain_name       = "vinsp.in"
  root_domain_name  = "vinsp.in"
  allowed_locations = []
  common_tags = {
    Project = "vinsp.in"
  }
}

module "static-website" {
  source = "git@github.com:TomBenjaminMorris/tf-modules.git//static-website?ref=static-website-v0.0.3"

  domain_name       = local.domain_name
  root_domain_zone  = local.root_domain_name
  allowed_locations = local.allowed_locations
  common_tags       = local.common_tags
}