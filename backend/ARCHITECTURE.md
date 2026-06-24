# Architecture

## Context

This is a portfolio backend built to demonstrate practical experience with Java 21, Spring Boot 3, PostgreSQL, Spring Data JPA, and Liquibase.

The codebase is optimized for:

* Simplicity
* Readability
* Maintainability
* Fast feature delivery

## Decision

The application uses a Modular Monolith organized with Vertical Slice Architecture.

Each feature owns its own implementation details:

* Controller
* DTOs
* Services
* Repository
* Persistence models
* Tests

Frameworks are used directly where they add value. A full Clean Architecture boundary is not used.

## Chosen Stack

* Java 21
* Spring Boot 3
* PostgreSQL
* Spring Data JPA
* Liquibase

Liquibase is used for migration versioning, while the migration content is written primarily in SQL files.

This approach keeps SQL as the source of truth and still allows explicit rollback/down scripts when needed.

Example:

```yaml
databaseChangeLog:
  - changeSet:
      id: 001
      author: vini
      changes:
        - sqlFile:
            path: migrations/001_create_users.sql
      rollback:
        - sqlFile:
            path: migrations/001_drop_users.sql
```

## Project Structure

```text
src/main/java/com/example/app
├── customer/
├── product/
├── order/
└── shared/
```

The code is organized by feature, not by technical layer. Shared code should stay small and only exist when duplication becomes a real problem.

### Test Organization

Tests follow the same feature-oriented structure as production code.

Example:
```text
customer/
└──  CreateCustomerService.java

customer/
└──  CreateCustomerServiceTest.java
```
The goal is to keep implementation and validation close together,
making features easier to understand and maintain.
## Consequences

This approach gives:

* Less boilerplate
* Easier navigation
* Better feature cohesion
* Faster development
* Clearer use of the chosen stack

The trade-off is stronger coupling to Spring Boot and JPA, which is acceptable for this project.
