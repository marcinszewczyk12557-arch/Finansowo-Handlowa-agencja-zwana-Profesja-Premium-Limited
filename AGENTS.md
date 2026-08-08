# AGENTS.md — PROFESJA PREMIUM LIMITED™

This file defines mandatory project instructions for Vercel Agent and any other coding agent working in this repository.

## Project objective

Improve reliability, deployability, security, performance and maintainability of the existing PROFESJA PREMIUM LIMITED™ application without redesigning the business model or removing approved functionality.

Primary technical goal: keep the application production-ready on Next.js / React / TypeScript with Prisma + PostgreSQL and Vercel deployment.

## First priority for any agent

1. Diagnose failed Vercel deployments from real build logs.
2. Fix only verified root causes.
3. Run or validate the production build after changes.
4. Validate Prisma schema and migrations.
5. Preserve all existing public and OWNER workflows.
6. Prefer small, reversible, reviewable changes over broad rewrites.

Do not claim success unless the relevant build/test/deployment actually passes.

## Business rules that must NOT be changed without explicit OWNER instruction

- Brand name: `PROFESJA PREMIUM LIMITED™`.
- The application is primarily a B2B financial-trade agency platform.
- Existing catalog structure, B2B inquiry workflow, client dashboard and OWNER administration must be preserved.
- VELOX LOGISTICS is the logistics / dispatcher module for courier-postal and road transport in a door-to-door model.
- BIOVERA remains a module / online shop in construction until legal and regulatory requirements for any regulated products are explicitly satisfied.
- Do not enable sale of prescription medicines, controlled medicines or other regulated pharmaceutical products merely because a product record exists.

## Pricing and market benchmark rules

Pricing logic must preserve the business rule used by PROFESJA: customer-facing target prices should be approximately 72%–84% of a current comparable market price where that model is applicable.

When touching pricing code:

- do not silently reinterpret this as a +72% to +84% markup;
- preserve separation between supplier MOQ and PROFESJA volume-discount thresholds;
- keep supplier MOQ, variants, availability and market benchmark metadata distinct;
- do not expose confidential supplier cost, internal margin, source supplier or wholesale relationship on public pages;
- do not invent a market benchmark when reliable comparison data is unavailable.

Automated price refreshes must not force a price change where the benchmark has not changed materially.

## Formalities, consent and signatures — strict human-in-the-loop

The `TransactionFormalities` workflow is a mandatory control layer.

Automation may fill factual transaction data derived from the case, including product, quantity, market, value, financing facts, shipping method, addresses and dates.

Automation MUST NOT:

- create or fabricate a client signature;
- mark consent as accepted merely because negotiations progressed;
- accept declarations on behalf of a client;
- approve financing on behalf of a financing institution;
- infer legal consent from silence, order creation or payment;
- bulk-accept all formalities.

Consent and signature statuses must remain `PENDING` until a genuine, separately verified action occurs. Any OWNER-side status change should remain auditable and attributable to a concrete verification basis.

Preserve the source formalities document and its integrity record. Do not alter the original source document silently.

## Financial workflow constraints

The system may organize and record a financing workflow but must not autonomously make a credit, lending or financing decision that belongs to an authorized financial institution.

Avoid wording that guarantees approval, guaranteed financing, 100% acceptance or guaranteed financial outcome unless the application has verified legal and factual authority for such a claim.

## VELOX LOGISTICS rules

Preserve the distinction between organizer/dispatcher and the actual carrier.

The dispatcher workflow may include:

- transport request intake;
- pickup address and pickup time;
- delivery address and ETA;
- carrier assignment;
- courier / road transport status;
- tracking number and tracking link;
- transport document reference;
- operational status from intake through delivery.

Do not represent PROFESJA or VELOX as the physical carrier when an external carrier actually performs the transport.

Client-visible logistics data must exclude internal dispatcher notes, supplier/carrier confidential commercial terms and other internal-only information.

## BIOVERA rules

BIOVERA is currently a shop/module in construction.

Do not activate regulated pharmaceutical sales until all required legal, licensing, product-classification, distance-selling, storage, transport, information and jurisdiction-specific requirements have been explicitly confirmed and implemented.

For now, prefer non-transactional informational or construction-state behavior for regulated goods.

## Confidentiality and data exposure

Default confidentiality for sales automation is `STRICT`.

Do not publicly expose or export by default:

- supplier identities and sourcing relationships;
- purchase prices and internal margins;
- trade secrets;
- private personal data;
- internal notes;
- confidential employment or competitor information;
- OWNER credentials, salts, hashes, session secrets or cron secrets.

Never commit real secrets to the repository.

Environment secrets must remain in hosting/environment configuration.

## OWNER security

Preserve OWNER authentication protections, including secure session handling, httpOnly cookies, strict same-site behavior where applicable, rate limiting / login-attempt controls and authorization checks on OWNER APIs.

Never weaken an authorization check simply to make a build or test pass.

Public endpoints must return only fields intended for the client.

## Database and Prisma rules

When modifying `prisma/schema.prisma`:

- create a corresponding migration when required;
- preserve existing data compatibility where reasonably possible;
- avoid destructive migration shortcuts unless explicitly approved;
- ensure Prisma Client generation succeeds;
- ensure application queries match the deployed schema;
- keep migrations deterministic and reviewable.

Production database changes should be applied through the documented migration flow, not ad-hoc schema mutation.

## Vercel deployment rules

Target deployment is the main PROFESJA project connected to the `main` branch.

Before declaring deployment fixed, verify as applicable:

- install step succeeds;
- Prisma client generation succeeds;
- Next.js production build succeeds;
- required environment variables are present where runtime functionality depends on them;
- migrations are deployable;
- `/api/health` behaves correctly;
- public critical routes load;
- OWNER route authorization still works;
- no secret is printed into client bundles or logs.

If multiple Vercel projects are attached, do not change production-domain ownership or delete projects without explicit OWNER approval.

## Required validation after meaningful code changes

Prefer running the project's existing checks. At minimum, where available and relevant:

```bash
npm install
npx prisma generate
npm run build
```

Also validate migrations and production smoke tests when the change affects database, API, routing, authentication or deployment.

Do not bypass TypeScript errors with unsafe casts merely to obtain a green build unless the underlying type relationship is actually valid.

## Code quality rules

- Preserve the existing Next.js App Router architecture unless a migration is explicitly requested.
- Reuse existing APIs and data models where practical instead of creating parallel duplicate systems.
- Keep client/public and OWNER/internal concerns separated.
- Prefer explicit validation at API boundaries.
- Keep user-facing Polish text professional and clear.
- Avoid unnecessary visual animation or gratuitous 3D effects.
- Preserve existing brand identifiers and copyright / trademark wording unless explicitly instructed otherwise.

## Public claims and compliance

Do not introduce unsupported claims about guaranteed prices, guaranteed approvals, legal compliance, pharmaceutical authorization, transport licensing, certifications, warranties or delivery performance.

If a feature depends on an external authorization, contract, carrier integration, financial partner or regulated licence that is not present in the repository, leave the feature clearly conditional or in construction rather than inventing compliance.

## Scope for Vercel Agent code review

Vercel Agent is encouraged to:

- diagnose deployment failures;
- repair build and runtime errors;
- improve TypeScript correctness;
- improve performance and accessibility;
- remove dead code when demonstrably unused;
- improve API validation and error handling;
- improve security without breaking legitimate workflows;
- verify Prisma and migration consistency;
- verify client/OWNER separation;
- review VELOX dispatcher flows;
- review TransactionFormalities human-in-the-loop guarantees;
- improve test coverage and smoke tests;
- suggest infrastructure improvements.

Vercel Agent must not autonomously:

- redesign the company or rename brands;
- remove major modules;
- change pricing policy;
- enable regulated pharmaceutical commerce;
- create signatures or legal consents;
- approve financing;
- expose supplier/internal data;
- rotate or replace production secrets;
- delete databases, domains or Vercel projects;
- perform destructive production operations.

## Recommended first Vercel Agent task

Use this repository-level instruction together with a request similar to:

`Investigate the failed production deployments for this repository. Identify the real root cause from Vercel build/runtime evidence, make the minimum safe fixes, verify Next.js and Prisma consistency, run the relevant build/tests, preserve all business rules in AGENTS.md, and report any remaining external configuration blockers separately from code defects.`

## Definition of a successful agent change

A change is successful only when:

- it addresses a reproducible problem or documented improvement;
- it preserves the mandatory business, security and human-in-the-loop rules above;
- affected checks pass;
- no new confidential data is exposed;
- the change is explainable and reviewable;
- remaining external blockers are stated explicitly rather than hidden.

© PROFESJA PREMIUM LIMITED™ — Wszelkie prawa zastrzeżone.
