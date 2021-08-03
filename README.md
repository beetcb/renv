# RENV

A remote dotenv service built with [deno deploy](https://deno.com/deploy)

# Deploy

Deploy by URL: `https://github.com/beetcb/renv/raw/main/index.ts`

# Usage

1. Set auth password

   Project -> Settings -> Environment Variables, add `ENV_PASS` env
2. Set environment variables

   Set the environment variables as in step 1, The key of your environment variable must use a solid syntax like this:
   `ENVNAMESPACE_ENVNAME`

   - ENVNAMESPACE: By defining `ENVNAMESPACE`, `renv` can create multiple environments
     depending on the needs, just like multiple dotenv files stored in the cloud

   - ENVNAME: The name of the environment variable

3. Get your environment variables

   Send a GET request to
   `https://deployname.deno.dev/{envnamespace}?pass={ENV_PASS}`, `renv` will
   return a text/plain response with a standard `.env` file format string

# Example 

My Environment Variables settings on `deno deploy`:

![deno deploy](https://i.imgur.com/C0mUfZe.png)

How to get `oabot` dotenv? 

```bash
GET https://renv.deno.dev/oabot?pass=a-normal-password
```

Response: 
```bash
UNIDOC_LICENSE_API_KEY=RANDOMSTRING
SIGN=RANDOMSTRING
APP_KEY=RANDOMSTRING
WORKSHEET_ID=RANDOMSTRING
```
