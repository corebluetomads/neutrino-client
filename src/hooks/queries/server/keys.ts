export const serverQueryKeys = {
	all: ['servers', 'all'] as const,
	detail: () => [...serverQueryKeys.all, 'details'] as const,
}
