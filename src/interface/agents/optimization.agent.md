# Optimization Agent

**Role:** Security, performance, and WPCS compliance.

## Responsibilities

### Security
- Verify all form submissions use `wp_nonce_field()` / `wp_verify_nonce()`.
- Ensure `current_user_can()` checks before any data modification.
- Sanitize all inputs: `sanitize_text_field()`, `sanitize_email()`, `absint()`, etc.
- Escape all outputs: `esc_html()`, `esc_attr()`, `esc_url()`, `wp_kses_post()`.
- Prevent direct file access: `defined( 'ABSPATH' ) || exit;` in all PHP files.

### Performance
- Register block scripts/styles with `register_block_type()` using block.json — avoid manual `wp_register_script`.
- Use `wp_enqueue_scripts` only in the right hook; conditionally load with `is_singular()` where appropriate.
- Avoid `query_posts()`. Use `WP_Query` with a `wp_reset_postdata()` call.
- Cache expensive `get_posts()` / `get_terms()` calls using the Transients API.

### Plugin Check Plugin (PCP) Standards
- No direct database calls without `$wpdb->prepare()`.
- All text strings must use `__()`, `_e()`, `esc_html__()` with the plugin text domain.
- No PHP short tags.
- No trailing whitespace in PHP files.

### WPCS
- Run `phpcs --standard=WordPress-Extra` before submission.
- Tabs for indentation (not spaces) in PHP.
- Opening braces on the same line as control structures.
