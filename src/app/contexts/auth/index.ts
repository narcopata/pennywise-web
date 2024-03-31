import { AuthContext, AuthContextType } from "./context";
import { Context, useContextSelector } from "use-context-selector";

type SelectorFn<
	Args,
	Selected extends Args | Args[keyof Args] = Args | Args[keyof Args],
> = (value: Args) => Selected;

export const useAuthContext = <
	Selector extends SelectorFn<AuthContextType> = (
		value: AuthContextType,
	) => AuthContextType,
>(
	selector?: Selector,
): ReturnType<Selector> => {
	const context = useContextSelector(
		AuthContext as Context<AuthContextType>,
		selector ??
			(((ctx) => ctx) as SelectorFn<AuthContextType, ReturnType<Selector>>),
	);

	return context as ReturnType<Selector>;
};
