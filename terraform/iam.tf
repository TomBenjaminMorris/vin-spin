resource "aws_iam_role" "github_actions_role" {
  name = "github-actions-role-vinspin"
  assume_role_policy = jsonencode(
    {
      Statement = [
        {
          Action = "sts:AssumeRoleWithWebIdentity"
          Condition = {
            StringEquals = {
              "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
            },
            StringLike = {
              "token.actions.githubusercontent.com:sub" = "repo:TomBenjaminMorris/vin-spin:*"
            }
          }
          Effect = "Allow"
          Principal = {
            Federated = "arn:aws:iam::905016994436:oidc-provider/token.actions.githubusercontent.com"
          }
        },
      ]
      Version = "2012-10-17"
    }
  )
  force_detach_policies = false
  managed_policy_arns = [
    "arn:aws:iam::aws:policy/AmazonS3FullAccess",
    "arn:aws:iam::aws:policy/CloudFrontFullAccess",
    "arn:aws:iam::aws:policy/AmazonRoute53FullAccess",
    "arn:aws:iam::aws:policy/IAMFullAccess",
    "arn:aws:iam::aws:policy/AWSCertificateManagerFullAccess",
  ]
  max_session_duration = 3600
  path                 = "/"
}
