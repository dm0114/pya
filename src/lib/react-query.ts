/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	type DefaultOptions,
	QueryClient,
	type UseMutationOptions,
} from '@tanstack/react-query';

export const queryConfig = {
	queries: {
		// throwOnError: true,
		refetchOnWindowFocus: false,
		retry: false,
		staleTime: 1000 * 60,
	},
} satisfies DefaultOptions;

export const queryClient = new QueryClient({
	defaultOptions: queryConfig,
});

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
	Awaited<ReturnType<FnType>>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type QueryConfig<T extends (...args: any[]) => any> = Omit<
	ReturnType<T>,
	'queryKey' | 'queryFn'
>;

export type MutationConfig<
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	MutationFnType extends (...args: any) => Promise<any>,
> = UseMutationOptions<
	ApiFnReturnType<MutationFnType>,
	Error,
	Parameters<MutationFnType>[0]
>;
