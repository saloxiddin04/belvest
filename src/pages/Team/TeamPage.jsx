import React from 'react';
import { Users, Award, Clock, Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import team from "../../assets/team.avif"

const TeamPage = () => {
	const { t } = useLanguage();
	const teamMembers = t('team.members');

	return (
		<div className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-5xl font-bold mb-4">
						<span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
							{t('team.title')}
						</span>
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						{t('team.subtitle')}
					</p>
				</div>

				{/* Team Stats */}
				<div className="grid md:grid-cols-3 gap-6 mb-16">
					{[
						{ icon: <Users />, number: '12', label: t('team.experts') },
						{ icon: <Award />, number: '7+', label: t('team.years') },
						{ icon: <Star />, number: '2100+', label: t('team.deals') }
					].map((stat, i) => (
						<div key={i} className="bg-white rounded-2xl p-6 shadow-lg text-center">
							<div className="bg-emerald-100 text-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
								{stat.icon}
							</div>
							<div className="text-3xl font-bold text-emerald-600 mb-1">{stat.number}</div>
							<div className="text-gray-600">{stat.label}</div>
						</div>
					))}
				</div>

				{/* Team Description */}
				<div className="bg-emerald-50 rounded-3xl p-8 mb-16">
					<p className="text-lg text-gray-700 leading-relaxed">
						{t('team.description')}
					</p>
				</div>

				{/* Team Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{teamMembers && teamMembers.map((member, index) => (
						<div
							key={index}
							className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
						>
							<div className="relative h-64 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
								<img
									src={team}
									alt={member.name}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
									<p className="text-white text-sm">{member.bio}</p>
								</div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
								<p className="text-emerald-600 font-medium mb-2">{member.position}</p>
								<div className="flex items-center gap-2 text-sm text-gray-500">
									<Clock className="w-4 h-4" />
									<span>{member.experience}</span>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Join Team CTA */}
				<div className="mt-20 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-3xl p-12 text-center text-white">
					<h2 className="text-3xl font-bold mb-4">Bizning jamoaga qo'shiling</h2>
					<p className="text-lg mb-8 opacity-90">
						Professional jamoada ishlash imkoniyatidan foydalaning
					</p>
					<button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
						Vakansiyalar bilan tanishing
					</button>
				</div>
			</div>
		</div>
	);
};

export default TeamPage;