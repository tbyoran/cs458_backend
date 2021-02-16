# Endpoints

This documentation provides detailed information about the endpoints of the backend. To try the requests below use the [Postman](#) collections. Check this document regularly for the updates.

## Endpoints, Methods and Authentication Types
Method | Endpoint | Auth Type
-- | -- | --
`POST` | [/auth/signin](#authsignin) | Unauthenticated
`POST` | [/auth/signup](#authsignup) | Unauthenticated
`POST` | [/auth/forgot](#authforgot) | Unauthenticated
||
`GET`, `POST` | [/user/me](#userme) | `user`

---

## Error Codes and Reasons
Code | Message | Reason
-- | -- | --
400 | Arguments are missing | Be ensure that query and body params are complete.
400 | Invalid arguments | Be ensure that query and body params are valid.
400 | Duplicated arguments | Be ensure that query and body params are unique.
400 | Entity does not exist | Be ensure that given parameters are correct.
401 | Unauthorized action | Either authentication token is not specified in the request header or you are not authorized for the request.
401 | Invalid token | Your token is not valid.
500 | Unknown error | Something goes wrong. Contact with the developer.

---

## /auth/signin
### `POST`:
##### Body Params:
Name | | Type | Information
-- | -- | -- | --
email | _(Required)_ | String | 
password | _(Required)_ | String | 
##### Response:
Name | Type | Information
-- | -- | --
token | String |

## /auth/signup
### `POST`:
##### Body Params:
Name | | Type | Information
-- | -- | -- | --
email | _(Required)_ | String | 
password | _(Required)_ | String | 
##### Response:
Name | Type | Information
-- | -- | --
||

## /auth/forgot
### `POST`:
##### Body Params:
Name | | Type | Information
-- | -- | -- | --
email | _(Required)_ | String | 
##### Response:
Name | Type | Information
-- | -- | --
||

---

## /user/me
### `GET`:
##### Response:
Name | Type | Information
-- | -- | --
email | String |
phoneNumber | String |
accountPlan | Integer | 