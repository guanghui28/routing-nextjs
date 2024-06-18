const DashboardLayout = ({
	children,
	users,
	revenue,
	notifications,
	login,
}: {
	children: React.ReactNode;
	users: React.ReactNode;
	revenue: React.ReactNode;
	notifications: React.ReactNode;
	login: React.ReactNode;
}) => {
	const isLoggedIn = false;
	return isLoggedIn ? (
		<div className="flex-1">
			<div className="">{children}</div>
			<div className="flex w-full">
				<div className="flex flex-col">
					<div>{users}</div>
					<div>{revenue}</div>
				</div>
				<div className="flex flex-1">{notifications}</div>
			</div>
		</div>
	) : (
		login
	);
};

export default DashboardLayout;
