import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactsPage = () => {
	const { t } = useLanguage();
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		message: ''
	});
	const [status, setStatus] = useState(null);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Form submission logic here
		setStatus('success');
		setTimeout(() => setStatus(null), 3000);
	};

	return (
		<div className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-5xl font-bold mb-4">
						<span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
							{t('contacts.title')}
						</span>
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
						{t('contacts.subtitle')}
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
						<h2 className="text-2xl font-bold mb-6 dark:text-white">Напишите нам</h2>

						{status === 'success' && (
							<div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-lg">
								{t('contacts.form.success')}
							</div>
						)}

						{status === 'error' && (
							<div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg">
								{t('contacts.form.error')}
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									{t('contacts.form.name')}
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 transition-all outline-none"
									placeholder="Иван Иванов"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									{t('contacts.form.phone')}
								</label>
								<input
									type="tel"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 transition-all outline-none"
									placeholder="+998 77 480-99-99"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									{t('contacts.form.email')}
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 transition-all outline-none"
									placeholder="info@belvest.uz"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									{t('contacts.form.message')}
								</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows="4"
									required
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 transition-all outline-none resize-none"
									placeholder="Ваше сообщение..."
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
							>
								<Send className="w-4 h-4" />
								{t('contacts.form.submit')}
							</button>
						</form>
					</div>

					{/* Contact Info */}
					<div className="space-y-8">
						<div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
							<h2 className="text-2xl font-bold mb-6 dark:text-white">{t('contacts.info.title')}</h2>

							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg">
										<MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
									</div>
									<div>
										<h3 className="font-medium text-gray-900 dark:text-white mb-1">Адрес</h3>
										<p className="text-gray-600 dark:text-gray-400">{t('contacts.info.address')}</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg">
										<Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
									</div>
									<div>
										<h3 className="font-medium text-gray-900 dark:text-white mb-1">Телефон</h3>
										<p className="text-gray-600 dark:text-gray-400">+998 77 480-99-99</p>
										<p className="text-gray-600 dark:text-gray-400">+998 77 480-22-22</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg">
										<Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
									</div>
									<div>
										<h3 className="font-medium text-gray-900 dark:text-white mb-1">Email</h3>
										<p className="text-gray-600 dark:text-gray-400">info@belvest.uz</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg">
										<Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
									</div>
									<div>
										<h3 className="font-medium text-gray-900 dark:text-white mb-1">Время работы</h3>
										<p className="text-gray-600 dark:text-gray-400">{t('contacts.info.workTime')}</p>
									</div>
								</div>
							</div>
						</div>

						{/* Map */}
						<div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
							<h2 className="text-2xl font-bold mb-6 dark:text-white">Мы на карте</h2>
							<div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
								<p className="text-gray-500 dark:text-gray-400">Карта</p>
							</div>
						</div>

						{/* Social Links */}
						<div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
							<h2 className="text-2xl font-bold mb-6 dark:text-white">{t('contacts.info.social')}</h2>
							<div className="flex gap-4">
								{['Facebook', 'Instagram', 'Telegram', 'YouTube'].map((social) => (
									<a
										key={social}
										href="#"
										className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-colors"
									>
										<span className="text-sm font-bold">{social[0]}</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactsPage;