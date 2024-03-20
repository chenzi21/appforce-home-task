CREATE DATABASE workplace;

\connect workplace;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS departments (
    id              UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    name            VARCHAR(64) NOT NULL,
    description     VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS users (
    id              UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    first_name      VARCHAR(64) NOT NULL,
    last_name       VARCHAR(64) NOT NULL,
    email           VARCHAR(256) NOT NULL,
    image           VARCHAR(128),
    title           VARCHAR(64),
    department_id    UUID REFERENCES departments(id) ON DELETE CASCADE
);