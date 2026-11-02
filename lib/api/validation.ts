export interface ListQuery {
  page: number;
  limit: number;
}

function positiveInteger(value: string | null, fallback: number, maximum: number): number | null {
  if (value === null) return fallback;
  if (!/^[1-9]\d*$/.test(value)) return null;
  const number = Number(value);
  return Number.isSafeInteger(number) && number <= maximum ? number : null;
}

export function parseListQuery(params: URLSearchParams): ListQuery | null {
  const page = positiveInteger(params.get("page"), 1, 1000);
  const limit = positiveInteger(params.get("limit"), 25, 25);
  return page !== null && limit !== null ? { page, limit } : null;
}

export function parseSearchQuery(params: URLSearchParams): string | null {
  const query = params.get("q")?.trim();
  return query && query.length <= 100 ? query : null;
}
