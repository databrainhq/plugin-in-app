import '@databrainhq/plugin/dist/style.css';
import {Dashboard} from '@databrainhq/plugin';
import {useEffect, useState} from 'react';
import {Routes, Route, useSearchParams} from 'react-router-dom';
import MainSidebar from './components/MainSidebar';
import Page from './components/Page';

function App() {
	const [searchParams] = useSearchParams();
	const guestToken = searchParams.get('token');
	const [token, setToken] = useState(guestToken || '');

	useEffect(() => {
		if (token) searchParams.set('token', token);
	}, [token]);

	return (
		<div className='flex h-screen w-screen overflow-hidden'>
			<MainSidebar onSubmitToken={(value) => setToken(value)} />
			<div className='w-full overflow-x-hidden'>
				<Routes>
					<Route
						index
						element={
							<div className='w-full'>
								<Dashboard token={token} />
							</div>
						}
					/>
					<Route path='orders' element={<Page title='Orders' />} />
					<Route path='products' element={<Page title='Products' />} />
					<Route path='settings' element={<Page title='Settings' />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
