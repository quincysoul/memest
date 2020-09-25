# Deployment (Modified 9/25/2020 due to host Dockerfile requirements)

 1. Create openode.io new account, new instance
 2. Go to your local repo in cmd/terminal
 3. `npm install openode --g`
 4. `openode`
 5. Fill in user/password/server info.
 6. Create a Postgre SQL instance somewhere (ElephantSQL works)
 7. openode set-config MAX_BUILD_DURATION 400
 8.  [openode postgresql local reference](https://blog.openode.io/b/adding-a-local-postgresql-database-82)
 9. In docker
 10. For a **CLEAN SLATE** `openode erase-all; openode deploy`
 11. To add files and reload `openode sync-n-reload`
 12. To run db migration (initial setup):
 ```sh
 npm run dbreload
 ```
 13. To run db migration on openode:
 ```sh
 openode cmd www "npm run dbreload"
 ```
`

9/25/2020 - openode removed dockerfile and thus local Postgre support. Modified.

**DO NOT** use `openode deploy` once running.

Postgresql will be running and the deploy can corrupt data. Instead, use `openode stop; openode deploy` or `openode sync-n-reload` to safely change container.