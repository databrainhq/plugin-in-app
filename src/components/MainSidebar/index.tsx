import React, {useRef} from 'react';
import {useSearchParams} from 'react-router-dom';
import style from './MainSidebar.module.css';
import MainSidebarItem from './MainSidebarItem';

type MainSidebarProps = {
	className?: string;
	onSubmitToken: (token: string) => void;
};

const MainSidebar: React.FC<MainSidebarProps> = ({
	className,
	onSubmitToken,
}) => {
	const [searchParams] = useSearchParams();
	const inputRef = useRef() as React.RefObject<HTMLInputElement>;
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputRef.current && inputRef.current.value) {
			onSubmitToken(inputRef.current.value);
		}
	};
	return (
		<aside className={`${style.sidebarContainer} ${className ?? ''}`}>
			<div className='flex items-center justify-center px-3'>COMPANY</div>
			<nav className='h-full flex flex-col justify-between overflow-hidden'>
				<ul className='mt-4 mx-3 overflow-y-auto h-full'>
					<MainSidebarItem
						to='/'
						menu={
							<form onSubmit={handleSubmit} className='border rounded p-2 my-5'>
								<input
									ref={inputRef}
									defaultValue={searchParams.get('token') || ''}
									required
									className='w-full mb-5 rounded p-1 outline-none border text-black'
									placeholder='Your Token Here'
								/>
								<button
									type='submit'
									className='w-full border border-white hover:bg-blue-500 hover:border-blue-500 rounded text-center'
								>
									Submit
								</button>
							</form>
						}
					>
						Dashboard
					</MainSidebarItem>
					<MainSidebarItem to='/products'>Products</MainSidebarItem>
					<MainSidebarItem to='/orders'>Orders</MainSidebarItem>
					<MainSidebarItem to='/settings'>Settings</MainSidebarItem>
				</ul>
			</nav>
		</aside>
	);
};
export default MainSidebar;
