# Angular practices

Prefer standalone components when the app uses them; otherwise use the existing NgModule style. Use typed reactive forms, `ChangeDetectionStrategy.OnPush`, injectable services, and route-level lazy loading when established. Centralize API error behavior in the existing interceptor/service pattern; use `catchError` only to add feature context and rethrow or return a deliberate fallback.
