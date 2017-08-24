// Actions Examples
const TICK = 'TICK'
export const serverRenderClock = isServer => ({
	type: TICK, 
	light: !isServer, 
	ts: Date.now()
})

export const startClock = () => ({ 
	type: TICK, 
	light: true, ts: 
	Date.now() 
})

const ADD = 'ADD'
export const addCount = () => ({ 
	type: ADD
})