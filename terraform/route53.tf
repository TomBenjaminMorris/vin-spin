resource "aws_route53_zone" "main" {
  name = var.domain_name
  tags = var.common_tags
}

resource "aws_route53_record" "root-a" {
  zone_id = aws_route53_zone.main.zone_id
  name = var.domain_name
  type = "A"

  alias {
    name = aws_cloudfront_distribution.root_s3_distribution.domain_name
    zone_id = aws_cloudfront_distribution.root_s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www-a" {
  zone_id = aws_route53_zone.main.zone_id
  name = "www.${var.domain_name}"
  type = "A"

  alias {
    name = aws_cloudfront_distribution.www_s3_distribution.domain_name
    zone_id = aws_cloudfront_distribution.www_s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "lets-encrypt-challenge" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "_acme-challenge"
  type    = "TXT"
  ttl     = "10"
  records = [var.lets_encrypt_string]
}

resource "aws_route53_record" "lets-encrypt-challenge-www" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "_acme-challenge.www"
  type    = "TXT"
  ttl     = "10"
  records = [var.lets_encrypt_string_www]
}

# resource "aws_route53_record" "nameservers" {
#   allow_overwrite = true
#   name            = var.domain_name
#   ttl             = 172800
#   type            = "NS"
#   zone_id = aws_route53_zone.main.zone_id

#   records = [
#     "ns-435.awsdns-54.com.",
#     "ns-851.awsdns-42.net.",
#     "ns-1942.awsdns-50.co.uk.",
#     "ns-1209.awsdns-23.org."
#   ]
# }