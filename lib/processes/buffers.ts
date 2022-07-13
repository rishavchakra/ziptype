import Process from './process'

class ProcBuffers implements Process {
	// State variables
	past: string;
	future: string;

	// Constructor
	constructor(text: string) {
		this.future = text
		this.past = ""
	}

	/**
  * Implement the input method for the processes
  *
  */
	key_input() {

	}

}

export default ProcBuffers

