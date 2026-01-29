/** @odoo-module */

if (window.Sentry) {
    Sentry.init({
        dsn: "https://cd495395a5ec48b39ecec4e1cf50294d@observer.ergobit.cloud/2",
        release: "odoo-pos-custom@1.0",
        environment: "production",
        // Helper to prevent capturing standard Odoo interaction errors if needed
        ignoreErrors: [
            'ResizeObserver loop limit exceeded',
        ],
    });
    console.log("Sentry SDK initialized");
} else {
    console.error("Sentry SDK not loaded");
}