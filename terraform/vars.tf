variable "domain_name" {
  type        = string
  description = "The domain name for the website."
}

variable "bucket_name" {
  type        = string
  description = "The name of the bucket without the www. prefix. Normally domain_name."
}

variable "common_tags" {
  description = "Common tags you want applied to all components."
}

variable "lets_encrypt_string" {
  type        = string
  description = "lets encrypt certificate challenge string"
}

variable "lets_encrypt_string_www" {
  type        = string
  description = "lets encrypt certificate challenge string"
}