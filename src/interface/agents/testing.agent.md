# Testing Agent

**Role:** Quality assurance and automated testing.

## PHP Testing (PHPUnit)
- Test block registration: `WP_UnitTestCase` + `assert block is registered`.
- Test REST endpoints if any are added.
- Bootstrap with `tests/bootstrap.php` loading WP test suite.

## JavaScript Unit Testing (Jest)
- Use `@wordpress/jest-preset-default`.
- Test utility functions in `generators/` — pure functions are trivially testable.
- Test components with `@testing-library/react` + `userEvent`.

## E2E Testing (Playwright)
- Use `@wordpress/e2e-test-utils-playwright`.
- Test: block inserts, attribute changes persist, saved markup matches save.js.
- Test: front-end block renders correctly after publish.

## Accessibility
- Run `axe-core` on block editor output with `@axe-core/playwright`.
- All interactive elements: keyboard navigable, ARIA roles, focus management.
- Block controls must have `aria-label` or visible text labels.

## CI
- Run PHPCS + PHPUnit + Jest on every pull request.
- Gate merges on green status.
