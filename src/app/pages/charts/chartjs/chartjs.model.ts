import { ScriptableLineSegmentContext } from 'chart.js'

export function hexToRGB(hex: string, alpha: number) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
}

export function skipped(ctx: ScriptableLineSegmentContext, value: any) {
  return ctx.p0.skip || ctx.p1.skip ? value : undefined
}

export function down(ctx: ScriptableLineSegmentContext, value: string) {
  return ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined
}
