import UserAuthForm from '@/modules/authentication/forms/user-auth-form';
import {buttonVariants} from '@/components/ui/button';
import {cn} from '@/lib/util/utils';
import {Link, useNavigate} from 'react-router-dom';
import {useEmployeeRoleDetailsStore} from '@/modules/authentication/hooks/use-sign-in-userdata';
import {useEffect} from 'react';

export default function AuthenticationPage() {
	const {user} = useEmployeeRoleDetailsStore();
	const navigate = useNavigate();
	console.log(user);
	useEffect(() => {
		if (user) {
			switch (user.employee.position.name) {
				case 'Admin':
					navigate('admin/dashboard');
					break;
				case 'Technician':
					navigate('tech/dashboard');
					break;
				case 'Sales':
					navigate('sales/dashboard');
					break;
				default:
					navigate('/');
					break;
			}
		}
	}, [user, navigate]);
	return (
		<div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
			<Link
				to="/examples/authentication"
				className={cn(
					buttonVariants({variant: 'ghost'}),
					'absolute right-4 top-4 hidden md:right-8 md:top-8',
				)}
			>
				Login
			</Link>
			<div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
				<div className="absolute inset-0 bg-zinc-900" />
				<div className="relative z-20 flex items-center text-lg font-medium">
					<img src="/icon.svg" className="mr-2 h-6 w-6" />
					Welcome to PC BEE!
				</div>
				<div className="relative z-20 mt-auto">
					<blockquote className="space-y-2">
						<p className="text-lg">
							&ldquo;SAD: PC BEE Business Management System&rdquo;
						</p>
						<footer className="text-sm">
							Aj Tollo, Rey Larombe, Clyde Cedrick Macabangon
						</footer>
					</blockquote>
				</div>
			</div>
			<div className="flex h-full items-center p-4 lg:p-8">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
					<div className="flex flex-col space-y-2 text-center">
						<h1 className="text-2xl font-semibold tracking-tight">Login</h1>
						<p className="text-sm text-muted-foreground">
							Choose a method to login in the system
						</p>
					</div>
					<UserAuthForm />
					{/* <p className="px-8 text-center text-sm text-muted-foreground">
						By clicking continue, you agree to our{' '}
						<Link
							to="/terms"
							className="underline underline-offset-4 hover:text-primary"
						>
							Terms of Service
						</Link>{' '}
						and{' '}
						<Link
							to="/privacy"
							className="underline underline-offset-4 hover:text-primary"
						>
							Privacy Policy
						</Link>
						.
					</p> */}
				</div>
			</div>
		</div>
	);
}
