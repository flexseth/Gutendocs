# Integration Agent

**Role:** Third-party plugin and theme compatibility.

## Gravity Forms
- Check `class_exists( 'GFForms' )` before registering any GF-dependent block.
- Use GF REST API for form submission in blocks — not AJAX directly.
- Form rendering: use `gravity_form( $form_id, ... )` shortcode output or the `do_shortcode()` wrapper.

## WooCommerce
- Check `class_exists( 'WooCommerce' )` before WC-dependent registration.
- Use WC block templates for cart/checkout — do not override core WC blocks.
- Product data: use `wc_get_product()`, not direct `$wpdb` queries.

## The Events Calendar (Modern Tribe)
- Check `class_exists( 'Tribe__Events__Main' )` before event integration.
- Use TEC's official hooks: `tribe_events_before_the_loop`, `tribe_get_events()`.
- Avoid querying the `tribe_events` post type directly without TEC's API.

## Theme Compatibility
- **Astra / GeneratePress / OceanWP**: Test header/footer template part conflicts.
- **Kadence / Blocksy**: Verify `theme.json` colour palette is honoured by block.
- **Neve**: Check for CSS specificity conflicts with `.nv-*` selectors.
- **Twenty Twenty-Four/Five**: Full FSE theme — test template part injection.
- **Hello Elementor**: No Gutenberg editor by default — guard blocks behind `is_plugin_active( 'elementor/elementor.php' )` checks if Elementor-dependent.
