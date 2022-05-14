# EquiSwap Backend

## Database Setup
1. Create the database.
    ```sql
    CREATE USER equiswap WITH ENCRYPTED PASSWORD 'equiswap' NOCREATEDB
    CREATE DATABASE equiswap
    GRANT ALL PRIVILEGES ON DATABASE equiswap TO equiswap;
    ```
2. Apply migrations to the database:
    ```bash
   $ yarn db:migrate
    ```
