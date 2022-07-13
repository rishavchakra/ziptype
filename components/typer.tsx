import { useState } from "react";

import ProcBuffers from '../lib/processes/buffers.ts'
import ProcTime from '../lib/processes/time.ts'
import ProcAccuracy from '../lib/processes/accuracy.ts'
import ProcWpm from '../lib/processes/wpm.ts'

const Typer = () => {
	const [stateBuffers, setBuffers]	= useState(new ProcBuffers)
	const [stateTime, setTime]				= useState(new ProcBuffers)
	const [stateAcc, setAcc]					= useState(new ProcBuffers)
	const [stateWpm, setWpm]					= useState(new ProcBuffers)

	return (
		<div></div>
	)
}

export default Typer
