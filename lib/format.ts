import { AlertRule } from '@/types'
export { truncateId as formatId } from '@/lib/stellar'

/**
 * Shared formatting helpers for dates used across the app.
 * `formatId` (re-exported from @/lib/stellar) truncates an ID for display.
 */

/** Formats a Unix ms timestamp as a locale date string (e.g. "5/29/2026"). */
export function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString()
}

/** Formats a Unix ms timestamp as a locale date+time string. */
export function formatDateTime(timestamp: number): string {
  return new Date(timestamp).toLocaleString()
}

/** Formats an alert rule as a human-readable summary string. */
export function formatRuleSummary(rule: AlertRule): string {
  switch (rule.type) {
    case 'LargeTransfer':
      return `>= ${rule.threshold_xlm} XLM`
    case 'FunctionCalled':
      return rule.function_name || 'function'
    case 'AdminFunctionCalled':
      return rule.function_names?.join(', ') || 'admin functions'
    default:
      return ''
  }
}
