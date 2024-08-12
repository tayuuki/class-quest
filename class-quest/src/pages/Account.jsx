import React from 'react';
import Header from '../components/Header';

const Account = ({ users }) => {
	const user = users[0];

	return (
		<div className="min-h-screen bg-gray-100">
			<Header />
			<div className="container mx-auto p-8">
				<div className="bg-white shadow-md rounded-lg p-6">
					<h1 className="text-2xl font-bold mb-4">アカウント情報</h1>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Name
						</label>
						<p className="text-lg text-gray-900">{user.name}</p>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Username
						</label>
						<p className="text-lg text-gray-900">{user.username}</p>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							University
						</label>
						<p className="text-lg text-gray-900">{user.university}</p>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Introduction
						</label>
						<p className="text-lg text-gray-900">{user.intro}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
