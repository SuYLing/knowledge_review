import { cn } from '../../utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	customValidity?: string
	ref?: React.Ref<HTMLInputElement>
}

export const Input: React.FC<InputProps> = ({
	customValidity,
	className,
	...props
}) => {
	return (
		<input
			className={cn(
				'border border-gray-500/50 min-h-10 rounded-md indent-2 outline-amber-600',
				className
			)}
			{...props}
		/>
	)
}
