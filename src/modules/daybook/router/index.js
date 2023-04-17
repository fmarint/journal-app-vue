
export default
	{
		name: 'daybook',
		component: () => import('../layouts/DayBookLayout.vue'),
		// component: () => import('@/modules/daybook/layouts/DayBookLayout.vue'),
		children: [
			{
				path: '',
				name: 'no-entry',
				component: () => import('../views/NoEntrySelected.vue')
			},
			{
				path: ':id',
				name: 'entry',
				component: () => import('../components/EntryView.vue')
			}
		]
	}


