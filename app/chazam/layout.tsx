import '@/styles/dist.css';
import React from 'react';
import CNavBar from './chazamNavBar';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
	return (
		
			<div>
				<CNavBar />
				<div className=" bg-zinc-900">
					{children}
				</div>
			</div>
	)
}